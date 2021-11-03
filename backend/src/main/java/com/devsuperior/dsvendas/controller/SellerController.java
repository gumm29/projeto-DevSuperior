package com.devsuperior.dsvendas.controller;

import java.util.List;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.services.SellerServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

  @Autowired
  private SellerServices service;

  @GetMapping
  public ResponseEntity<List<SellerDTO>> findAll(){
    List<SellerDTO> list = service.find_all();
    return ResponseEntity.ok(list);
  }
}
