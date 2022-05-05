package com.example.apilibrary.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_book")
public class Book {
  
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title, author;
	private int year, copies_number, pages_number;
	private String image;
	
	public Book() {
	}
	
	public Book(Long id, String title, String author, int year, int copies_number, int pages_number, String image) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.year = year;
		this.copies_number = copies_number;
		this.pages_number = pages_number;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getCopies_number() {
		return copies_number;
	}

	public void setCopies_number(int copies_number) {
		this.copies_number = copies_number;
	}

	public int getPages_number() {
		return pages_number;
	}

	public void setPages_number(int pages_number) {
		this.pages_number = pages_number;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
