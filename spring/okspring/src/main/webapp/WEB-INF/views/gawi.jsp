<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>가위 바위 보</title>
<link rel="stylesheet" href="css/style.css">
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
var html5able = (typeof Audio !== "undefined");
var send = function(e) {
	if (html5able) {
		snd.play();
	}

	$.post('query.do', { choice: $(this).val() })
	 .success(function(d) {
		 var data = JSON.parse(d);
		 var message = "---- <strong>"+data.p1.name+": "+data.p1.choice+"</strong>"
		 +data.p2.name+": "+data.p2.choice+" ----";
		 $('#result').html(message).append($("<div>").attr("id", "judgement").html(data.judgement));
		 showMessage(data.stat);
	  });
};

var showMessage = function(data) {
	var message = "TOTAL: "+data.total+" ("+data.win+"승 "
	+data.even+"무 "
	+data.lose+"패 승률: "
	+data.rate+")";
	$("#stat").html($("<div>").html(message));
};

var showStat = function() {
	$.getJSON("stat.do")
	.success(function(data) {
		showMessage(data);
	});
};

var snd;

$(function(){
	if (html5able) {
		snd = new Audio("snd/beep-03.wav"); 
	}
	// sound from: http://www.mediacollege.com/downloads/sound-effects/beep/

	$('form').bind('submit', function(e) {return false;});
	$('button').click(send);
	
	showStat();
});
</script>
</head>
<body>
<div id="result"></div>
<div id="stat"></div>
<form method="post">
선택하세요:
<button name="choice" value="0">가위</button>
<button name="choice" value="1">바위</button>
<button name="choice" value="2">보</button>
</form>
</body>
</html>