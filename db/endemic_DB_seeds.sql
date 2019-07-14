CREATE TABLE patientConditionGraphic(
id INT(10) AUTO_INCREMENT NOT NULL,
conditionName VARCHAR (50),
minHealth INTEGER (10) NOT NULL,
maxHealth INTEGER(10) NOT NULL,
displayImage VARCHAR(255),
PRIMARY KEY ( id )
);


INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Alimdafinil", "Conventional Medicine", 20, 10, 5);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Alodenu", "Shamanistic Medicine", 5, 20, 10);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Galanruvax", "Experimental Medicine", 15, 5, 20);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Robamumab", "Conventional Medicine", 20, 10, 5);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Vibrafenib", "Shamanistic Medicine", 5, 20, 10);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Fluaxane", "Experimental Medicine", 15, 5, 20);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Dexlannate Vitronuma", "Conventional Medicine", 20, 10, 5);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Diclodiol Deslopirin", "Shamanistic Medicine", 5, 20, 10);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Colezolam Albendadocin", "Experimental Medicine", 15, 5, 20);