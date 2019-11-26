$(document).ready(function(){
  	 AOS.init();

  	 $("#button-press").click(function() {  	 	
		let name = getValue('name');
		let phone = getValue('phone');
		
  	 	if (!validName(name) || !validPhone(phone)) {
  	 		showErrors();  	 		
  	 	} else {
  	 		submitData();
  	 	}
	});

  	 $(function() {
        $("#tabs").tabs();
     });
});
	
	function validName(name){
		return name.length >= 3 && name.length < 29 ;//&& (name.match(/\d+/g));
	}

	function validPhone(phone){
		return phone.length > 7 && phone.length < 10 ;// && !(phone.match(/^[A-Za-z]+$/));
	}
	
	function getValue(fieldName) {
		return document.getElementById(fieldName).value
	}

	function submitData() {
		$("#call-form.login-box.btn").css("background-color: red;");
	}

	function showErrors(){
		$("#dialog").dialog();
	}




//a = "fgdfgfdr5t4353454";

//b = (a.length >= 3 && a.length < 29 && (a.search(/\d+/g)));
//alert(b); //8