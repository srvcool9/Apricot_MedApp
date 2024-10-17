package com.shubhadra.med.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "productimages")
@EntityListeners(AuditingEntityListener.class)
public class ProductImages implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long imageId;

    @Column(name = "image_name", nullable = false)
    private String imageName;

    @Column(name = "stored_image_name", nullable = false)
    private String storedImageName;

    @Column(name = "image_server_path", nullable = false)
    private String imageServerPath;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductMaster productMaster;


    @CreatedDate
    @Column(name = "created_on")
    private Date createdOn;

    @LastModifiedDate
    @Column(name = "updated_on")
    private Date updatedOn;



}
