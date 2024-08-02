# API paket penginapan

### API membuat paket baru serta menambahkan penginapan yg terhubung 
Endpoint : POST /api/admin/paket-penginapan

Cookie: token

Request Body :

```json
{
        "nama": "Nama Paket",
        "harga": 200000,
        "lokasi": "Malino",
        "durasi": "2 hari 2 malam",
        "idPenginapans": [2,3]
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data added successfully.",
    "data": {
        "id_paket": 19,
        "nama": "Nama Paket",
        "harga": 200000,
        "durasi": "2 hari 2 malam",
        "lokasi": "malino",
        "penginapans": [
            {
                "id_penginapan": 2,
                "nama": "Penginapan B",
                "lokasi": "Malino",
                "tipe": "villa"
            },
            {
                "id_penginapan": 3,
                "nama": "Penginapan C",
                "lokasi": "Malino",
                "tipe": "villa"
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


### API Menambahkan penginapan baru kepada paket yg sudah ada
Endpoint : POST /api/admin/paket-penginapan/:idPaket

Cookie: token

Request Body :

```json
{
        "idPenginapans": [2,3]
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data added successfully.",
    "data": {
        "id_paket": 19,
        "nama": "Nama Paket",
        "harga": 200000,
        "durasi": "2 hari 2 malam",
        "lokasi": "malino",
        "penginapans": [
            {
                "id_penginapan": 2,
                "nama": "Penginapan B",
                "lokasi": "Malino",
                "tipe": "villa"
            },
            {
                "id_penginapan": 3,
                "nama": "Penginapan C",
                "lokasi": "Malino",
                "tipe": "villa"
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


### API Mengganti semua penginapan yg terhubung dengan paket dengan daftar penginapan baru
Endpoint : PUT /api/admin/paket-penginapan/:idPaket

Cookie: token

Request Body :

```json
{
        "idPenginapans": [2,3]
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data updated successfully.",
    "data": {
        "id_paket": 19,
        "nama": "Nama Paket",
        "harga": 200000,
        "durasi": "2 hari 2 malam",
        "lokasi": "malino",
        "penginapans": [
            {
                "id_penginapan": 2,
                "nama": "Penginapan B",
                "lokasi": "Malino",
                "tipe": "villa"
            },
            {
                "id_penginapan": 3,
                "nama": "Penginapan C",
                "lokasi": "Malino",
                "tipe": "villa"
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


## GET Penginapan by paket
Endpoint : GET /api/paket-penginapan/:idPaket

Response Body Success :

```json
{
    "data": {
        "id_paket": 19,
        "nama": "Nama Paket",
        "harga": 200000,
        "durasi": "2 hari 2 malam",
        "lokasi": "malino",
        "penginapans": [
            {
                "id_penginapan": 2,
                "nama": "Penginapan B",
                "lokasi": "Malino",
                "tipe": "villa"
            },
            {
                "id_penginapan": 3,
                "nama": "Penginapan C",
                "lokasi": "Malino",
                "tipe": "villa"
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


## DELETE Penginapan in paket relation
Endpoint : DELETE /api/admin/paket-penginapan/:idPaket

Cookie: token

Response Body Success :

```json
{
    "status": "success",
    "message": "Data deleted successfully.",
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```



