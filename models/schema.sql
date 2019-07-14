DROP DATABASE IF EXISTS endemic_db;
CREATE DATABASE endemic_db;

USE endemic_db;

CREATE TABLE diseases(
	id Int( 10 ) AUTO_INCREMENT NOT NULL,
	diseaseName VARCHAR(255) NOT NULL,
	symptom1 VARCHAR(255) NOT NULL,
    symptom2 VARCHAR(255) NOT NULL,
    symptom3 VARCHAR(255) NOT NULL,
    agressiveness INTEGER (10) NOT NULL,
	PRIMARY KEY ( id )
);


CREATE TABLE treatments(
	id Int( 10 ) AUTO_INCREMENT NOT NULL,
	treatmentName VARCHAR(255) NOT NULL,
    treatmentCategory VARCHAR(255) NOT NULL,
	doctorEffect INTEGER (10) NOT NULL,
    shamanEffect INTEGER (10) NOT NULL,
    biochemistEffect INTEGER (10) NOT NULL,
	PRIMARY KEY ( id )
);

CREATE TABLE effects(
	id Int( 10 ) AUTO_INCREMENT NOT NULL,
	effectName VARCHAR(255) NOT NULL,
	effectDescription TEXT,
    positiveEffect BOOLEAN NOT NULL,
	PRIMARY KEY ( id )
);