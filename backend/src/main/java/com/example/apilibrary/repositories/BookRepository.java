package com.example.apilibrary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apilibrary.entities.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
