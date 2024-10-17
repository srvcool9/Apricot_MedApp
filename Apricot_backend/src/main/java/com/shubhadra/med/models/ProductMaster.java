package com.shubhadra.med.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "productmaster")
@EntityListeners(AuditingEntityListener.class)
public class ProductMaster implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "product_description", nullable = false)
    private String productDescription;

    @Column(name = "price", nullable = false)
    private Long price;

    @OneToMany(mappedBy = "productMaster")
    @JsonIgnoreProperties(value = "productMaster")
    private List<ProductImages> productImages;

    @CreatedDate
    @Column(name = "created_on")
    private Date createdOn;

    @LastModifiedDate
    @Column(name = "updated_on")
    private Date updatedOn;



}
