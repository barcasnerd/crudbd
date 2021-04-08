--Se crea la base de datos
CREATE DATABASE bienestar;

--Se usa la base de datos
USE bienestar;

--Se crea la tabla padre
CREATE TABLE PADRE (
  id INT NOT NULL,
  nom VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

--Se crea la tabla hijo
CREATE TABLE HIJO (
  id INT NOT NULL,
  nom INT NOT NULL,
  hijode INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (hijode) REFERENCES PADRE(id)
);

--Se muestran todas las tablas
show tables;

--Se describe la tabla
describe customer;


