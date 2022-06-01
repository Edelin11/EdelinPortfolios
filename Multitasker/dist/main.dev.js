"use strict";

// button for the background color changes
var botonesFOR = document.getElementById('background__boton2'); // buttons for bacground

var textColor = document.getElementById('area_texto');
botonesFOR.addEventListener('click', function () {
  return clicksForward();
});
botonesFOR = 1;
var colorBG = document.getElementById('colores_names');
colorBG.innerText = "Pink and Blue"; // colors for background

var buttonColor = document.getElementById('background__boton2');

var clicksForward = function clicksForward() {
  if (botonesFOR == 1) {
    document.body.style.background = 'linear-gradient(to right, LIMEGREEN, #1B5E20)'; // FOREST

    buttonColor.style.background = 'linear-gradient(to right, LIMEGREEN, #1B5E20)';
    textColor.style.color = 'black';
    botonesFOR = 2;
    colorBG.innerText = "Forest";
  } else if (botonesFOR == 2) {
    document.body.style.background = 'linear-gradient(to right, GOLD, MEDIUMSLATEBLUE)'; // SUNSET

    buttonColor.style.background = 'linear-gradient(to right, GOLD, MEDIUMSLATEBLUE)';
    textColor.style.color = 'black';
    botonesFOR = 3;
    colorBG.innerText = "Sunset";
  } else if (botonesFOR == 3) {
    document.body.style.background = 'linear-gradient(to right, CRIMSON, #212121)'; // VAMPIRE

    buttonColor.style.background = 'linear-gradient(to right, CRIMSON, #212121)';
    textColor.style.color = 'white';
    botonesFOR = 4;
    colorBG.innerText = "Vampire";
  } else if (botonesFOR == 4) {
    document.body.style.background = 'linear-gradient(to right, HOTPINK , THISTLE)'; // CANDY

    buttonColor.style.background = 'linear-gradient(to right, HOTPINK , THISTLE)';
    textColor.style.color = 'black';
    botonesFOR = 5;
    colorBG.innerText = "Candy";
  } else if (botonesFOR == 5) {
    document.body.style.background = 'linear-gradient(to right, ROYALBLUE, AQUA)'; // OCEAN

    buttonColor.style.background = 'linear-gradient(to right, ROYALBLUE, AQUA)';
    textColor.style.color = 'black';
    botonesFOR = 6;
    colorBG.innerText = "Ocean";
  } else if (botonesFOR == 6) {
    document.body.style.background = 'linear-gradient(to right, AQUAMARINE, TOMATO)'; // SUNRISE

    buttonColor.style.background = 'linear-gradient(to right, AQUAMARINE, TOMATO)';
    textColor.style.color = 'black';
    botonesFOR = 7;
    colorBG.innerText = "Sunrise";
  } else if (botonesFOR == 7) {
    document.body.style.background = 'linear-gradient(to right, #000000, #FFFFFF)'; // NOIR & BLANC

    buttonColor.style.background = 'linear-gradient(to right, #FFFFFF, #000000)';
    textColor.style.color = 'black';
    botonesFOR = 8;
    colorBG.innerText = "Noir & Blanc";
  } else if (botonesFOR == 8) {
    document.body.style.background = 'linear-gradient(to right, #FF51B0, TOMATO)'; // PINK AND TOMATO

    buttonColor.style.background = 'linear-gradient(to right, #FF51B0, TOMATO)';
    textColor.style.color = 'black';
    botonesFOR = 9;
    colorBG.innerText = "red";
  } else if (botonesFOR == 9) {
    document.body.style.background = 'rgba(201, 201, 201, 0.986)'; // Neutral

    buttonColor.style.background = 'rgba(201, 201, 201, 0.986)';
    textColor.style.color = 'black';
    botonesFOR = 10;
    colorBG.innerText = "Neutral";
  } else if (botonesFOR == 10) {
    document.body.style.background = 'linear-gradient(to right, #FF51B0, #27d3fe)'; // PINK AND BLUE

    buttonColor.style.background = 'linear-gradient(to right, #FF51B0, #27d3fe)';
    textColor.style.color = 'black';
    botonesFOR = 1;
    colorBG.innerText = "Pink and Blue";
  }
}; // for the date i need the day, month number and year


var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var fecha = new Date(); // fecha = date

var dia = fecha.getDate(); // dia = day

var mes = fecha.getMonth(); // mes = month

var currentYear = fecha.getFullYear();
var semana = fecha.getDay(); // semana = week
//console.log(dia + '___' + mes + '___'+ currentYear);
// now we are going to get the time

var hour_time = document.getElementById('hour');
window.onload = displayClock(); // this will take time from your pc and it'll be a live time.

function displayClock() {
  var display = new Date().toLocaleTimeString();
  hour_time.innerHTML = display;
  setTimeout(displayClock, 1000);
} // now we are going to start working with the calendar, the full calendar. 
// we are getting the elements fron the html


var dates = document.getElementById('dates');
var month = document.getElementById('month');
var year = document.getElementById('year');
var prevMonthDOM = document.getElementById('prev-month');
var nextMonthDOM = document.getElementById('next-month');
month.textContent = monthNames[mes]; // month will read content of month names and will give it to its corresponding mes(month)

year.textContent = currentYear.toString(); // EventListener for the buttons of previous and next months

prevMonthDOM.addEventListener('click', function () {
  return lastMonth();
});
nextMonthDOM.addEventListener('click', function () {
  return nextMonth();
}); // all this for the calendar

var writeMonth = function writeMonth(month) {
  for (var i = currentDay(); i > 0; i--) {
    // current day to start at 1
    dates.innerHTML += " <div class=\"calendar-fecha calendar-item calendar-lastMonthDays\"> \n            ".concat(getTotalDays(mes - 1) - (i - 1), "</div>");
  }

  for (var _i = 1; _i <= getTotalDays(month); _i++) {
    if (_i === dia) {
      dates.innerHTML += " <div class=\"calendar-fecha calendar-item calendar-todaysDay\">".concat(_i, "</div");
    } else {
      dates.innerHTML += " <div class=\"calendar-fecha calendar-item\">".concat(_i, "</div>");
    }
  }
};

var getTotalDays = function getTotalDays(month) {
  // getter
  if (month === -1) month = 11;

  if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    return 31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return LeapYear() ? 29 : 28;
  }
};

var LeapYear = function LeapYear() {
  // calculate leap years
  return currentYear % 100 !== 0 && currentYear % 4 === 0 || currentYear % 400 === 0;
};

var currentDay = function currentDay() {
  var start = new Date(currentYear, mes, 1);
  return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
};

var lastMonth = function lastMonth() {
  if (mes !== 0) {
    mes--;
  } else {
    mes = 11; //month is equal to december and it will change year.

    currentYear--;
  }

  setNewDate();
};

var nextMonth = function nextMonth() {
  if (mes !== 11) {
    mes++;
  } else {
    mes = 0;
    currentYear++;
  }

  setNewDate();
};

var setNewDate = function setNewDate() {
  fecha.setFullYear(currentYear, mes, dia);
  month.textContent = monthNames[mes];
  year.textContent = currentYear.toString();
  dates.textContent = '';
  writeMonth(mes);
};

writeMonth(mes); // we are going to make that the user can add to do list, or anything they want to remember for that day.
// selectors

var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list'); // event listeners for adding and deleting from the list

todoButton.addEventListener('click', function () {
  return addingToTheList();
});
todoList.addEventListener('click', deleteANDcheck); // functions

var addingToTheList = function addingToTheList() {
  // have everything inside a to-do Div
  var todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); // create LI = list

  var newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo); // check button

  var completedButton = document.createElement('button'); // creating a button

  completedButton.innerHTML = '<i class = "fas fa-check"></i>'; // 'check' icon button

  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton); // delete button

  var trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>'; // 'trash' icon button

  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton); // append to LIST div

  todoList.appendChild(todoDiv); // clear the input text 

  todoInput.value = "";
};

function deleteANDcheck(y) {
  var item = y.target; // delete to do 

  if (item.classList[0] === 'trash-btn') {
    var todo = item.parentElement;
    todo.classList.add("fall"); // animation for deleting button

    todo.addEventListener('transitionend', function () {
      //wait until transition of fall finishes 
      todo.remove(); // and then it does the remove
    });
  } // to do completed


  if (item.classList[0] === 'complete-btn') {
    var _todo = item.parentElement;

    _todo.classList.toggle('completed');
  }
}