package com.example.apilibrary.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.apilibrary.dto.BookDTO;
import com.example.apilibrary.entities.Book;
import com.example.apilibrary.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository repository;
	
	@Transactional(readOnly = true)
	public Page<BookDTO> findAll(Pageable pageable) {
		Page<Book> result = repository.findAll(pageable);
		Page<BookDTO> page = result.map(x -> new BookDTO(x));
		return page;
	}

	@Transactional(readOnly = true)
	public BookDTO findById(Long id) {
		Book result = repository.findById(id).get();
		BookDTO dto = new BookDTO(result);
		return dto;
	}

}
