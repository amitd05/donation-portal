package com.example.demo.Controller;



import com.example.demo.Entities.NGORequest;
import com.example.demo.Entities.NotificationRequest;
import com.example.demo.Repository.NGORequestRepository;
import com.example.demo.Service.EmailService;
import com.example.demo.Service.NGORequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "${app.cors.allowed-origin}") // Adjust the origin as needed
public class NGORequestController {
    @Autowired
    private NGORequestService service;
    @Autowired
    private EmailService emailService;
    @Autowired
    private NGORequestRepository repository;// Inject the EmailService
    @PostMapping("/notify-ngo")
    public ResponseEntity<String> notifyNGO(@RequestBody NotificationRequest notificationRequest) {
        if (notificationRequest == null) {
            System.out.println("notificationRequest is null");
            return new ResponseEntity<>("Request body is null", HttpStatus.BAD_REQUEST);
        }


        System.out.println("Notification Request: " + notificationRequest);

        boolean success = service.notifyNGO(notificationRequest);
        if (success) {
            return new ResponseEntity<>("Notification sent to NGO successfully!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to send notification to NGO.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/requests")
    public List<NGORequest> getAllRequests() {
        return service.getAllRequests();
    }

    @PostMapping("/requests")
    public ResponseEntity<NGORequest> addRequest(@RequestBody NGORequest request) {
        String token = generateToken();
        request.setToken(token);

        // Save the request
        NGORequest savedRequest = service.addRequest(request);

        // Send the token via email
        try {
            emailService.sendTokenEmail(savedRequest.getEmail(), token);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(savedRequest, HttpStatus.OK);
    }
    @PutMapping("/requests/{id}")
    public ResponseEntity<?> updateNGORequest(@PathVariable Long id, @RequestBody NGORequest updatedRequest) {
        try {
            NGORequest updated = service.updateNGORequest(id, updatedRequest);
            return ResponseEntity.ok(updated);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatus()).body(e.getReason());
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable Long id, @RequestParam String token) {
        Optional<NGORequest> ngoRequestOptional = repository.findById(id);

        if (!ngoRequestOptional.isPresent()) {
            return ResponseEntity.status(404).body("Request not found with id " + id);
        }

        NGORequest ngoRequest = ngoRequestOptional.get();
        if (!ngoRequest.getToken().equals(token)) {
            return ResponseEntity.status(403).body("Invalid token");
        }

        repository.delete(ngoRequest);

        return ResponseEntity.ok().build();
    }
    private String generateToken() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }

}
