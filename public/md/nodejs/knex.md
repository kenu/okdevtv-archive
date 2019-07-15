# KNEX
* Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.
* https://knexjs.org/

## install

```
npm install knex --save
```

## init

```
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
```

## Knex Query Builder

* The heart of the library, the knex query builder is the interface used for building and executing standard SQL queries, such as `select`, `insert`, `update`, `delete`.

1. Identifier Syntax
2. Where Clauses
3. Join Methods
4. OnClauses
5. ClearClauses
6. Having Clauses


## Transactions

## Schema Builder

## Raw


