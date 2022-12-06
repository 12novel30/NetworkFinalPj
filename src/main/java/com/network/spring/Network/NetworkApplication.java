package com.network.spring.Network;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class NetworkApplication {

//	public static void main(String[] args) {
//		SpringApplication.run(NetworkApplication.class, args);
//		System.out.println("fight! ");
//	}

	public static final String APPLICATION_LOCATIONS = "spring.config.location="
			+ "classpath:application.properties";
//			+ "classpath:aws-s3.yml";

	public static void main(String[] args) {
		// SpringApplication.run(DemoApplication.class, args);
		new SpringApplicationBuilder(NetworkApplication.class)
				.properties(APPLICATION_LOCATIONS)
				.run(args);
		System.out.println("Start!");
	}
}
