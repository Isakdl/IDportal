% Project Specification
% Marc Coquand, Viyan Ateaa and Isak Lundberg
% 20/02-17

# Introduction

This project is a part of the course database tech and web based systems. The
task is to develop a web based application. In this case this will be done in a
group of 3. The program has to in some way do the following:

* Implement CRUD-functionality
* Change the routing
* Implement a login
* Store information in the form of cookies and sessions
* The web page has to present data from the database
* Implement an input field following WCAG and WAI's recommendations
* The auto generated code needs to be in coherence with W3C recommendations


# Project description

At the Interaction and design programme there's a lot of freedom to pick and chose
what type of courses you want to study. Some of them are good and some of them
might seem interesting but turn out not to be so good. That's why there's a need
for a program where you can rate the courses relevant to the programme. 

The goal of this project is to create a web application where users can view,
create, edit, review course information. The idea is that the webpage should be
self maintaining to avoid having the need for a moderator. With that said there
needs to be an admin that should be able to remove posts.

When reviewing a webpage, user's should be able to write their thoughts about
the course in a short format. They should also be able to recommend or not
recommend the course in form of thumbs up or thumbs down. These reviews should
be visible to other users.

When creating course information, the user should be able to write a short
description about the course as link to the main site for course description.



# System description

The web application will be implemented using Meteor, a compilation of
applications such as MongoDB and React. MongoDB will be used for the databases
and React will be used for the front-end.

## ER-diagram

![ER-diagram](Systembeskrivning.pdf)

## Flow chart of the GUI

![Flow Chart](GUI-flow.pdf)

# Priorities

The priorities below are listed from most important to least important and only
encompasses the product and not the entire project (such as reports, time plan
etc.).

1. Create course information where you can update their description
2. Create Views for login and course information.
3. Ability to rate courses
4. Login for admins
5. Login for users
6. Create users
7. Ability for users to recommend and not recommend courses
8. Ability for users to add a review, this is analyzed in coherence to W3C
   recommendations.
9. Implemented using MongoDB and react.
10. Responsive
11. Give the feeling of being Hipster, clean, modern


# Division of labor

Everyone in the team are flexible in what they're working in. With that said
everyone has a key responsibility of making sure certain things happen. Marc is
the project leader and responsible for scheduling, turning in documents and
making sure the dynamic in the team is good. Viyan is responsible for the design
and has the final say in all design decisions. Isak is responsible for the back
end.


# Deadline


| Deadlines | Description                                                                                   |
|-----------|-----------------------------------------------------------------------------------------------|
| 20/2      | Project specification done. All development tools are set up.                                 |
| 21/2      | Team members get familiar with Meteor in form of a simple project.  Start working on project. |
| 27/2      | Work on project                                                                               |
| 28/2      | Work on project                                                                               |
| 5/3       | Work on project                                                                               |
| 6/3       | Work on project                                                                               |
| 12/3      | Work on project report                                                                        |
| 13/3      | Finish project report                                                                         |
