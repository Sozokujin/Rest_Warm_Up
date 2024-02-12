# API Documentation

## User Endpoints

### Create User

```shell
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"username": "utilisateur1", "email": "utilisateur1@example.com", "password": "test"}'
```

`````

### Get All Users

```shell
curl http://localhost:3000/users
```

### Get User by ID

```shell
curl http://localhost:3000/users/:id
```

### Update User by ID

```shell
curl -X PATCH http://localhost:3000/users/:id \
  -H "Content-Type: application/json" \
  -d '{"username": "nouveau_nom"}'
```

### Delete User by ID

```shell
curl -X DELETE http://localhost:3000/users/:id
```

## Wallet Endpoints

### Create Wallet

````shell
curl -X POST http://localhost:3000/wallets \
  -H "Content-Type: application/json" \
  -d '{"name": "Portefeuille 1", "balance": 1000, "userId": 1}'

### Get All Wallets

```shell
curl http://localhost:3000/wallets
`````

### Get Wallet by ID

```shell
curl http://localhost:3000/wallets/:id
```

### Update Wallet by ID

```shell
curl -X PATCH http://localhost:3000/wallets/:id \
  -H "Content-Type: application/json" \
  -d '{"name": "Nouveau portefeuille"}'
```

### Delete Wallet by ID

```shell
curl -X DELETE http://localhost:3000/wallets/:id
```

## Crypto Endpoints

### Create Crypto

```shell
curl -X POST http://localhost:3000/crypto \
  -H "Content-Type: application/json" \
  -d '{"name": "Bitcoin", "symbol": "BTC"}'
```

### Get All Crypto currencies

```shell
curl http://localhost:3000/crypto
```

### Get Crypto by ID

```shell
curl http://localhost:3000/crypto/:id
```

### Update Crypto by ID

```shell
curl -X PATCH http://localhost:3000/crypto/:id \
  -H "Content-Type: application/json" \
  -d '{"name": "Nouveau nom"}'
```

### Delete Crypto by ID

```shell
curl -X DELETE http://localhost:3000/crypto/:id
```
