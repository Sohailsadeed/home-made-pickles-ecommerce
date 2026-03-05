package com.homemadepickles.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "subscriptions")
public class Subscription {
    @Id
    private String id;
    private String userId;
    private String productId;
    private String productName;
    private String frequency; // WEEKLY / MONTHLY
    private Date startDate;
    private String status; // ACTIVE, CANCELLED
}
