CREATE TABLE patientConditionGraphic(
id INT(10) AUTO_INCREMENT NOT NULL,
conditionName VARCHAR (50),
minHealth INTEGER (10) NOT NULL,
maxHealth INTEGER(10) NOT NULL,
displayImage VARCHAR(255),
PRIMARY KEY ( id )
);
