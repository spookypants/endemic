# Project-2-Starter
A repository for starting project 2
- [X] Copy this template

### Once you have copied this template do the following
- [X] Invite all collaborators
- [X] Create a slack channel and invite all the team members and the instructional staff
- [X] Protect the master branch
- [ ] Set up a pipeline with heroku with a staging environment and a production environment
- [ ] Setup the staging app to deploy the master branch automatically
- [ ] Modify this README to include 
  - [ ] each of your team members names and links to their github profiles
  - [ ] the title of your project
  - [ ] a link to your production deployed version
  
#### Requirements for the project
  
- [X] Must use a Node and Express Web Server

- [X] Must be backed by a MySQL Database with a Sequelize ORM  

- [X] Must have both GET and POST routes for retrieving and adding new data

- [ ] Must be deployed using Heroku (with Data)

- [X] Must utilize at least one new library, package, or technology that we haven’t discussed

- [ ] Must have a polished frontend / UI 

- [ ] Must have folder structure that meets MVC Paradigm

- [ ] Must meet good quality coding standards (indentation, scoping, naming)

- [ ] Must not expose sensitive API key information on the server


Project #2-- Game: Endemic

Group Members:
Gabe Alvarez
Juan Baquera
Sylvia Jonon
Avinash Singh
Brittany Taylor

OUR APP
App name : Endemic

General Idea
An online game that prompts the user to deliver treatments to a patient. The patient’s Life Force number will either improve or deteriorate. If their score improves up to 100, then they’re cured and the player’s score improves. However, if their score dwindles down to zero, then they have died and the player’s score goes down.

Target Audience
People who like to unwind by playing games on their phones, tablets, or computers.

Primary Problem
When people are commuting or have other pockets of “down-time” they want to do something that is interesting but not too engaging, since they expect to be interrupted. Games are perfect for these times. Many people also enjoy playing games to unwind and relax at the end of the day.

Primary Goal
To provide entertainment. This is a game that is fun to play. It can be learned quickly, it delivers instant gratification, as the player’s score is continuously impacted. The life-or-death context of the game adds an element of excitement as well.

Identify and Prioritize User Stories
AS A  _____, I WANT _____, SO THAT I CAN _____;
AS A player, I WANT to be able to play a game that is quick and easy to learn, SO THAT I CAN relax and unwind at the end of the day, or do something when I have a gap of time;

How it Works
1. Create an account
2. Select Character Avatar
3. Play the game!
    a.) The patient has a list of symptoms and treatment options.
    b.) The Player selects from the list of treatment options.
    c.) The game logs the results of that treatment and the corresponding point value. The log also provides information about the patient’s current condition. The Player has new treatment options.
    d.) Game play continues until the patient’s ‘life force’ equals 0 or 100.
    e.) At this point a module pops-up giving the player the choice to select a new avatar and play a new game or exit the game.