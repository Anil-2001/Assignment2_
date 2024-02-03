// collegeData.js
const fs = require('fs');

// Class to manage data
class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

// Variable to hold data instance
let dataCollection = null;

// Function to initialize data
function initialize() {
  return new Promise((resolve, reject) => {
    // Read students data
    fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
      if (err) {
        reject("Unable to read students.json");
        return;
      }

      // Read courses data
      fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
        if (err) {
          reject("Unable to read courses.json");
          return;
        }

        // Create data instance once both files are read successfully
        dataCollection = new Data(JSON.parse(studentDataFromFile), JSON.parse(courseDataFromFile));
        resolve();
      });
    });
  });
}

// Function to get all students
function getAllStudents() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students.length > 0) {
      resolve(dataCollection.students);
    } else {
      reject("No students found");
    }
  });
}

// Function to get TAs
function getTAs() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.students.length > 0) {
      // Filter students who are TAs
      const tas = dataCollection.students.filter(student => student.TA);
      if (tas.length > 0) {
        resolve(tas);
      } else {
        reject("No TAs found");
      }
    } else {
      reject("No students found");
    }
  });
}

// Function to get all courses
function getCourses() {
  return new Promise((resolve, reject) => {
    if (dataCollection && dataCollection.courses.length > 0) {
      resolve(dataCollection.courses);
    } else {
      reject("No courses found");
    }
  });
}

module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses
};
