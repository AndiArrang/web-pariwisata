# API Paket Image

### Upload Paket Image API
Endpoint : POST /api/admin/paket-image/:idPaket

Cookie: token

Request Body :

```json
{
     "file": {
        "type": "file",
        "format": ["jpg", "jpeg", "png"],
        "required": true,
    }
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data added successfully.",
    "data": {
        "id": 1,
        "id_paket": 1,
        "url": "https://res.cloudinary.com/dx7don925/image/upload/v1722699130/web-pariwisata/paket-images/x06evjcgatd0878tzdix.png",
        "public_id": "web-pariwisata/paket-images/x06evjcgatd0878tzdix",
        "updatedAt": "2024-08-03T15:32:11.696Z",
        "createdAt": "2024-08-03T15:32:11.696Z"
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```
### Upload Paket Image API
Endpoint : PUT /api/admin/paket-image/:idPaket

Cookie: token

Request Body :

```json
{
     "file": {
        "type": "file",
        "format": ["jpg", "jpeg", "png"],
        "required": true,
    }
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Data updated successfully.",
    "data": {
        "id": 1,
        "id_paket": 1,
        "url": "https://res.cloudinary.com/dx7don925/image/upload/v1722699130/web-pariwisata/paket-images/x06evjcgatd0878tzdix.png",
        "public_id": "web-pariwisata/paket-images/x06evjcgatd0878tzdix",
        "updatedAt": "2024-08-03T15:32:11.696Z",
        "createdAt": "2024-08-03T15:32:11.696Z"
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
Endpoint : DELETE /api/admin/paket-image/:idPaket

Cookie: token

Response Body Success :

```json
{
    "status": "success",
    "message": "Data deleted successfully.",
    "data": {
        "result": "ok"
    }
}
```

Response Body Error :

```json
{
    "errors": "errors message"
}
```

