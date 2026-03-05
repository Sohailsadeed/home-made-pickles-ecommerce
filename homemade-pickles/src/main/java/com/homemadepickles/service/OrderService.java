package com.homemadepickles.service;

import com.homemadepickles.model.Order;
import com.homemadepickles.model.Product;
import com.homemadepickles.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductService productService;

    public Order placeOrder(Order order) {
        // Calculate total and check stock
        double total = 0;
        for (Order.OrderItem item : order.getItems()) {
            Product product = productService.getProductById(item.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found: " + item.getProductId()));

            if (product.getStockQuantity() < item.getQuantity()) {
                throw new RuntimeException("Insufficient stock for product: " + product.getName());
            }

            total += product.getPrice() * item.getQuantity();
            productService.updateStock(item.getProductId(), item.getQuantity());
        }

        order.setTotalAmount(total);
        order.setOrderDate(new Date());
        order.setStatus("COMPLETED"); // Simulated immediate completion

        return orderRepository.save(order);
    }

    public List<Order> getOrdersByUserId(String userId) {
        return orderRepository.findByUserId(userId);
    }
}
