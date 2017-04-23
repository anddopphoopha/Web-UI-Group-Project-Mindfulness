/* Code by Allen Liu             */
/* http://www.randomsnippets.com */

function printDistrictMenu(province) {
	var provinceSelect = '';
	if(province == 'none'){
		provinceSelect = '<select name="district" id="district" onChange="printSubDistrictMenu(this.value)">\
		<option value="none">Select District</option>\
		</select>';
		printSubDistrictMenu('none');
	}
	else if (province == 'chiangMai') {
		provinceSelect = '<select name="district" id="district" onChange="printSubDistrictMenu(this.value)">\
		<option value="none">Select District</option>\
		<option value="muengChiangMai">Mueang Chiang Mai</option>\
		</select>';	
	}
	else if (province == 'lampang') {
		provinceSelect = '<select name="district" id="district" onChange="printSubDistrictMenu(this.value)">\
		<option value="none">Select District</option>\
		<option value="muengLampang">Mueng Lampang</option>\
		</select>';
	}
	document.getElementById('provinceSelect').innerHTML = provinceSelect;
}

function printSubDistrictMenu(district){
	var districtSelect ='';
	if(district == 'none'){
		districtSelect = '<select name="subdistrict" id="subdistrict">\
		<option value="none">Select Sub District</option>\
		</select>';
	}
	else if(district == 'muengChiangMai'){
		districtSelect = '<select name="subdistrict" id="subdistrict" onChange="goToLink(this.value)">\
		<option value="none">Select Sub District</option>\
		<option value="searchResultPage.html">Suthep</option>\
		</select>';	
	}
	else if (district == 'muengLampang') {
		districtSelect = '<select name="subdistrict" id="subdistrict" onChange="goToLink(this.value)">\
		<option value="none">Select Sub District</option>\
		<option value="https://www.google.com">Ban Pao</option>\
		</select>';
	}
	document.getElementById('districtSelect').innerHTML = districtSelect;
}

function goToLink(url){
		window.open(url,"_self");
}
