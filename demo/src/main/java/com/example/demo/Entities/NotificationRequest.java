package com.example.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NotificationRequest {


    @Override
    public String toString() {
        return "NotificationRequest{" +

                ", ngoEmail='" + ngoEmail + '\'' +
                ", donorName='" + donorName + '\'' +
                ", donorMobile='" + donorMobile + '\'' +
                ", donorAddress='" + donorAddress + '\'' +
                ", message='" + message + '\'' +
                '}';
    }



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private String ngoEmail;
    private String donorName;
    private String donorMobile;
    private String donorAddress;
    private String message;

    public void setNgoEmail(String ngoEmail) {
        this.ngoEmail = ngoEmail;
    }

    public void setDonorName(String donorName) {
        this.donorName = donorName;
    }

    public void setDonorMobile(String donorMobile) {
        this.donorMobile = donorMobile;
    }

    public void setDonorAddress(String donorAddress) {
        this.donorAddress = donorAddress;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getNgoEmail() {
        return ngoEmail;
    }

    public String getDonorName() {
        return donorName;
    }

    public String getDonorMobile() {
        return donorMobile;
    }

    public String getDonorAddress() {
        return donorAddress;
    }

    public String getMessage() {
        return message;
    }
// Getters and setters
}

