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

// function hideHover() {
// 	let x = document.getElementsByTagName("ul li:hover");
// 		if (x.style.display === "none") {
// 		  x.style.display = "block";
// 		} else {
// 		  x.style.display = "none";
// 		}
// 	  }

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

// Pop up form
// $(document).ready(function() {
// 	$(".form-popup, overlay").hide.fadeIn(300);

// 	// Initialize the plugin
// 	//$("#myForm").popup();

// 	// Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
// 	// $.fn.popup.defaults.pagecontainer = '#page'
	
//   });
// $(document).ready(function() {
// 	$('#btn').click(function() {
// 	   $('#myForm').fadeIn(300);
// 	});
 
// 	$('#close').click(function() {
// 	   $('#myForm').fadeOut(300);
// 	});
//  });
  


  function on() {
	
		document.getElementsByClassName("overlay").style.display = "block";
  }
  
//   function off() {
	
//   }

// Displays the item setup form
function openItem() {
	document.getElementById("add-new-item").style.display = "block";
  }

// Sets the display of the item setup form to none

// function closeItem() {
// 	document.getElementsById("add-new-item").style.display = "none";
// }

// // Get the modal
// var modal = document.getElementById('add-new-item');

// // Get the main container and the body
// var body = document.getElementsByTagName('body');
// var container = document.getElementsByTagName('section');

// // Get the open button
// var btnOpen = document.getElementById("open-button");

// // Get the close button
// var btnClose = document.getElementsByClassName("cancel");

// // Open the popup
// btnOpen.onclick = function() {
//     modal.className = "Modal is-visuallyHidden";
//     setTimeout(function() {
//       container.className = "MainContainer is-blurred";
//       modal.className = "Modal";
//     }, 100);
//     container.parentElement.className = "ModalOpen";
// }

// // Close the popup
// btnClose.onclick = function() {
//     modal.className = "Modal is-hidden is-visuallyHidden";
//     body.className = "";
//     container.tagName = "section";
//     container.parentElement.tagName = "";
// }

// When the user clicks anywhere outside of the popup, close it
// let blur = document.getElementById('blur');

// if ( blur.classList.toggle == 'active' ) {
// 	window.onclick = closeForm();
// }


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

function changeImage(imgName)
  {
     image = document.getElementById('profile_img');
     image.src = imgName;
  }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Howto");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// Howto.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
            document.getElementById("myModal").classList.add("hide");
    }
}

// Checking info and makes sure inputs are filled in
function validate() {
  isValid = true;
  if (!document.getElementById("fullNameValidationError").classList.contains("hide")){
    document.getElementById("fullNameValidationError").classList.add("hide");
  }
  if (!document.getElementById("purposeValidationError").classList.contains("hide")){
   document.getElementById("purposeValidationError").classList.add("hide");
  }
  if (!document.getElementById("amountValidationError").classList.contains("hide")){
    document.getElementById("amountValidationError").classList.add("hide");
   }
   if (!document.getElementById("categoryValidationError").classList.contains("hide")){
    document.getElementById("categoryValidationError").classList.add("hide");
   }
   if (!document.getElementById("descriptionValidationError").classList.contains("hide")){
    document.getElementById("descriptionValidationError").classList.add("hide");
   }
  if (document.getElementById("name").value == "") {
      isValid = false;
      document.getElementById("fullNameValidationError").classList.remove("hide");
      
  } else if (document.getElementById("purpose").value == "Select purpose"){
    isValid = false;
    document.getElementById("purposeValidationError").classList.remove("hide");

  } else if(document.getElementById("amount").value == ""){
    isValid = false;
    document.getElementById("amountValidationError").classList.remove("hide");
  } else if(document.getElementById("category").value == "select category"){
    isValid = false;
    document.getElementById("categoryValidationError").classList.remove("hide");
  } else if(document.getElementById("description").value == ""){
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
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
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
}

