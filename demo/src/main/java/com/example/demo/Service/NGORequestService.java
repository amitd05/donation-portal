package com.example.demo.Service;



import com.example.demo.Entities.NGORequest;
import com.example.demo.Repository.NGORequestRepository;
import com.example.demo.Entities.NotificationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class NGORequestService {
    @Autowired
    private NGORequestRepository repository;
    @Autowired
    private EmailService emailService;


    public boolean notifyNGO(NotificationRequest notificationRequest) {
        if (notificationRequest == null) {
            System.out.println("NotificationRequest in service is null");
            return false;
        }

        // Check if any field in notificationRequest is null if required
        if (notificationRequest.getDonorName() == null || notificationRequest.getDonorMobile() == null) {
            System.out.println("Required fields are missing in NotificationRequest");
            return false;
        }
        String subject = "Donor wants to donate";
        String message = "Donor Name: " + notificationRequest.getDonorName() + "\n" +
                "Donor Mobile: " + notificationRequest.getDonorMobile() + "\n" +
                "Donor Address: " + notificationRequest.getDonorAddress() + "\n" +
                "Message: " + notificationRequest.getMessage();

        // Assuming you have implemented the EmailService to send emails
        return emailService.sendEmail(notificationRequest.getNgoEmail(), subject, message);
    }

    public List<NGORequest> getAllRequests() {
        return repository.findAll();
    }

    public NGORequest addRequest(NGORequest request) {

        return repository.save(request);
    }
    public NGORequest updateNGORequest(Long id, NGORequest updatedRequest) {
        return repository.findById(id).map(ngoRequest -> {
            if (ngoRequest.getToken().equals(updatedRequest.getToken())) {
                ngoRequest.setNgoName(updatedRequest.getNgoName());
                ngoRequest.setContactPerson(updatedRequest.getContactPerson());
                ngoRequest.setEmail(updatedRequest.getEmail());
                ngoRequest.setAddress(updatedRequest.getAddress());
                ngoRequest.setPhone(updatedRequest.getPhone());
                ngoRequest.setDescription(updatedRequest.getDescription());
                ngoRequest.setItem(updatedRequest.getItem());
                ngoRequest.setImage(updatedRequest.getImage());
                return repository.save(ngoRequest);
            } else {
                throw new ResponseStatusException(
                        HttpStatus.FORBIDDEN, "Invalid token");
            }
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "NGO request not found"));
    }
}

