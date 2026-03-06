package com.homemadepickles.controller;

import com.homemadepickles.model.Subscription;
import com.homemadepickles.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping
    public Subscription subscribe(@RequestBody Subscription subscription) {
        return subscriptionService.subscribe(subscription);
    }

    @GetMapping("/user/{userId}")
    public List<Subscription> getSubscriptionsByUserId(@PathVariable String userId) {
        return subscriptionService.getSubscriptionsByUserId(userId);
    }

    @DeleteMapping("/{id}")
    public Subscription cancelSubscription(@PathVariable String id) {
        return subscriptionService.cancelSubscription(id);
    }
}
