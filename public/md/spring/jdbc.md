# Spring JDBC
* `JDBCTemplate`
* Table 19.1. Spring JDBC - who does what?

|Action |Spring	|You|
|---|---|---|
|Define connection parameters.| | X|
|Open the connection.|  X| |
|Specify the SQL statement. | |X |
|Declare parameters and provide parameter values | |X |
|Prepare and  execute the statement. |X | |
|Set up the loop to iterate through the results (if any). |X | |
|Do the work for each iteration. | |X |
|Process any exception. |X | |
|Handle transactions. |X | |
|Close the connection, statement and resultset. | X | &nbsp; |

## Sample


## ref
https://docs.spring.io/spring/docs/current/spring-framework-reference/html/jdbc.html
