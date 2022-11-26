package com.network.spring.Network.Repository;

import com.network.spring.Network.Entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PlaceRepository extends JpaRepository<Place, Long> {
}
