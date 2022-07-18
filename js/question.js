function send_email(){

	var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

	if($("#name").val()==''){
		alert('이름을 입력해 주세요.')
		$("#name").focus();
		return false;
	}
	
	if($("#company_name").val() == ""){
		alert('소속을 입력해 주세요.');
		$("#company_name").focus();
		return false;
	}
	
	if($("#email").val()==''){
		alert('이메일을 입력해 주세요.');
		$("#email").focus();
		return false;
	}
	var email = document.getElementById("email").value;
	if(exptext.test(email)==false){
		//이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
		alert("이메일형식이 올바르지 않습니다.");
		$("#email").focus();
		return false;

	}
	var tell=document.getElementById("tell").value;
	if(tell==''){
		alert('휴대전화를 입력해 주세요.')
		$("#tell").focus();
		return false;
	}
	
	if(tell_check(tell)==false){
		tell.focus();
		return false;
	}
	
	if($("#subject").val() == ""){
		alert('제목을 입력해 주세요.')
		$("#subject").focus();
		return false;
	}
	
	if($("#comments").val()==''){
		alert('내용을 입력해 주세요.')
		$("#comments").focus();
		return false;
	}
	
	if($('#agree_reception').is(":checked")==false){
		alert('소프트제국 뉴스레터 및 메일 수신에 동의해 주세요.')
		$("#agree_reception").focus();
		return false;
	}
	//console.log(($('#email_from').serializeArray()));
	var form_data = $('#email_from').serializeArray();

	loading.show();
	$.ajax({
				  
		  cache: false, 
		  //url : "https://script.google.com/macros/s/AKfycbzppSLcwBAcNrft4iDYFQH9hbfhlLvL5C0Qqt4/exec",
		  url : "https://script.google.com/macros/s/AKfycbyO0qOSK3YhfSYZ3TRsDQZidJFdvck3jzFiqnii/exec",
		  data: $('#email_from').serializeArray(),
		  //data: 'dataTest1',
		  type: 'Post',
		  success : function(result) {
			
		  alert('이메일 전송이 완료되었습니다.');
		  $("#subject").val("");		
		  $("#tell").val("");
		  $("#company_name").val("");
		  $("#name").val("");
		  $("#email").val("");
		  $("#comments").val("");
			loading.hide();
			
  
			},error : function(XMLHttpRequest,status,error) {
						alert('이메일 전송이 실패 되었습니다.');
			$("#subject").val("");
			$("#tell").val("");
			$("#company_name").val("");
			$("#name").val("");
			$("#email").val("");
			$("#comments").val("");
			loading.hide();
			  
		  }
	  })
			  
}




function tell_check(tell){
	// 기존 번호에서 - 를 삭제합니다.
	var trans_num = tell.replace(/-/gi,'');
  
	// 입력값이 있을때만 실행합니다.
	if(trans_num != null && trans_num != '')
	{
		// 총 핸드폰 자리수는 11글자이거나, 10자여야 합니다.
		if(trans_num.length==11 || trans_num.length==10) 
		{   
			// 유효성 체크
			var regExp_ctn = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
			if(regExp_ctn.test(trans_num))
			{
				// 유효성 체크에 성공하면 하이픈을 넣고 값을 바꿔줍니다.
				trans_num = trans_num.replace(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");                  
				$(tell).val(trans_num);
			}
			else
			{
				alert("유효하지 않은 전화번호 입니다.");
				$(tell).val("");
				
				return false;
			}
		}
		else 
		{
			alert("유효하지 않은 전화번호 입니다.");
			$(tell).val("");
		
			return false;
		}
  }
};  


var loading = {};
loading = {
		show : function() {
			document.getElementById("load").style.display = 'block';
		},
		hide : function() {
			document.getElementById("load").style.display = 'none';
		}
		
};
