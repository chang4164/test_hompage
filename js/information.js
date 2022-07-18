$(document).ready(function(){
  $(".columns figure").click(function(){
    $("#popup").show();
  });
	$(".imgDark").click(function(){
    $("#popup").hide();
  });
	$(".close").click(function(){
    $("#popup").hide();
  });
});