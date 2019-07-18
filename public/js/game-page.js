var patientAvatarURL = [
    "https://assets4.lottiefiles.com/packages/lf20_6LvRSb.json", // patient health 75-100
    "https://assets6.lottiefiles.com/packages/lf20_axMZra.json", // patient health 50-75
    "https://assets3.lottiefiles.com/packages/lf20_4rH0mn.json", // patient health 25-50
    "https://assets5.lottiefiles.com/packages/lf20_WIegQA.json"  // patient health 0-25
];

// If patient health is 75-100 pts
// target #patientAvatar, set lottie-player URL = patientAvatarURL[0]

// If patient health is 50-75 pts
// target #patientAvatar, set lottie-player URL = patientAvatarURL[1]

// If patient health is 25-50 pts
// target #patientAvatar, set lottie-player URL = patientAvatarURL[2]

// If patient health is 0-25 pts
// target #patientAvatar, set lottie-player URL = patientAvatarURL[3]


var playerAvatarURL = [
    "https://assets5.lottiefiles.com/packages/lf20_gGmZKN.json", // doctor male
    "https://assets1.lottiefiles.com/packages/lf20_FQaALa.json", // doctor female
    "https://assets5.lottiefiles.com/packages/lf20_3ikJct.json", // biochemist male
    "https://assets1.lottiefiles.com/packages/lf20_9wt70U.json", // biochemist female
    "https://assets4.lottiefiles.com/packages/lf20_qs1nyM.json", // shaman male
    "https://assets1.lottiefiles.com/packages/lf20_VofP3Z.json", // shaman female
];
// Need to create a similar function to handle populating player avatar


// If treatment leads to positive effect on patient, replace player avatar
// with corresponding SUCCESS animation for one loop, then return to baseline avatar
// If treatment leads to negative effect on patient, repeat process with FAILURE animation

var playerAvatarEmoteURL = [
    "https://assets7.lottiefiles.com/packages/lf20_wbGNqQ.json", // doctor male success
    "https://assets2.lottiefiles.com/packages/lf20_MvScI3.json", // doctor male failure
    "https://assets3.lottiefiles.com/packages/lf20_uMS02q.json", // doctor female success
    "https://assets3.lottiefiles.com/packages/lf20_0oPGzC.json", // doctor female failure
    "https://assets10.lottiefiles.com/packages/lf20_6FStCq.json", // biochem male success
    "https://assets7.lottiefiles.com/packages/lf20_fB390C.json", // biochem male failure
    "https://assets6.lottiefiles.com/packages/lf20_DvaQUy.json", // biochem fem success
    "https://assets9.lottiefiles.com/packages/lf20_4tj4bj.json", // biochem fem failure
    "https://assets6.lottiefiles.com/packages/lf20_eBsMlx.json", // shaman male success
    "https://assets1.lottiefiles.com/packages/lf20_vdAfYA.json", // shaman male failure
    "https://assets7.lottiefiles.com/packages/lf20_mzjWVv.json", // shaman fem success
    "https://assets6.lottiefiles.com/packages/lf20_qeLI4z.json", // shaman fem failure
];