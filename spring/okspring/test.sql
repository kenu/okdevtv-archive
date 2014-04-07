		
	
GRANT ALL PRIVILEGES ON *.* TO javauser@localhost
  IDENTIFIED BY 'javadude' WITH GRANT OPTION;
create database javatest;
use javatest;
create table testdata (
  id int not null auto_increment primary key,
  foo varchar(25),
  bar int);
use javatest;
insert into testdata values(null, 'hello1', 12345);
insert into testdata values(null, 'hello2', 12345);
insert into testdata values(null, 'hello3', 12345);
insert into testdata values(null, 'hello4', 12345);
