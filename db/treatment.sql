DROP DATABASE IF EXISTS treatment_db;

CREATE DATABASE treatment_db;
USE treatment_db;

CREATE TABLE treatments
(
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
	treatmentName VARCHAR(255) NOT NULL,
    treatmentCategory VARCHAR(255) NOT NULL,
	doctorEffect INTEGER(10) NOT NULL,
    shamanEffect INTEGER(10) NOT NULL,
    biochemistEffect INTEGER(10) NOT NULL,
	PRIMARY KEY (id)
);