const employeeBtn = document.getElementById('employee_btn');
const studentBtn = document.getElementById('student_btn');
const employeeInput = document.getElementById('employee_input');
const studentInput = document.getElementById('student_input');

const searchBtn = document.getElementById('search_button');

const userResults = document.getElementById('user_results');

const mainContainer = document.getElementById('main_container');


employee_btn.onclick = function(){
  employeeInput.style.display = 'flex';
  studentInput.style.display = 'none';
  studentBtn.style.backgroundColor = 'transparent';
  studentBtn.style.color = 'white';
  employeeBtn.style.backgroundColor = 'white';
  employeeBtn.style.color = 'black';
  employeeBtn.style.border = '1px solid white'
}

studentBtn.onclick = function(){
  employeeInput.style.display = 'none';
  studentInput.style.display = 'flex'
  employeeBtn.style.backgroundColor = 'transparent';
  employeeBtn.style.color = 'white';
  studentBtn.style.backgroundColor = 'white';
  studentBtn.style.color = 'black';
}

searchBtn.onclick = function(){
  employeeBtn.style.display = 'none';
  employeeInput.style.display = 'none';
  studentBtn.style.display = 'none';
  studentInput.style.display = 'none';
  searchBtn.style.display = 'none';
  mainContainer.style.display = 'none';
  userResults.style.display = 'flex';
}

