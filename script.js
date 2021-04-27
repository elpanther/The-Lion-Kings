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
	document.getElementsById("add-new-item").style.display = "none";
}


function closeItem() {
	document.getElementsById("add-new-item").style.display = "none";
}



function closeItem() {
	document.getElementsById("add-new-item").style.display = "none";
}

// $('#blur').click(function() {
// 	$('#blur, #myForm').css('display','none');
// });

// function closePopup() {
// 	document.getElementsById("myForm").style.display = 'none';
// }

var app = new function() {
	this.el = document.getElementById('expenses')
	this.expenses = ['Initial Deposit']
	this.Count = function(data) {
		var el = document.getElementById('counter')
		var name = 'expense'

		if (data) {
			if (data > 1) {
				name = 'expenses'
			}
			el.innerHTML = data + ' ' + name
		} else {
			el.innerHTML = 'No ' + name
		}
	}

	this.FetchAll = function() {
		var data = ''

		if (this.expenses.length > 0) {
			for (i = 0; i < this.expenses.length; i++) {
				data += '<tr>'
				data += '<td>' + this.expenses[i] + '</td>'
				data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>'
				data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>'
				data += '</tr>'
			}
		}

		this.Count(this.expenses.length)
		return this.el.innerHTML = data
	}

	this.Add = function() {
		el = document.getElementById('add-name')
		// Get the value
		var expense = el.getPropertyValue

		if (expense) {
			// Add the new value
			this.expenses.push(expense.trim())
			// Reset input value
			this.el.value = ''
			// Display the new list
			this.FetchAll()
		}
	}

	this.Edit = function(item) {
		var el = document.getElementById('edit-name')
		// Display value in the field
		el.value = this.countries[item]
		// Display fields
		document.getElementById('spoiler').style.display = 'block'
		self = this
		document.getElementById('saveEdit').onsubmit = function() {
			// Get value
			var expense = el.value
			if (expense) {
				// Edit value
				self.expenses.splice(item, 1, expense.trim())
				// Display the new list
				self.FetchAll()
				// Hide fields
				CloseInput()
			}
		}
	}

	this.Delete = function(item) {
		// Delete the current row
		this.expenses.splice(item, 1)
		// Display the new list
		this.FetchAll()
	}
}

app.FetchAll()

function CloseInput() {
	document.getElementById('spoiler').style.display = 'none'
}