
function openForm() {
	document.getElementById("add-new-item").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("add-new-item").style.display = "none";
  }

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
$(document).ready(function() {

	// Initialize the plugin
	$('#add-new-item').popup();

	// Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
	// $.fn.popup.defaults.pagecontainer = '#page'
  });

<<<<<<< HEAD
  function on() {
	document.getElementById("open-button").style.display = "block";
  }
  
  function off() {
	document.getElementById("overlay").style.display = "none";
  }

=======
>>>>>>> de5e2564b7c5cd2e9b178dcf13c766f3a88afaea
