$("#wantedButton").click(function(){
		$("#wantedList li.requirement").show();
});
$("#unwantedButton").click(function(){
		$("#unwantedList li.requirement").show();
});
$("#wantedList li.first button.removeButton").click(function(){
	$("#wantedList li.first").hide();
});
$("#wantedList li.second button.removeButton").click(function(){
	$("#wantedList li.second").hide();
});
$("#unwantedList li.first button.removeButton").click(function(){
	$("#unwantedList li.first").hide();
});
$("#unwantedList li.second button.removeButton").click(function(){
	$("#unwantedList li.second").hide();
});
