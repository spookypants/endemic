var db = require("../models");

db.sequelize.sync().then(function () {
  db.avatars.bulkCreate([
    {
      avatarName: "Jack",
      gender: "male",
      specialistType: "doctor"
    },
    {
      avatarName: "Thunderbolt",
      gender: "male",
      specialistType: "shaman"
    },
    {
      avatarName: "Hermann",
      gender: "male",
      specialistType: "biochemist"
    },
    {
      avatarName: "Susan",
      gender: "female",
      specialistType: "doctor"
    },
    {
      avatarName: "Eagle Talon",
      gender: "female",
      specialistType: "shaman"
    },
    {
      avatarName: "Ashanti",
      gender: "female",
      specialistType: "biochemist"
    }
  ]);

  db.disease.bulkCreate([
    {
      diseaseName:"Hepatitis B",
      symptom1:"Jaundice",
      symptom2:"Dark urine",
      symptom3:"Clay-colored bowel movements",
      agressiveness:5
    },
    {
      diseaseName:"Malaria",
      symptom1:"Fever",
      symptom2:"Chills",
      symptom3:"Sweats",
      agressiveness:5
    },
    {
      diseaseName:"Dengue Fever",
      symptom1:"Jaundice",
      symptom2:"Nausea",
      symptom3:"Bleeding From the Nose",
      agressiveness:4
    },
    {
      diseaseName:"Bubonic Plague",
      symptom1:"Sudden Fever",
      symptom2:"Headache",
      symptom3:"Tender Lymph Nodes",
      agressiveness:7
    },
    {
      diseaseName:"Rickettsiosis",
      symptom1:"Lack of Appetite",
      symptom2:"Stomach Pain",
      symptom3:"Muscle Pain",
      agressiveness:6
    },
    {
      diseaseName:"Pertusis",
      symptom1:"Persistent Cough",
      symptom2:"Runny Nose",
      symptom3:"Sneezing",
      agressiveness:3
    },
    {
      diseaseName:"Measles",
      symptom1:"Conjunctivitis",
      symptom2:"Koplik Spots",
      symptom3:"Rash",
      agressiveness:4
    },
    {
      diseaseName:"Lyme Disease",
      symptom1:"Rash",
      symptom2:"Neck Stiffness",
      symptom3:"Heart Palpitations",
      agressiveness:8
    },
    {
      diseaseName:"Zika",
      symptom1:"Conjunctivitis",
      symptom2:"Joint Pain",
      symptom3:"Headache",
      agressiveness:8
    },
    {
      diseaseName:"Varicella",
      symptom1:"Itchy Rash",
      symptom2:"Headache",
      symptom3:"Fatigue",
      agressiveness:2
    }
  ]);

  db.treatment.bulkCreate([
    {
      treatmentName: "20cc Alimdafinil",
      treatmentCategory: "Conventional",
      doctorEffect: 20,
      shamanEffect: 10,
      biochemistEffect: 5 
    },
    {
      treatmentName: "Leeches",
      treatmentCategory: "Shamanistic",
      doctorEffect: 5,
      shamanEffect: 20,
      biochemistEffect: 10, 
    },
    {
      treatmentName: "250 mg Galanruvax",
      treatmentCategory: "Experimental",
      doctorEffect: 15,
      shamanEffect: 5,
      biochemistEffect: 20
    },
    {
      treatmentName: "100 mg Robamumab",
      treatmentCategory: "Conventional",
      doctorEffect: 20,
      shamanEffect: 10,
      biochemistEffect: 5
    },
    {
      treatmentName: "Gondwanian Throat Singing",
      treatmentCategory: "Shamanistic",
      doctorEffect: 5,
      shamanEffect: 20,
      biochemistEffect: 10
    },
    {
      treatmentName: "400cc Fluaxane",
      treatmentCategory: "Experimental",
      doctorEffect: 15,
      shamanEffect: 5,
      biochemistEffect: 20
    },
    {
      treatmentName: "500 mg Dexlannate Vitronuma",
      treatmentCategory: "Conventional",
      doctorEffect: 20,
      shamanEffect: 10,
      biochemistEffect: 5
    },
    {
      treatmentName: "Deslopirin Tea",
      treatmentCategory: "Shamanistic",
      doctorEffect: 5,
      shamanEffect: 20,
      biochemistEffect: 10
    },
    {
      treatmentName: "10cc Colezolam Albendadocin",
      treatmentCategory: "Experimental",
      doctorEffect: 15,
      shamanEffect: 5,
      biochemistEffect: 20
    }
  ]);

  db.effect.bulkCreate([
    {
      effectName: "Blood Pressure Stabilizing.",
      effectDescription: "The patient looks to be feeling at least a little better.",
      positiveEffect: true,
    },
    {
      effectName: "Blood Pressure Holding.",
      effectDescription: "The patient is stable -- not good, but not bad -- which is probably good.",
      positiveEffect: true,
    },
    {
      effectName: "Blood Pressure Dropping.",
      effectDescription: "The patient's blood pressure is at dangerously low levels.",
      positiveEffect: false,
    },
    {
      effectName: "Blood Pressure Rising.",
      effectDescription: "The patient's blood pressure is reaching dangerously high levels.",
      positiveEffect: false,
    },
    {
      effectName: "Temperature Stabilizing.",
      effectDescription: "Treatment has brough the patient's temperature back into normal range.",
      positiveEffect: true,
    },
    {
      effectName: "Temperature Holding.",
      effectDescription: "No change in the patient's temperature. At least it's not getting worse.",
      positiveEffect: true,
    },
    {
      effectName: "Temperature Rising.",
      effectDescription: "The patient's temperature is rising higher.",
      positiveEffect: false,
    },
    {
      effectName: "Temperature Dropping.",
      effectDescription: "The patient's temperature is plummeting! Whatever you did made it a lot worse",
      positiveEffect: false,
    },
    {
      effectName: "Acute Rash Emerges.",
      effectDescription: "The patient has developed an acute rash -- this doesn't look good.",
      positiveEffect: false,
    },
    {
      effectName: "Rash Clearing Up.",
      effectDescription: "Looks like that rash is clearing up -- nice work.",
      positiveEffect: true,
    },
    {
      effectName: "Acute Emesis.",
      effectDescription: "The patient just sat up and vomited everywhere! Gross!",
      positiveEffect: false,
    },
    {
      effectName: "Nausea",
      effectDescription: "The patient is suddenly feeling very nauseous... better stand back.",
      positiveEffect: false,
    },
    {
      effectName: "Nausea Fading.",
      effectDescription: "The patient is feeling much less sick. Good news for your shoes.",
      positiveEffect: true,
    },
    {
      effectName: "Emetic Phase Passing.",
      effectDescription: "Whatever the patient needed to get out of their system... it all came out. Forcefully. Some things fix themselves.",
      positiveEffect: true,
    },
    {
      effectName: "Tachycardia.",
      effectDescription: "The patient's heart rate is spiking! This could be a problem.",
      positiveEffect: false,
    },
    {
      effectName: "Bradycardia",
      effectDescription: "The patient's heart rate is dropping! This looks bad!",
      positiveEffect: false,
    },
    {
      effectName: "Pulse Holding.",
      effectDescription: "The patient's heart rate is holding steady! We've still got time!",
      positiveEffect: true,
    },
    {
      effectName: "Pulse Stabilizing.",
      effectDescription: "The patient's heart rate is returning to normal levels. Nice work.",
      positiveEffect: true,
    },
    {
      effectName: "Hives.",
      effectDescription: "The patient has broken out in hives and can't stop scratching!",
      positiveEffect: false,
    },
    {
      effectName: "Hives Clearing Up.",
      effectDescription: "The patient looks relieved. You should be, too. Scratch hives off the problem list.",
      positiveEffect: true,
    },
    {
      effectName: "Jaundice.",
      effectDescription: "Is it just the light, or is the patient looking a little yellow?",
      positiveEffect: false,
    },
    {
      effectName: "Jaundice Clearing Up",
      effectDescription: "Color returns to the patient's cheeks. Hopefully they're okay. Hopefully their liver is okay too.",
      positiveEffect: true,
    },
    {
      effectName: "Acute Systemic Pain.",
      effectDescription: "The patient can't stop screaming! It hurts everywhere -- do something!",
      positiveEffect: false,
    },
    {
      effectName: "Pain Relieved.",
      effectDescription: "Whatever you did, the pain is passing. The patient is feeling a little better.",
      positiveEffect: true,
    },
    {
      effectName: "Shock.",
      effectDescription: "Grab a crash cart -- the patient is going into shock",
      positiveEffect: false,
    },
    {
      effectName: "Patient Recovering",
      effectDescription: "You may still feel the effects, but at least the patient isn't crashing anymore.",
      positiveEffect: true,
    },
    {
      effectName: "Anaphylaxis",
      effectDescription: "Patient's airways are closing -- a reaction to the treatment or progression of the disease",
      positiveEffect: false,
    },
    {
      effectName: "Airways Clear",
      effectDescription: "The patient is breathing easy again -- crisis averted.",
      positiveEffect: true,
    }
  ]);
});