# jwt-server-to-server

Server to server communication using JWT (JSON Web Token), precisely JWS tokens (signed ones).
There are 2 versions: 

  * HMAC (keyed-Hash Message Authentication Code) with shared secret,
  * signature with 2 pairs of private-public keys for servers A and B

## HMAC version

To start HMAC version with shared secret:

>  npm run serverA
> 
>  npm run serverB

then use Postman to send request to produce endpoint

>  192.168.0.8:8080/api/produce


## signature version

To start HMAC version with shared secret:

>  npm run rsaServerA
> 
>  npm run rsaServerB

then use Postman to send request to produce endpoint

>  192.168.0.8:8080/api/produce
