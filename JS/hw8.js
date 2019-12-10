/*Alex Nguyen
alex_nguyen@student.uml.edu
UMass Lowell COMP4610 GUI Programming I
Purpose of this webpage: Practicing js by implementing a dynamic table
 and using jquery validation methods to get user to enter correct input
 also using jquery ui slider and tab api*/

//modified the example from w3schools to add multiple rows using a loop https://www.w3schools.com/jsref/met_table_insertrow.asp 
//some form/dom manipulation from traversy dom crash course 4

var form = document.getElementById('addForm');
var numRows = 0; // keeps track of the rows made in previous table. used to clear the table
// Form submit event give input to function additem
form.addEventListener('submit', formSubmitted);

//run this when function user presses submit, 
function formSubmitted(e) {
	e.preventDefault();
	$("#myTabs").css("visibility", "visible");
	addItem();
	addTab();
}

// process the form inputs, outputs the table.
function addItem(){
	var table = document.getElementById('mult');
	var arr = []; //holds table entries
	var item3Big = 0;
	var item1Big = 0;
	// Get input value as an int
	var newItem = parseInt(document.getElementById('item').value);
	var newItem2 = parseInt(document.getElementById('item2').value);
	var newItem3 = parseInt(document.getElementById('item3').value);
	var newItem4 = parseInt(document.getElementById('item4').value);
	
	//clear out previously made the table 
	for(var i = 0; i <= numRows + 1; i++)
		 document.getElementById("mult").deleteRow(-1);
	//catch invalid inputs and inform user
	if(isNaN(newItem) || isNaN(newItem2) || isNaN(newItem3) || isNaN(newItem4))
	{
		/* document.getElementById('invalid').innerHTML = 'One of your inputs is invalid. Table did not get created.'; */
		return;
	}
	else {
		document.getElementById('invalid').innerHTML = '';
	}
	if(newItem < newItem2){
		var numCols = newItem2 - newItem;
	}
	else {
		item1Big = 1;
	}
	if(newItem3 < newItem4) {
		numRows = newItem4 - newItem3;
	}
	else {
		item3Big = 1;
		numRows = newItem3 - newItem4;
	}
	var a = [];
	var table = document.getElementById("mult"); // var table and row set up to insert empty cell in first row
	var row = table.insertRow(-1); // var table and row set up to insert empty cell in first row
	row.id = 'first'; // allows for css selector to select table row elements after first
	a.push(row.insertCell(-1));
	a[a.length -1].innerHTML = ""; // empty cell 
	if(item1Big) { //print table case 1 the first x input is greater than the second x input
		for( i = newItem2; i <= newItem; i++)  // insert the entries for the first row
		{
			a.push(row.insertCell(-1));
			a[a.length -1].innerHTML = i;
		}
		if(item3Big) { //print table case where second y input is greater than first y input 
			for(var q = newItem4; q <= newItem3; q++) //printing rows from second Y input to first Y Input 
			{
				var table = document.getElementById("mult");
				var row = table.insertRow(-1);
				a.push(row.insertCell(-1));
				a[a.length -1].innerHTML = q; // insert the q value into a cell

				for(var i = newItem2; i <= newItem; i++) // adds in entries from second X Input to first X Input
				{
				  a.push(row.insertCell(-1));
				  a[a.length -1].innerHTML = q * i;
				}
			}
		}
		else { //print table case where second y input is greater than first y input 
			for(var q = newItem3; q <= newItem4; q++) //printing rows from first Y input second Y Input 
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  a[a.length -1].innerHTML = q; // insert the q value into a cell
			  
			  for(var i = newItem2; i <= newItem; i++) // adds in entries from second X Input to first X Input
			  {
				  a.push(row.insertCell(-1));
				  a[a.length -1 ].innerHTML = q * i;
			  }
		  }
		}
	}
	else { // print table case when x input 2 is larger than x range 1

		for(i = newItem; i <= newItem2; i++)  // insert the entries for the first row
		  {
		  a.push(row.insertCell(-1));
		  a[a.length -1].innerHTML = i;
		  }
		if(item3Big) { //print table case where second y input is less than first y input 
		  for(var q = newItem4; q <= newItem3; q++) // prints rows that range from newItem4 to newItem3
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  a[a.length -1].innerHTML = q; // insert the q value into a cell
			  for(var i = newItem; i <= newItem2; i++) // adds in entries from first X Input to second X Input
			  {
				  a.push(row.insertCell(-1));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
		else {
			//print table case where second y input is less than first y input 
			for(q = newItem3; q <= newItem4; q++) //printing rows from first Y input second Y Input 
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  a[a.length -1].innerHTML = q; // insert the q value into a cell
			  for(var i = newItem; i <= newItem2; i++) // // adds in entries from first X Input to second X Input 
			  {
				  a.push(row.insertCell(-1));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
	}
}
/* set the function as a var so to allow the validator message to clear with the method resetForm when a slider is moved.
 https://stackoverflow.com/questions/2086287/how-to-clear-jquery-validation-error-messages */
  var validator = $("#addForm").validate({
		rules: {
			item: {
				required: true,
				number: true
			},
			 item2: {
				required: true,
				number: true
			},
			item3: {
				required: true,
				number: true
			},
			item4: {
				required: true,
				number: true
			}
		},
		messages: {
			item: {
				required: "Enter the first X value",
				number: "Enter a valid number"
			},
			item2: { 
				required: "Enter the second X value",
				number: "Enter a valid number"
			},
			item3: {
				required: "Enter the first Y value",
				number: "Enter a valid number"
			},
			item4: {
				required: "Enter the second Y value",
				number: "Enter a valid number"
			}
		}
	});

// jquery validation: make sure the user enters something in each field, and make sure the contents are numbers
$(document).ready(function(){

  validator.form();
  
});
/* $(function() same effect as document ready*/
/* borrowed code from colorslider example: 
https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/jQueryUI1.8_Ch06_SliderWidget.pdf 
 The function will display  four sliders, each set to initial value 0, with ranges from [-50,50]. 
 Call function addItem to update the table each time a slider is moved. 
 used the var validator to reset any eror messages, but it will also reset invalid inputs to zero */
(function($){
	var sliderOpts = {
	  min:-50,
	  max: 50,
	  value: 0,
	  slide: function() {
	/* initial values for slider is set 255*/
	var y1 = $("#y1Slider").slider("value"),
	y2 = $("#y2Slider").slider("value"),
	x1 = $("#x1Slider").slider("value"),
	x2 = $("#x2Slider").slider("value");
	$("#item").val(x1);
	$("#item2").val(x2);
	$("#item3").val(y1);
	$("#item4").val(y2);
	addItem();
	validator.resetForm();
	}
	};
	$("#x1Slider, #x2Slider, #y1Slider, #y2Slider").slider(sliderOpts);
	  })(jQuery);
		  
		  
		
 (function($){
	$("#myTabs").tabs();
	
	/* used this to remove tabs with jquery ui documentation https://stackoverflow.com/questions/21709989/no-such-method-remove-for-tabs-widget-instance */
	$("#remove").click(function() {
		var active = $( "#myTabs" ).tabs( "option", "active" );
		var num_tabs = $("#myTabs ul li").length + 1;
		$("#myTabs").find( ".ui-tabs-nav li:eq(" + active + ")" ).remove();
		$("#myTabs").find( "div:eq(" + active + ")" ).remove();
		$("#myTabs").tabs( "refresh" );
		if(num_tabs -1  == 1) /*hide tab window if there are no saved tables*/
		{
			$("#myTabs").css("visibility", "hidden");
		}
	});
	
 })(jQuery);
 
	 /* add tab code taken from the jfiddle link https://stackoverflow.com/questions/14702631/in-jquery-ui-1-9-how-do-you-create-new-tabs-dynamically and http://jsfiddle.net/AJDLt/1/  */
	 /* append the list item to the mytabs list then append the div to mytabs */
	 /* call a function to insert a table into the div? */
function addTab() {
	var num_tabs = $("#myTabs ul li").length + 1;
	var table = document.getElementById("mult");
	var num = num_tabs - 1; /* index of divs in tab widget */
	var newItem = parseInt(document.getElementById('item').value);
	var newItem2 = parseInt(document.getElementById('item2').value);
	var newItem3 = parseInt(document.getElementById('item3').value);
	var newItem4 = parseInt(document.getElementById('item4').value);
	if(isNaN(newItem) || isNaN(newItem2) || isNaN(newItem3) || isNaN(newItem4))
	{
		return;
	}
	var minX = Math.min(newItem, newItem2);
	var maxX = Math.max(newItem, newItem2);
	var minY = Math.min(newItem3, newItem4);
	var maxY = Math.max(newItem3, newItem4);
	$("#myTabs ul").append("<li><a href='#tab" + num_tabs + "'>Table "+ num_tabs + " X: [" + minX + "," + maxX	+ "] Y: [" + minY + "," + maxY + "]" +   "</a></li>");
	$("#myTabs").append("<div id='tab"+num_tabs+"'></div>");
	$("#myTabs div:eq("+ num+ ")").append(cloneTable()); 
	$("#myTabs").tabs("refresh");
	var tabOpts = {
			 active: num
			};
			$("#myTabs").tabs(tabOpts); /*load the created tab because default is collapsed*/
}

/* create a duplicate table  to place in tab
https://stackoverflow.com/questions/921290/is-it-possible-to-clone-html-element-objects-in-javascript-jquery */
function cloneTable() {
	var table = document.getElementById("mult");
	var dupTable = table.cloneNode(true);
	return dupTable;
}
