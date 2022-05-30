Authenticate [API]
- Request
```json
/Authenticate   GET
application/json
{
    grant_type: "Bareer"
    client_id: "HSJKDH234KADJF3KDHFSD",
    api_key: "SOMESUPERSECRETKEY",
    scope: ["admin", "pets", "refunds"]
}  
```
- Response
```json
application/json

{
    "token_type":"bareer",
    "access_token":"asd83kdkahfo34",
    "expires_in":"3600",
    "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
    "scope":["admin", "pets", "refunds"]
}
```

Authenticate [USER]
```
/Authenticate   GET
application/json
{
    grant_type: "Bareer"
    client_id: "HSJKDH234KADJF3KDHFSD",
    client_secret: "Some Super secret key",
    username: "",
    password: "",
    scope: ["admin", "pets", "refunds"]
}  
```
- Response
```json
application/json

{
    "token_type":"bareer",
    "access_token":"asd83kdkahfo34",
    "expires_in":"3600",
    "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
    "scope":["admin", "pets", "refunds"]
}
```

Token [*]
``` json
{
    /Token  POST
    application/json

    "token_type":"bareer",
    "access_token":"asd83kdkahfo34",
    "expires_in":"3600",
    "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
    "scope":["admin", "pets", "refunds"]


}
```
- Response
```json
application/json

{
    "token_type":"bareer",
    "access_token":"asd83kdkahfo34",
    "expires_in":"3600",
    "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
    "scope":["admin", "pets", "refunds"]
}
```

Errors:
- invalid client_id
- invalid client_secret
- inavlid grant_type
- invalid scope
- invalid scope permissions
- invalid refresh_token
- invalid access_token
- invalid expires_in
- missing username
- missing password
- missing client_id
- missing client_secret
- missing grant_type
- missing scope
- missing refresh_token 
- missing access_token
- missing expires_in