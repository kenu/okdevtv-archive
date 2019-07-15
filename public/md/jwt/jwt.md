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
* <img src="https://cdn.auth0.com/content/jwt/jwt-diagram.png" alt="JWT works"/>


## install
* `npm install jsonwebtoken`
  * https://github.com/auth0/node-jsonwebtoken

## Usage
* `jwt.sign(payload, secretOrPrivateKey, [options, callback])`

## example
```javascript
// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//backdate a jwt 30 seconds
var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

// sign with RSA SHA256
var cert = fs.readFileSync('private.key');  // get private key
var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

// sign asynchronously
jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
});
```

## ref
* https://auth0.com/signup
