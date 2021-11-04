package com.devsuperior.dsvendas.controller;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.services.SaleServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/saler")
public class SaleController {

  @Autowired
  private SaleServices service;

  @GetMapping
  public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
    Page<SaleDTO> list = service.find_all(pageable);
    return ResponseEntity.ok(list);
  }
}
