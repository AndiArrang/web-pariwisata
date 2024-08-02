# API Penginapan

### Create Penginapan API
Endpoint : POST /api/admin/penginapan

Cookie: token

Request Body :

```json
{
        "nama": "Nama Paket",
        "lokasi": "Malino",
        "tipe": "enum(hotel,villa)"
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data added successfully",
    "data": {
        "id_penginapan": 7,
        "nama": "Penginapan A",
        "lokasi": "malino",
        "tipe": "Villa",
        "updatedAt": "2024-08-02T06:34:25.637Z",
        "createdAt": "2024-08-02T06:34:25.637Z"
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```


### Update Penginpan API
Endpoint : PATCH /api/admin/penginapan/:id

Cookie: token

Request Body :

```json
{
        "nama": "Penginpan baru",
        "lokasi": "Bantaeng",
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data Updated successfully",
      "data": {
        "id_penginapan": 7,
        "nama": "Penginapan Baru",
        "lokasi": "Bantaeng",
        "tipe": "Villa",
        "updatedAt": "2024-08-02T06:34:25.637Z",
        "createdAt": "2024-08-02T06:34:25.637Z"
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
Endpoint : DELETE /api/admin/penginapan/:id

Cookie: token

Response Body Success :

```json
{
    "status": "success",
    "message": "Data deleted successfully",
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

