
function openForm() {
	document.getElementById("myForm").style.display = "block";
	//document.getElementById("add-new-item").style.display = "block";
	//document.getElementsByClassName("overlay").style.display = "block";
	

  }

  function mask() {
	document.getElementsById("mask").style.background = "block"

	//document.getElementById("add-new-item").style.display = "block";
	// $('.overlay').fadeIn(300);
  }



  function closeForm() {
	document.getElementById("myForm").style.display = "none";
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

