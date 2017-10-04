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


## ref
* https://auth0.com/signup
