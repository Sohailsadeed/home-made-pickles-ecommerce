package com.homemadepickles.config;

import com.homemadepickles.model.Product;
import com.homemadepickles.model.User;
import com.homemadepickles.repository.ProductRepository;
import com.homemadepickles.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository, UserRepository userRepository) {
        return args -> {
            if (productRepository.count() == 0) {
                Product p1 = new Product(null, "Spicy Mango Pickle", "Pickles", 12.99,
                        "Traditional spicy mango pickle with authentic spices.", 50,
                        "https://images.unsplash.com/photo-1589135398302-388bd658d247?q=80&w=1000&auto=format&fit=crop");
                Product p2 = new Product(null, "Lemon Pickle", "Pickles", 10.99,
                        "Tangy and salty lemon pickle, perfect with curd rice.", 40,
                        "https://images.unsplash.com/photo-1621995830745-283017844e3d?q=80&w=1000&auto=format&fit=crop");
                Product p3 = new Product(null, "Banana Chips", "Snacks", 5.99,
                        "Crispy salted banana chips made in pure coconut oil.", 100,
                        "https://images.unsplash.com/photo-1621648437340-e18e81112674?q=80&w=1000&auto=format&fit=crop");
                Product p4 = new Product(null, "Spicy Murukku", "Snacks", 7.49,
                        "Crunchy and spicy traditional murukku.", 75,
                        "https://images.unsplash.com/photo-1626082833333-66236b9e403d?q=80&w=1000&auto=format&fit=crop");
                Product p5 = new Product(null, "Garlic Pickle", "Pickles", 11.49, "Strong and aromatic garlic pickle.",
                        30,
                        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000&auto=format&fit=crop");

                productRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));
                System.out.println("Sample products seeded");
            }

            if (userRepository.count() == 0) {
                User user = new User(null, "Test User", "test@example.com", "password123",
                        "123 Pickle Lane, Snack City");
                userRepository.save(user);
                System.out.println("Sample user seeded");
            }
        };
    }
}
