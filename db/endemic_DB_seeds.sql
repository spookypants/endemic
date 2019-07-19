
USE endemic_db;

-- Avatars seeds
INSERT INTO avatars (avatarName, gender, specialistType)
VALUES 
("Jack", "male", "doctor"),
("Thunderbolt", "male", "shaman"),
("Hermann", "male", "bioChemist"),
("Susan", "female", "doctor"),
("Eagle Talon", "female", "shaman"),
("Ashanti", "female", "bioChemist");

-- Diseases Seeds
INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Hepatitis B","Jaundice","Dark Urine","Clay-Colored Bowel Movements",5);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Malaria","Fever","Chills","Sweats", 5);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Bubonic Plague","Sudden Fever","Headache","Swollen, Tender and Painful Lymph Nodes",7);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Dengue Fever","Nausea/Vomiting","Bleeding From the Nose or Gums","Aches and Pains (eyes, muscles, joints, or bones)",4);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Rickettsiosis","Lack of Appetite","Stomach Pain","Muscle Pain",6);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Pertusis","Persistent Cough","Runny Nose","Sneezing",3);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Measles","Conjunctivitis","Koplik Spots","Rash Made of Large, Flat Blotches",4);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Lyme Disease","Erythema Migrans (EM) Rash","Neck Stiffness","Heart Palpitations",8);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Zika","Conjunctivitis","Joint Pain","Headache",2);

INSERT INTO diseases(diseaseName, symptom1,symptom2,symptom3,agressiveness)
VALUES ("Varicella","Itchy Rash of Blisters","Headache","Fatigue",2);


-- Treatments Seeds
INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("20cc Alimdafinil", "Conventional Medicine", 20, 10, 5);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Leeches", "Shamanistic Medicine", 5, 20, 10);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("250 mg Galanruvax", "Experimental Medicine", 15, 5, 20);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("100 mg Robamumab", "Conventional Medicine", 20, 10, 5);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Gondwanian Throat Singing", "Shamanistic Medicine", 5, 20, 10);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("400cc Fluaxane", "Experimental Medicine", 15, 5, 20);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("500 mg Dexlannate Vitronuma", "Conventional Medicine", 20, 10, 5);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("Deslopirin Tea", "Shamanistic Medicine", 5, 20, 10);

INSERT INTO treatments (treatmentName, treatmentCategory, doctorEffect, shamanEffect, biochemistEffect) 
VALUES ("10cc Colezolam Albendadocin", "Experimental Medicine", 15, 5, 20);

-- Effects Seeds
INSERT INTO effects (effectName, effectDescription, positiveEffect)
VALUES
("Blood Pressure Stabilizing!", " Treatment has lead to the patient's blood pressure reaching normal levels. The patient looks to be feeling at least a little better.", 1),
("Blood Pressure Holding!", " No change in the patient's blood pressure. The patient is stable -- not good, but not bad -- which is probably good. For now.", 1),
("Blood Pressure Dropping!", " The patient's blood pressure is at dangerously low levels! The patient could lose consciousness -- this could be bad!", 0),
("Blood Pressure Rising!", " The patient's blood pressure is reaching dangerously high levels! The patient looks discomforted -- this could get worse!", 0),

("Temperature Stabilizing!", " Treatment has brough the patient's temperature back into normal range. The patient should rest easier now.", 1),
("Temperature Holding!", " No change in the patient's temperature. At least it's not worse. Yet.", 1),
("Temperature Rising!", " The patient's temperature is rising! Bring that fever down -- stat!", 0),
("Temperature Dropping!", " The patient's temperature is plummeting! Whatever you did -- do better!", 0),

("Acute Rash Emerges!", " The patient has developed an acute rash -- this doesn't look good.", 0),
("Rash Clearing Up!", " Looks like that rash is clearing up -- nice work.", 1),

("Acute Emesis!", " The patient just sat up and vomited everywhere! Gross!", 0),
("Nausea!", " The patient is suddenly feeling very nauseous... better stand back.", 0),
("Nausea Fading!", " The patient is feeling much less sick. Good news for your shoes.", 1),
("Emetic Phase Passing!", " Whatever the patient needed to get out of their system... it all came out. Forcefully. Some things fix themselves.", 1),

("Tachycardia!", " The patient's heart rate is spiking! This could be a problem.", 0),
("Bradycardia!", " The patient's heart rate is dropping! This looks bad!", 0),
("Pulse Holding!", " The patient's heart rate is holding steady! We've still got time!", 1),
("Pulse Stabilizing!", " The patient's heart rate is returning to normal levels. Nice work.", 1),

("Hives!", " The patient has broken out in hives and can't stop scratching! Is it a symptom or a reaction?", 0),
("Hives Clearing Up!", " The patient looks relieved. You should be, too. Scratch hives off the problem list.", 1),

("Jaundice!", " Is it just the light, or is the patient looking a little yellow?", 0),
("Jaundice Clearing Up!", " Color returns to the patient's cheeks. Hopefully they're okay. Hopefully their liver is okay, too.", 1),

("Acute Systemic Pain!", " The patient can't stop screaming! It hurts everywhere -- do something!", 0),
("Pain Relieved!", " Whatever you did, the pain is passing. The patient is feeling a little better. For now.", 1),

("Shock!", " Grab a crash cart -- the patient is going into shock!", 0),
("Patient Recovering!", " You may still feel the effects, but at least the patient isn't crashing anymore. Take your wins where they come.", 1),

("Vitals Deteriorating!", " There's no immediate answer to why -- all you need to know is it's a problem.", 0),
("Vitals Holding!", " We don't know why the patient status isn't changed, but at least it's not getting worse.", 1),
("Vitals Stabilizing!", " We won't have all the answers until lab results come back, but the patient is looking and feeling better for now. Nice work.", 1),

("Acute Fatigue!", " The patient is suddenly feeling fatigued. That could be a problem.", 0),
("Fatigue Relief!", " The patient is feeling a little energy returning.", 1),

("Acute Soreness! Aches! Pains!", " The patient is starting to feel muscle aches, soreness, joint pain... All bad signs.", 0),
("Pain Relief!", " The patient is feeling some relief in their muscles, joints, and nodes. They're resting easier and so should you.", 1),

("Acute Coughing!", " The patient can't stop coughing. Dry, productive, it makes no difference -- deal with it!", 0),
("Cough Suppressed!", " A little relief for the patient. Good thing you were wearing a mask for that... right?", 1),

("Anaphylaxis!", " Patient's airways are closing -- a reaction to the treatment or progression of the disease? Act fast!", 0),
("Airways Clear!", " The patient is breathing easy again -- crisis averted. This time.", 1);