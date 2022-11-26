package com.network.spring.Network.Entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.security.Timestamp;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "place")
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "place_id", length = 20)
    private Long id;
    @Column(name = "place_name", length = 50, nullable = false)
    private String name;
    @Column(name = "place_cur_tmp", length = 19, nullable = true)
    private Long tmp;

    @Column(name = "place_feel_hot", nullable = true)
    private Long hot;
    @Column(name = "place_feel_cool", nullable = true)
    private Long cool;
    @Column(name = "place_feel_good", nullable = true)
    private Long good;
}
