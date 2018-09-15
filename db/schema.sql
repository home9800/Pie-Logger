
CREATE DATABASE pie_db;

USE pie_db;

CREATE TABLE pie (
	pie_id INT PRIMARY KEY AUTO_INCREMENT,
    pie_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN
);