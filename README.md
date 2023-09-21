# jwt-server-to-server

Server to server communication using JWT (JSON Web Token), precisely JWS tokens (signed ones).
There are 2 versions: 

  * HMAC (keyed-Hash Message Authentication Code) with shared secret,
  * signature with 2 pairs of private-public keys for servers A and B

## HMAC version

To start HMAC version with shared secret:

    npm run serverA 
    npm run serverB

then use Postman to send request to produce endpoint

    192.168.0.8:3000/api/produce

on Server A side you should see

    [serverA] sending request to consumer: localhost:8080
    [serverA] data exchange successfully finished

on Server B side you should see

    [serverB] received {
      "origin": "this message is in the body HTTP request and comes from serverA"
    }
    [serverB] decoded token {
      "tokenOrigin": "this token was created by serverA",
      "iat": 1695306984,
      "exp": 1695307884,
      "aud": "localhost:8080",
      "iss": "serverA",
      "sub": "serverA"
    }

## signature version

To start HMAC version with shared secret:

    npm run rsaServerA 
    npm run rsaServerB

then use Postman to send request to produce endpoint

    192.168.0.8:8080/api/produce


on Server B side you should see

    [serverB] sending request to consumer: localhost:3000
    [serverB] data exchange successfully finished

on Server A side you should see

    [serverA] received {
      "origin": "this message is in the body HTTP request and comes from serverB"
    }
    [serverA] decoded token {
      "tokenOrigin": "this token was created by serverB",
      "iat": 1695308646,
      "exp": 1695309546,
      "aud": "localhost:3000",
      "iss": "serverB",
      "sub": "serverB"
    }
