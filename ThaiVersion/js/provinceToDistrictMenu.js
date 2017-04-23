/* Code by Allen Liu             */
/* http://www.randomsnippets.com */

function printDistrictMenu(province) {
	var provinceSelect = '';
	if(province == 'none'){
		provinceSelect = '<select name="district" id="district" onChange="printSubDistrictMenu(this.value)">\
		<option value="none">ค้นหาด้วยชื่อจังหวัด</option>\
		</select>';
		printSubDistrictMenu('none');
	}
	else if (province == 'chiangMai') {
		provinceSelect = '<select name="district" id="district" onChange="printSubDistrictMenu(this.value)">\
		<option value="none">ค้นหาด้วยชื่ออำเภอ</option>\
		<option value="muengChiangMai">เมืองเชียงใหม่</option>\
		</select>';	
	}
	else if (province == 'lampang') {
		provinceSelect = '<select name="district" id="district" onChange="printSubDistrictMenu(this.value)">\
		<option value="none">ค้นหาด้วยชื่ออำเภอ</option>\
		<option value="muengLampang">เมืองลำปาง</option>\
		</select>';
	}
	document.getElementById('provinceSelect').innerHTML = provinceSelect;
}

function printSubDistrictMenu(district){
	var districtSelect ='';
	if(district == 'none'){
		districtSelect = '<select name="subdistrict" id="subdistrict">\
		<option value="none">ค้นหาด้วยชื่อตำบล</option>\
		</select>';
	}
	else if(district == 'muengChiangMai'){
		districtSelect = '<select name="subdistrict" id="subdistrict" onChange="goToLink(this.value)">\
		<option value="none">ค้นหาด้วยชื่อตำบล</option>\
		<option value="searchResultPage.html">สุเทพ</option>\
		</select>';	
	}
	else if (district == 'muengLampang') {
		districtSelect = '<select name="subdistrict" id="subdistrict" onChange="goToLink(this.value)">\
		<option value="none">ค้นหาด้วยชื่อตำบล</option>\
		<option value="https://www.google.com">บ้านเป้า</option>\
		</select>';
	}
	document.getElementById('districtSelect').innerHTML = districtSelect;
}

function goToLink(url){
		window.open(url,"_self");
}
