$(document).ready(function(){
  $("#header").load("../../html_EN/_0/header.html", function(){
    //이벤트 영역을 넣는다.
    $(window).scroll(function(){
      if ($(window).scrollTop() > 400){
        $('header').css({'backgroundColor':'#fff'});
      }else{
        $('header').css({'backgroundColor':'rgba(255,255,255,0.8)', 'box-shadow':'0 3px 5px rgba(0, 0, 0, .3)'});
      }
    });
  });

  $("#footer").load("../../html_EN/_0/footer.html", function(){
    //이벤트 영역을 넣는다.
  });
});

function fn_move(link) {
	if (link == '0') {
		window.location.href = '../../html_EN/_0/main.html';
	} else if (link == '1_1') {
		window.location.href = '../../html_EN/_1/1_History.html';
	} else if (link == '1_2') {
		window.location.href = '../../html_EN/_1/2_Map.html';
	} else if (link == '1_3') {
		window.location.href = '../../html_EN/_1/3_Partners.html';
	} else if (link == '1_4') {
		window.location.href = '../../html_EN/_1/4_BI_CI.html';
	} else if (link == '1_5') {
		window.location.href = '../../html_EN/_1/5_Certificate.html';
	} else if (link == '2_1') {
		window.location.href = '../../html_EN/_2/1_Blockchain.html';
	} else if (link == '2_2') {
		window.location.href = '../../html_EN/_2/2_FIDO.html';
	} else if (link == '2_3') {
		window.location.href = '../../html_EN/_2/3_SWAI.html';
	} else if (link == '2_4') {
		window.location.href = '../../html_EN/_2/4_Security.html';
	} else if (link == '2_5') {
		window.location.href = '../../html_EN/_2/5_SI.html';
	} else if (link == '3_1') {
		window.location.href = '../../html_EN/_3/1_Notice.html';
	} else if (link == '3_2') {
		window.location.href = '../../html_EN/_3/2_Tidings.html';
	} else if (link == '3_3') {
		window.location.href = '../../html_EN/_3/3_Picture.html';
	} else if (link == '4') {
		window.location.href = '../../html_EN/_4/1_Question.html';
	}
	//글보기 추가
	else if (link == '3_1_1') {
		window.location.href = '../../html_EN/_3/1_1Notice.html';
	} else if (link == '3_2_1') {
		window.location.href = '../../html_EN/_3/2_1Tidings.html';
	}
	//한영변환   window.location.pathname // 파일 경로
	//5번 한글 페이지로
	if (link == 5) {
		var l = window.location.pathname;
		l = l.split("/");
		var url = "../../html/" + l[l.length - 2] + "/" + l[l.length - 1];
		window.location.href = url;
	}
	//6번 영어 페이지로
	if (link == 6) {
		var l = window.location.pathname;
		l = l.split("/");
		var url = "../../html_EN/" + l[l.length - 2] + "/" + l[l.length - 1];
		window.location.href = url;
	}
}