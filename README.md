# API Documentation

- Appname : SIMPLE RESTful API ,
- API : /{your-api-url}/

## Server Status Code

- 200 - OK
- 201 - CREATED
- 400 - BAD REQUEST
- 404 - NOT FOUND
- 500 - INTERNAL SERVER ERROR

## REGISTER

##### Request

- Method : POST
- Endpoint : `api/user/signup`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```json
{
  "email": "string",
  "password": "string",
  "fullname": "string",
  "phone": "number"
}
```

##### Response

- Body :

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

## LOGIN

##### Request

- Method : POST
- Endpoint : `api/user/login`
- Header :

  - Accept : application/json

- Body :

```json
{
  "email": "string",
  "password": "string"
}
```

##### Response

- Body :

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

## CRUD

### CREATE PRODUCTS

##### Request

- Method : POST
- Endpoint : `/api/products`
- Header
  - Accept : application/json
- Body :

```json
{
  "uid": "string, unique",
  "name": "string",
  "desc": "string",
  "price": "string",
  "quantity": "number"
}
```

##### Response

- Body :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "uid": "string, unique",
    "name": "string",
    "desc": "string",
    "price:": "string",
    "quantity": "number",
    "createdAt": "string"
  }
}
```

### GET PRODUCTS

##### Response

- Method : GET
- Endpoint : `/api/products/{id-products}`
- Header :
  - Accept : application/json
- Body :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "uid": "string, unique",
    "name": "string",
    "desc": "string",
    "price": "string",
    "quantity": "number",
    "createdAt": "string"
  }
}
```

### UPDATE PRODUCTS

##### Request

- Method : PUT
- Endpoint : `/api/products/{id-products}`
- Header :
  - Accept : application/json
- Body :

```json
{
  "name": "string",
  "desc": "string",
  "price": "string",
  "quantity": "number"
}
```

##### Response

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "uid": "string, unique",
    "name": "string",
    "desc": "string",
    "price": "string",
    "quantity": "number",
    "createdAt": "string",
    "updateAt": "string"
  }
}
```

### DELETE PRODUCTS

##### Request

- Method : DELETE
- Endpoint : `/api/products/{id-products}`
- Header :
  - Accept : application/json
- Body :

```json
{
  "uid": "string, unique"
}
```

##### Response

- Body :

```json
{
  "code": "number",
  "status": "string",
  "message": "string"
}
```

## LIST PRODUCTS

##### Response

- Method : GET
- Endpoint : `/api/products`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Query :
  - Size : number
  - Page : number
- Body :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "uid": "string, unique",
      "name": "string",
      "desc": "string",
      "price": "string",
      "quantity": "number",
      "createdAt": "string",
      "updateAt": "string"
    },
    {
      "uid": "string, unique",
      "name": "string",
      "desc": "string",
      "price": "string",
      "quantity": "number",
      "createdAt": "string",
      "updateAt": "string"
    }
  ]
}
```
