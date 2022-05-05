package com.example.apilibrary.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apilibrary.dto.BookDTO;
import com.example.apilibrary.services.BookService;

@RestController
@RequestMapping(value = "/books")
public class BookController {
	
	@Autowired
	private BookService service;

	@GetMapping
	public Page<BookDTO> findAll(Pageable pageable){
	return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public BookDTO findById(@PathVariable Long id) {
	return service.findById(id);
	}
}
