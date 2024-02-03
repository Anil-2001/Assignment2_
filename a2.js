/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Anil Pokhrel   Student ID: 118889237   Date: 2024-02-03
*
********************************************************************************/ 

// a2.js
const collegeData = require('./modules/collegeData');

// Initialize data and test functions
collegeData.initialize()
  .then(() => {
    // Test other functions
    return collegeData.getAllStudents();
  })
  .then(students => {
    console.log(`Successfully retrieved ${students.length} students`);
    return collegeData.getCourses();
  })
  .then(courses => {
    console.log(`Successfully retrieved ${courses.length} courses`);
    return collegeData.getTAs();
  })
  .then(tas => {
    console.log(`Successfully retrieved ${tas.length} TAs`);
  })
  .catch(error => {
    console.error(error);
  });
