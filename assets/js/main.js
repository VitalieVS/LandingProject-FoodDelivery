$(document).ready(function(){
  	 AOS.init();

  	 $( "#button-press" ).click(function() {
  	 	if (valid_name() && valid_phone()) {
  	 		//do smth
  	 	} else{
  	 		$( function() {
			    $( "#dialog" ).dialog();
			});
  	 	}
	});

  	 $(function() {
            $("#tabs").tabs();
        });

});

	function valid_name(){
		let name = document.getElementById('name').value;	
		return (name.length>=7) && (name.length<29);
	}

	function valid_phone(){
		let phone = document.getElementById('phone').value;
		return (phone.length = 8) || (phone.length = 9);
	}

