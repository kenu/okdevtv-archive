# JWT
* JSON Web Token
* JSON Web Tokens are an open, industry standard [RFC 7519](https://tools.ietf.org/html/rfc7519) method for representing claims securely between two parties.
* https://jwt.io

## Structure
* Header
* Payload
* Signature
* `xxxxx.yyyyy.zzzzz`

* Header
  * type of the token
  * hashing algorithm
  * Base64Url encoded
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

* Payload
  * three types of claims: reserved, public, and private claims.
  * Reserved claims:  **iss** (issuer), **exp** (expiration time), **sub** (subject), **aud** (audience), and others.
  * Public claims: IANA JSON Web Token Registry or a collision resistant namespace
  * Private claims: custom claims created to share information

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

* Signature
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

## How jwt works
* HTTP Header
```
Authorization: Bearer <token>
```
* <img src="https://cdn.auth0.com/content/jwt/jwt-diagram.png" alt="JWT works" class="img"/>


## install
* `npm install jsonwebtoken`
  * https://github.com/auth0/node-jsonwebtoken

## Usage
* `jwt.sign(payload, secretOrPrivateKey, [options, callback])`

## example

* code from https://www.jsonwebtoken.io/
* `npm i --save njwt`

```js
var uuid = require('uuid');
var nJwt = require('njwt');

var claims = {
 "sub": "1234567890",
 "name": "John Doe",
 "admin": true,
 "jti": "f0b5fc9e-67d8-43f7-858a-a7cc5f0cae66",
 "iat": 1566783214,
 "exp": 1566786814
}

var jwt = nJwt.create(claims,"secret","HS256");
var token = jwt.compact();
console.log(token);
```

```js
var nJwt = require('njwt');

var result = nJwt.verify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImYwYjVmYzllLTY3ZDgtNDNmNy04NThhLWE3Y2M1ZjBjYWU2NiIsImlhdCI6MTU2Njc4MzIxNCwiZXhwIjoxNTY2Nzg2ODE0fQ.CZSC2L3vB0dGlH_3EUTt_98iR70gMsDalOF-uuNvmPk","secret", 'HS256');
console.log(result);
```

## ref
* https://auth0.com/signup
