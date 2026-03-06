package com.homemadepickles.service;

import com.homemadepickles.model.Subscription;
import com.homemadepickles.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public Subscription subscribe(Subscription subscription) {
        subscription.setStartDate(new Date());
        subscription.setStatus("ACTIVE");
        return subscriptionRepository.save(subscription);
    }

    public List<Subscription> getSubscriptionsByUserId(String userId) {
        return subscriptionRepository.findByUserId(userId);
    }

    public Subscription cancelSubscription(String id) {
        Subscription subscription = subscriptionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));
        subscription.setStatus("CANCELLED");
        return subscriptionRepository.save(subscription);
    }
}
