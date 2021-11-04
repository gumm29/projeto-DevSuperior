package com.devsuperior.dsvendas.repository;

import com.devsuperior.dsvendas.entities.Sales;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sales, Long>{
  
}
