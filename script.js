// Hide buttons on click
function hideButtons() {
  let x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// blur
function blurToggle() {
  let blur = document.getElementById('blur');
  blur.classList.toggle('active');
}

// Opens the form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function hideNav() {
  document.getElementsByTagName("ul").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  let blur = document.getElementById('blur');
  blur.classList.toggle('active');
  let x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//add new item

// Auto-extending textarea

// NOTE: The textarea only expands as far as the page is able to go, so the scroll bar will appear after a couple hundred characters.

document.addEventListener('input', function (event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);

var autoExpand = function (field) {

  // Reset field heightg
  field.style.height = 'inherit';

  // Get the computed styles for the element
  var computed = window.getComputedStyle(field);

  // Calculate the height
  var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10)
    + field.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  field.style.height = height + 'px';

};


function on() {

  document.getElementsByClassName("overlay").style.display = "block";
}

// Displays the item setup form
function openItem() {
  document.getElementById("add-new-item").style.display = "block";
}

// Sets the display of the item setup form to none

function closeItem() {
  document.getElementById("add-new-item").style.display = "none";
}

//   allows user to add a image
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#profile_img')
        .attr('src', e.target.result)
        .width(165)
        .height(165);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function changeImage(imgName) {
  image = document.getElementById('profile_img');
  image.src = imgName;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Howto");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Sets row to null for insertion
var selectedRow = null

// function onFormSubmit() {
//   if (validate()) {
//     var formData = readFormData();
//     if (selectedRow == null)
//       insertNewRecord(formData);
//     else
//       updateRecord(formData);
//     document.getElementById("myModal").classList.add("hide");
//   }
// }

// Checking info and making sure inputs are filled in
function validate() {
  isValid = true;
  if (!document.getElementById("fullNameValidationError").classList.contains("hide")) {
    document.getElementById("fullNameValidationError").classList.add("hide");
  }
  if (!document.getElementById("purposeValidationError").classList.contains("hide")) {
    document.getElementById("purposeValidationError").classList.add("hide");
  }
  if (!document.getElementById("amountValidationError").classList.contains("hide")) {
    document.getElementById("amountValidationError").classList.add("hide");
  }
  if (!document.getElementById("categoryValidationError").classList.contains("hide")) {
    document.getElementById("categoryValidationError").classList.add("hide");
  }
  if (!document.getElementById("descriptionValidationError").classList.contains("hide")) {
    document.getElementById("descriptionValidationError").classList.add("hide");
  }
  if (document.getElementById("name").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");

  } else if (document.getElementById("purpose").value == "Select purpose") {
    isValid = false;
    document.getElementById("purposeValidationError").classList.remove("hide");

  } else if (document.getElementById("amount").value == "") {
    isValid = false;
    document.getElementById("amountValidationError").classList.remove("hide");
  } else if (document.getElementById("category").value == "select category") {
    isValid = false;
    document.getElementById("categoryValidationError").classList.remove("hide");
  } else if (document.getElementById("description").value == "") {
    isValid = false;
    document.getElementById("descriptionValidationError").classList.remove("hide");
  }
  // console.log(isValid);
  return isValid;
}

function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["purpose"] = document.getElementById("purpose").value;
  formData["amount"] = document.getElementById("amount").value;
  formData["category"] = document.getElementById("category").value;
  formData["description"] = document.getElementById("description").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("expensesList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.purpose;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.amount;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.category;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.description;
  cell6 = newRow.insertCell(5)
  cell6.innerHTML = `<a onClick="onEdit(this)"><img src="https://image.flaticon.com/icons/png/512/61/61456.png" alt="Edit" width="25px"></a>
                       <a onClick="onDelete(this)"><img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/trashcan-512.png" alt="Delete" width="25px"></a>`;
  cell6.innerHTML = `<a onClick="onEdit(this);openItem();blurToggle()">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("purpose").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
  document.getElementById("description").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("purpose").value = selectedRow.cells[1].innerHTML;
  document.getElementById("amount").value = selectedRow.cells[2].innerHTML;
  document.getElementById("category").value = selectedRow.cells[3].innerHTML;
  document.getElementById("description").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.purpose;
  selectedRow.cells[2].innerHTML = formData.amount;
  selectedRow.cells[3].innerHTML = formData.category;
  selectedRow.cells[4].innerHTML = formData.description;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("expensesList").deleteRow(row.rowIndex);
    resetForm();
  }
}
// Let's understand the above JavaScript code.

// Handling HTML form submission with the following function:

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
      insertNewRecord(formData);
    else
      updateRecord(formData);
    resetForm();
  }
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
      insertNewRecord(formData);
    else
      updateRecord(formData);
    resetForm();
  }
}

// Does not save table inputs after reloading page or leaving page

function save() {
  var table = document.getElementById("expensesList");
  var trs = table.getElementsByTagName('tr');  // list of all rows

  var values = [];  // will be a (potentially jagged) 2D array of all values
  for (var i = 0; i < trs.length; i++) {
    // loop through all rows, each will be one entrie in values
    var trValues = [];
    var tds = trs[i].getElementsByTagName('td');  // list of all cells in this row

    for (var j = 0; j < tds.length; j++) {
      trValues[j] = tds[j].innerText;
      // get the value of the cell (preserve newlines, if you don't want that use .textContent)
    }

    values[i] = trValues;
  }
  // save values
  console.log(values);
}

window.onbeforeunload = function () {
  save().event.preventDefault()
};

// check if stored data from register-form is equal to data from login form
if (userName.value !== storedName || userPw.value !== storedPw) {
  alert('ERROR');
} else {
  alert('You are loged in.');
}



//     // check if stored data from register-form is equal to data from login form
//     if(userName.value !== storedName || userPw.value !== storedPw) {
//         alert('ERROR');
//     }else {
//         alert('You are loged in.');
//     }
// }

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }


anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "White", value: 223553265},
      {x: "Black or African American", value: 38929319},
      {x: "American Indian and Alaska Native", value: 2932248},
      {x: "Asian", value: 14674252},
      {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
      {x: "Some Other Race", value: 19107368},
      {x: "Two or More Races", value: 9009073}
  ];
  
  // create the chart
  var chart = anychart.pie();
  
  // set the chart title
  chart.title("Population by Race for the United States: 2010 Census");
  
  // add the data
  chart.data(data);
  
  // display the chart in the container
  chart.container('chart');
  chart.draw();
  
  });

document.getElementById("name").value = getSavedValue("name");    // set the value to this input
document.getElementById("purpose").value = getSavedValue("purpose");   // set the value to this input
document.getElementById("amount").value = getSavedValue("amount");   // set the value to this input
document.getElementById("category").value = getSavedValue("category");   // set the value to this input
document.getElementById("description").value = getSavedValue("description");   // set the value to this input
/* Here you can add more inputs to set value. if it's saved */

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e) {
  var id = e.id;  // get the sender's id to save it . 
  var val = e.value; // get the value. 
  localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return "";// You can change this to your defualt value. 
  }
  return localStorage.getItem(v);
}
window.beforeonload() = function () {
  getSavedValue(this);
};

// problems with the pop up form on the items page. maybe names of the classes/ids?


const fs = require('fs');

const users = new FormData(event.target);

function handleSubmit(event) {
  event.preventDefault();


  const value = Object.fromEntries(users.entries());

  console.log({ value });
  }

  const form = document.querySelector('container');
  form.addEventListener('submit', handleSubmit);

fs.writeFile('users.json', JSON.stringify(users), (err) => {  
    // Catch this!
    if (err) throw err;

    console.log('Users saved!');
});

fs.readFile('users.json', (err, data) => {
  // Catch this!
  if (err) throw err;

  const loadedUsers = JSON.parse(data);
  console.log(loadedUsers);
});

// hello-sqlite
var fs = require('fs');
var dbFile = './.data/sqlite.db'; // Our database file
var exists = fs.existsSync(dbFile); // Sync is okay since we're booting up
var sqlite3 = require('sqlite3').verbose(); // For long stack traces
var db = new sqlite3.Database(dbFile);

db.run('CREATE TABLE Dreams (dream TEXT)');
db.run('INSERT INTO Dreams (dream) VALUES (?)', ['Well tested code'], function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Dream saved!');
    }
});