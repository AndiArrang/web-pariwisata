# API Harga Penginapan

### Create harga penginapan
Endpoint : POST /api/admin/harga-penginapan/:idPenginapan

Cookie: token

Request Body :

```json
[
    {
        "min_org": 3,   //required
        "max_org": 6,   //required
        "harga": 150000 //required
    },
    {
        "min_org": 7,   //required
        "max_org": 9,   //required
        "harga": 100000 //required
    }
]
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data added successfully.",
    "data": {
        "id_penginapan": 5,
        "nama": "Penginapan C",
        "lokasi": "Bira",
        "tipe": "villa",
        "createdAt": "2024-07-21T14:04:14.000Z",
        "updatedAt": "2024-07-21T14:04:14.000Z",
        "harga_penginapans": [
             {
                "id": 1,
                "id_penginapan": 5,
                "min_org": 3,
                "max_org": 6,
                "harga": 150000,
                "createdAt": "2024-07-22T15:03:43.000Z",
                "updatedAt": "2024-07-22T15:03:43.000Z"
            },
            {
                "id": 2,
                "id_penginapan": 5,
                "min_org": 7,
                "max_org": 9,
                "harga": 100000,
                "createdAt": "2024-07-22T14:11:47.000Z",
                "updatedAt": "2024-07-22T14:11:47.000Z"
            }      
        ]
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```


### update harga penginapan
Endpoint : PATCH /api/admin/harga-penginapan/:idPenginapan

Cookie: token

Request Body :

```json
[
    {
        "id":1,  //required
        "min_org": 1,
        "max_org": 3,
        "harga": 200000
    },
    {
        "id":2, //required   
        "min_org": 4,
        "max_org": 6,
        "harga": 150000
    }
]
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data updated successfully.",
    "data": {
        "id_penginapan": 5,
        "nama": "Penginapan C",
        "lokasi": "Bira",
        "tipe": "villa",
        "createdAt": "2024-07-21T14:04:14.000Z",
        "updatedAt": "2024-07-21T14:04:14.000Z",
        "harga_penginapans": [
            {
                "id": 1,
                "id_penginapan": 5,
                "min_org": 1,
                "max_org": 3,
                "harga": 100009,
                "createdAt": "2024-07-22T14:11:47.000Z",
                "updatedAt": "2024-07-22T14:11:47.000Z"
            },
            {
                "id": 2,
                "id_penginapan": 5,
                "min_org": 4,
                "max_org": 6,
                "harga": 100009,
                "createdAt": "2024-07-22T15:03:43.000Z",
                "updatedAt": "2024-07-22T15:03:43.000Z"
            }
        ]
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```

### Get harga penginapan
Endpoint : Get /api/harga-penginapan/:idPenginapan

Response Body Success :

```json
{
    {
    "data": {
        "id_penginapan": 5,
        "nama": "Penginapan C",
        "lokasi": "Bira",
        "tipe": "villa",
        "createdAt": "2024-07-21T14:04:14.000Z",
        "updatedAt": "2024-07-21T14:04:14.000Z",
        "harga_penginapans": [
            {
                "id": 1,
                "id_penginapan": 5,
                "min_org": 1,
                "max_org": 2,
                "harga": 100009,
                "createdAt": "2024-07-22T14:11:47.000Z",
                "updatedAt": "2024-07-22T14:11:47.000Z"
            },
            {
                "id": 2,
                "id_penginapan": 5,
                "min_org": 3,
                "max_org": 5,
                "harga": 100009,
                "createdAt": "2024-07-22T15:03:43.000Z",
                "updatedAt": "2024-07-22T15:03:43.000Z"
            }
        ]
    }
}
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```

### DELETE harga penginapan
Endpoint : DELETE /api/harga-penginapan/:id

cookie: token 

Response Body Success :

```json
{
    "status": "success",
    "message": "Data deleted successfully.",
}
``

Response Body Error :

```json
{
    "errors": "errors message"
}
```



