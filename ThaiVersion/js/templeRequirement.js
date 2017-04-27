$(function(){
	$("#wantedButton").click(function(){
		var count = $("#wantedList").children().length;
		if(count != 3){
				$("#wantedList").append('<li class="wanted"><input type="checkbox" class="check">\
					ต้องการที่สุด&nbsp;<input type="text" class="item" id="wantedItem">\
					<button class="wantedAddButton addButton">เพิ่ม</button></li>');
		}
		$(".wantedAddButton").click(function(){
			var item = $("#wantedItem").val();
			if(item != ""){
				if($('.check').is(":checked")){
					$($(this).parent()).replaceWith($('<li><span style="font-weight: bold;">(ต้องการที่สุด)\
						</span> ' + item + '<button class="removeButton">ลบออก</button></li>'));
				} else {
					$($(this).parent()).replaceWith($('<li>' + item + '<button class="removeButton highlight">\
						ลบออก</button></li>'));
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
					<button class="addButton unwantedAddButton">เพิ่ม</button></li>');
		}
		$(".unwantedAddButton").click(function(){
			var item = $("#unwantedItem").val();
			if(item != ""){
				$($(this).parent()).replaceWith($('<li>' + item + '<button class="removeButton">ลบออก</button></li>'));
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