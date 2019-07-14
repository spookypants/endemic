INSERT INTO effects (effectName, effectDescription, positiveEffect)
VALUES
("Blood Pressure Stabilizing!", "Treatment has lead to the patient's blood pressure reaching normal levels. The patient looks to be feeling at least a little better.", 0),
("Blood Pressure Holding!", "No change in the patient's blood pressure. The patient is stable -- not good, but not bad -- which is probably good. For now.", 0),
("Blood Pressure Dropping!", "The patient's blood pressure is at dangerously low levels! The patient could lose consciousness -- this could be bad!", 1),
("Blood Pressure Rising!", "The patient's blood pressure is reaching dangerously high levels! The patient looks discomforted -- this could get worse!", 1),

("Temperature Stabilizing!", "Treatment has brough the patient's temperature back into normal range. The patient should rest easier now.", 0),
("Temperature Holding!", "No change in the patient's temperature. At least it's not worse. Yet.", 0),
("Temperature Rising!", "The patient's temperature is rising! Bring that fever down -- stat!", 1),
("Temperature Dropping!", "The patient's temperature is plummeting! Whatever you did -- do better!", 1),

("Acute Rash Emerges!", "The patient has developed an acute rash -- this doesn't look good.", 1),
("Rash Clearing Up!", "Looks like that rash is clearing up -- nice work.", 0),

("Acute Emesis!", "The patient just sat up and vomited everywhere! Gross!", 1),
("Nausea!", "The patient is suddenly feeling very nauseous... better stand back.", 1),
("Nausea Fading!", "The patient is feeling much less sick. Good news for your shoes.", 0),
("Emetic Phase Passing!", "Whatever the patient needed to get out of their system... it all came out. Forcefully. Some things fix themselves.", 0),

("Tachycardia!", "The patient's heart rate is spiking! This could be a problem.", 1),
("Bradycardia!", "The patient's heart rate is dropping! This looks bad!", 1),
("Pulse Holding!", "The patient's heart rate is holding steady! We've still got time!", 0),
("Pulse Stabilizing!", "The patient's heart rate is returning to normal levels. Nice work.", 0),

("Hives!", "The patient has broken out in hives and can't stop scratching! Is it a symptom or a reaction?", 1),
("Hives Clearing Up!", "The patient looks relieved. You should be, too. Scratch hives off the problem list.", 0),

("Jaundice!", "Is it just the light, or is the patient looking a little yellow?", 1),
("Jaundice Clearing Up!", "Color returns to the patient's cheeks. Hopefully they're okay. Hopefully their liver is okay, too.", 0),

("Acute Systemic Pain!", "The patient can't stop screaming! It hurts everywhere -- do something!", 1),
("Pain Relieved!", "Whatever you did, the pain is passing. The patient is feeling a little better. For now.", 0),

("Shock!", "Grab a crash cart -- the patient is going into shock!", 1),
("Patient Recovering!", "You may still feel the effects, but at least the patient isn't crashing anymore. Take your wins where they come.", 0),

("Vitals Deteriorating!", "There's no immediate answer to why -- all you need to know is it's a problem.", 1),
("Vitals Holding!", "We don't know why the patient status isn't changed, but at least it's not getting worse.", 0),
("Vitals Stabilizing!", "We won't have all the answers until lab results come back, but the patient is looking and feeling better for now. Nice work.", 0),

("")