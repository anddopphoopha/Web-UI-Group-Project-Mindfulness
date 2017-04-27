$(function(){
	$("#wantedButton").click(function(){
		var count = $("#wantedList").children().length;
		if(count != 3){
				$("#wantedList").append('<li class="wanted"><input type="checkbox" class="check">&nbsp;\
					Emergency Item&nbsp;<input type="text" class="item" id="wantedItem">\
					<button class="wantedAddButton addButton">Add</button></li>');
		}
		$(".wantedAddButton").click(function(){
			var item = $("#wantedItem").val();
			if(item != ""){
				if($('.check').is(":checked")){
					$($(this).parent()).replaceWith($('<li> <span style="font-weight: bold;">(Emergency Item)</span> ' + item + '\
						<button class="removeButton">Remove</button></li>'));
				} else {
					$($(this).parent()).replaceWith($('<li>' + item + '<button class="removeButton">Remove</button></li>'));
				}
				$(".removeButton").click(function(){
					$($(this).parent()).replaceWith();
				});
			}
		});
	});
	$("#unwantedButton").click(function(){
		var count = $("#unwantedList").children().length;
		if(count != 3){
				$("#unwantedList").append('<li class="unwanted"><input type="text" class="item" id="unwantedItem">\
					<button class="addButton unwantedAddButton">Add</button></li>');
		}
		$(".unwantedAddButton").click(function(){
			var item = $("#unwantedItem").val();
			if(item != ""){
				$($(this).parent()).replaceWith($('<li>' + item + '<button class="removeButton">Remove</button></li>'));
				$(".removeButton").click(function(){
					$($(this).parent()).replaceWith();
				});
			}
		});
	});

	$(".removeButton").click(function(){
		$($(this).parent()).replaceWith();
	});
});