<%@ page language="java" contentType="text/html; charset=utf8"
    pageEncoding="utf8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8">
<title>statJSONTest</title>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
var jqxhr = $.getJSON('./stat.do', function(j){alert("success"+JSON.stringify(j));})
;
</script>
</head>
<body>
안녕하세요.
<div id="result"></div>
</body>
</html>