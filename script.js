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
// 	document.getElementById('exit').onclick = function() {
// 	  overlay.fadeOut(300);
// 	  dialog.fadeOut(250);
// 	};
//   })();
}



//   function mask() {
// 	document.getElementsById("mask").style.background = "block"

// 	//document.getElementById("add-new-item").style.display = "block";
// 	// $('.overlay').fadeIn(300);
// //   }

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
	//$('#myForm').fadeIn(300);
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
	document.getElementsByClassName('expenses-form').style.display = "none";
}


// $('#blur').click(function() {
// 	$('#blur, #myForm').css('display','none');
// });

// function closePopup() {
// 	document.getElementsById("myForm").style.display = 'none';
// }

var selectedRow = null

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

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["purpose"] = document.getElementById("purpose").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["catagory"] = document.getElementById("catagory").value;
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
    cell4.innerHTML = data.catagory;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("purpose").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("catagory").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("purpose").value = selectedRow.cells[1].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[2].innerHTML;
    document.getElementById("catagory").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
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