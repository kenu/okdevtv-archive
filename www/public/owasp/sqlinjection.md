# SQL Injection
```php
$txtUserId = $_GET("UserId");
$txtSQL = "SELECT * FROM Users WHERE UserId = " . $txtUserId;
```

* `UserId=105;%20DROP%20TABLE%20Suppliers`
```sql
SELECT * FROM Users WHERE UserId = 105; DROP TABLE Suppliers;
```

## 방어법
* binding
```php
$stmt = $dbh->prepare("INSERT INTO Customers (CustomerName,Address,City)
VALUES (:nam, :add, :cit)");
$stmt->bindParam(':nam', $txtNam);
$stmt->bindParam(':add', $txtAdd);
$stmt->bindParam(':cit', $txtCit);
$stmt->execute();
```

* escape filter
```php
//$sql = "SELECT * FROM SQL_Injection WHERE type='".$_GET['type']."'";
$sql = "SELECT * FROM SQL_Injection WHERE type='".mysql_real_escape_string($_GET['type'])."'";
```
  * 결과
```sql
SELECT * FROM SQL_Injection WHERE type='public\' or 1=\'1'
```

## ref
* https://www.w3schools.com/sql/sql_injection.asp
* http://php.net/manual/kr/security.database.sql-injection.php
* prepared_statement
  * http://php.net/manual/en/pdo.prepared-statements.php
