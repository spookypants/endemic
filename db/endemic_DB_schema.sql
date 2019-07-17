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
	id INT( 10 ) AUTO_INCREMENT NOT NULL,
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

--this is now being created by our model - players.js
-- CREATE TABLE players(
-- id INT(10) AUTO_INCREMENT NOT NULL,
-- userName VARCHAR(255) NOT NULL,
-- password TEXT,
-- gender VARCHAR(50),
-- age INTEGER(10),
-- medicinalPreference VARCHAR(50),
-- lastAvatarId INTEGER(10), -- link this as a foreign key later
-- lastGameLog TEXT,
-- PRIMARY KEY ( id )
-- );

CREATE TABLE avatars(
id INT(10) AUTO_INCREMENT NOT NULL,
avatarName VARCHAR(255),
gender VARCHAR(50) NOT NULL,
specialistType VARCHAR (50) NOT NULL, -- link this as a foreign key later (maybe)
baseImage VARCHAR (255),
sadImage VARCHAR(255),
happyImage VARCHAR(255),
sadVoiceEmote VARCHAR(255),
happyVoiceEmote VARCHAR (255),
PRIMARY KEY ( id )
);

CREATE TABLE patientConditionGraphic(
id INT(10) AUTO_INCREMENT NOT NULL,
conditionName VARCHAR (50),
minHealth INTEGER (10) NOT NULL,
maxHealth INTEGER(10) NOT NULL,
displayImage VARCHAR(255),
PRIMARY KEY ( id )
);