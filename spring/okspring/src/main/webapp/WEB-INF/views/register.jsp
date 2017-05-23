<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login</title>
<style>
.msg {
  color: #f00;
}
</style>
</head>
<body>

<form method="post" action="register.do">
id: <input type="text" name="id" value="${user.id}"><br>
pw:<input type="password" name="password"><br>
confirm pw: <input type="password" name="confirmPassword"><br>
<input type="submit" value="register">
<br>
<span class="msg">${msg}</span>
	</form></body>
</html>