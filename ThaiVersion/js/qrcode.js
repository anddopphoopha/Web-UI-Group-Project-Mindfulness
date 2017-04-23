function PrintQr(printArea){
	var printcontent = document.getElementById(printArea).innerHTML;
	var oritinalContent = document.body.innerHTML;
	document.body.innerHTML = printcontent;
	window.print();
	document.body.innerHTML = oritinalContent;
}