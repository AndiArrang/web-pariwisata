# API Paket

### Create Paket API
Endpoint : POST /api/admin/paket

Cookie: token

Request Body :

```json
{
        "nama": "Nama Paket",
        "harga": 200000,
        "lokasi": "Malino",
        "durasi": "2 hari 2 malam"
}
```

Response Body Success :

```json
{
    "data": {
        "id_paket": 22,
        "nama": "Nama Paket",
        "harga": 200000,
        "lokasi": "Malino",
        "durasi": "2 hari 2 malam",
        "updatedAt": "2024-08-01T15:52:09.064Z",
        "createdAt": "2024-08-01T15:52:09.064Z"
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```


### Update Paket API
Endpoint : PATCH /api/admin/paket/:id

Cookie: token

Request Body :

```json
{
        "nama": "Paket baru",
        "harga": 100000,
}
```

Response Body Success :

```json
{
    "data": {
        "id_paket": 22,
        "nama": "Paket baru",
        "harga": 100000,
        "lokasi": "Malino",
        "durasi": "2 hari 2 malam",
        "updatedAt": "2024-08-01T15:52:09.064Z",
        "createdAt": "2024-08-01T15:52:09.064Z"
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```

### Remove Paket API
Endpoint : DELETE /api/admin/paket/:id

Cookie: token

Response Body Success :

```json
{

    "data": "OK"
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```


### GET All Paket API
Endpoint : GET /api/paket

Response Body Success :

```json
{
    "data": [
        {
            "id_paket": 19,
            "nama": "paket 1",
            "harga": 200,
            "lokasi": "malino",
            "durasi": "2 hari",
            "createdAt": "2024-07-20T07:07:19.000Z",
            "updatedAt": "2024-07-20T07:07:19.000Z",
            "paket_image": {
                "id": 8,
                "id_paket": 19,
                "url": "https://res.cloudinary.com/dx7don925/image/upload/v1722522873/web-pariwisata/paket-images/drvyae37qekys3asnhat.jpg",
                "public_id": "web-pariwisata/paket-images/drvyae37qekys3asnhat",
                "createdAt": "2024-08-01T14:21:41.000Z",
                "updatedAt": "2024-08-01T14:34:34.000Z"
            }
        },
        {
            "id_paket": 21,
            "nama": "Paket 2",
            "harga": 500000,
            "lokasi": "Bira",
            "durasi": "3 hari",
            "createdAt": "2024-07-20T17:07:30.000Z",
            "updatedAt": "2024-07-20T17:07:30.000Z",
            "paket_image": {
                "id": 10,
                "id_paket": 21,
                "url": "https://res.cloudinary.com/dx7don925/image/upload/v1722526736/web-pariwisata/paket-images/gtq74idt38q34l10qyfd.jpg",
                "public_id": "web-pariwisata/paket-images/gtq74idt38q34l10qyfd",
                "createdAt": "2024-08-01T15:38:13.000Z",
                "updatedAt": "2024-08-01T15:38:57.000Z"
            }
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```


### GET Paket By Lokasi API
Endpoint : GET /api/paket/lokasi

Request Body :

```json
{
        "query": "malino",
}
```

Response Body Success :

```json
{
    "data": [
        {
            "id_paket": 21,
            "nama": "Paket spesial",
            "harga": 500000,
            "lokasi": "Malino",
            "durasi": "3 hari",
            "createdAt": "2024-07-20T17:07:30.000Z",
            "updatedAt": "2024-07-20T17:07:30.000Z",
            "paket_image": {
                "id": 10,
                "id_paket": 21,
                "url": "https://res.cloudinary.com/dx7don925/image/upload/v1722526736/web-pariwisata/paket-images/gtq74idt38q34l10qyfd.jpg",
                "public_id": "web-pariwisata/paket-images/gtq74idt38q34l10qyfd",
                "createdAt": "2024-08-01T15:38:13.000Z",
                "updatedAt": "2024-08-01T15:38:57.000Z"
            }
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```

