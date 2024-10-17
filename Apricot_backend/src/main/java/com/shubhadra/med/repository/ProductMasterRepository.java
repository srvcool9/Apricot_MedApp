package com.shubhadra.med.repository;

import com.shubhadra.med.models.ProductMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductMasterRepository extends JpaRepository<ProductMaster,Long> {
    
}
