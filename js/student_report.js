var message = '';
var student;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function printAll(students) {
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    compileMessage(student);
  }
  print(message);
}

function printOne(student) {
  compileMessage(student);
  print(message);
}

function compileMessage(input) {
  message += "<ul>";
  for ( var key in student ) {
    message += "<li>" + key.capitalize() + ": " + student[key] + "</li>";
  }
  message += "</ul>";
}

function search(students) {
  response = prompt("Please enter your student query: ");
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name.toLowerCase() === response.toLowerCase() ) {
      printOne(student); 
      break;
    }
  }
}

printAll(students);















