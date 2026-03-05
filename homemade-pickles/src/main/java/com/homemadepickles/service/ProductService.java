package com.homemadepickles.service;

import com.homemadepickles.model.Product;
import com.homemadepickles.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void updateStock(String productId, int quantityChange) {
        productRepository.findById(productId).ifPresent(product -> {
            product.setStockQuantity(product.getStockQuantity() - quantityChange);
            productRepository.save(product);
        });
    }
}
