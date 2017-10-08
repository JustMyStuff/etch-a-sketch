// First we wait for the DOM to be loaded
$(document).ready(function() {

// Our function to remove our grid
function removeGrid () {
	$('#grid-holder').children().remove();
	//alert('Trying to remove all children!');
}


// Our function to create our etch a sketch grid divs
function createGrid (numberOfSquares) {

	//alert('Number of squares is: ' + Math.pow(numberOfSquares,2));
	var gridHeight = 960;
	var gridWidth = 960;
	var blockHeight = gridHeight / numberOfSquares;
	var blockWidth = gridWidth / numberOfSquares;

	for(var i = 0; i < Math.pow(numberOfSquares,2); i++)
	{
	var div = document.createElement("div");
	$(div).attr("class", "sketch");
	$(div).css("display", "block");
	$(div).css("width", blockWidth + "px");
	$(div).css("height", blockHeight + "px");
	$(div).css("float", "left");

		$('#grid-holder').append(div);
	}

}

removeGrid();
createGrid(16);

$('.sketch').on('mouseenter',function() {
	$(this).addClass('highlight');
});

});