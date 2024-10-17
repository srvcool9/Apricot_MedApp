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
@Table(name = "eventimages")
@EntityListeners(AuditingEntityListener.class)
public class EventImage implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_image_id")
    private Long eventImageId;

    @Column(name = "image_name", nullable = false)
    private String imageName;

    @Column(name = "stored_image_name", nullable = false)
    private String storedImageName;

    @CreatedDate
    @Column(name = "created_on")
    private Date createdOn;

    @LastModifiedDate
    @Column(name = "updated_on")
    private Date updatedOn;
}
