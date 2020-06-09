# falconmicroservices

> A dockerized micro-service for adding, updating, retrieving and deleting files

### Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm run dev - (development)
npm start - (production)
```

### Testing

### Files

#### Create a File

* Method - POST

* URL - http://localhost:3000/api/v1/files

* Sample Request

```
{
    "file": "mark.png"
}
```

* Sample Response

```
{
    "success": true,
    "message": "File Uploaded"
}
```

#### Get all Files

* Method - GET

* URL - http://localhost:3000/api/v1/files

* Sample Response

```
{
    "status": true,
    "message": "Files Found",
    "files": [
        {
            "id": "5e6288bc8c7fec6308a1d499",
            "file": "s3://falcon-bucket/files/mark.png"
        },
        {
            "id": "5e6288bc8c7fec6308a1d498",
            "file": "s3://falcon-bucket/files/essien.gif"
        },
        {
            "id": "5e6288bc8c7fec6308a1d497",
            "file": "s3://falcon-bucket/files/seyi.jpg"
        },
        {
            "id": "5e6288bc8c7fec6308a1d496",
            "file": "s3://falcon-bucket/files/john.gif"
        },
        {
            "id": "5e6288bc8c7fec6308a1d495",
            "file": "s3://falcon-bucket/files/doe.jpeg"
        }
    ]
}
```

#### Get a File

* Method - GET

* URL - http://localhost:3000/api/v1/files/:id

* Sample Response

```
{
    "status": true,
    "message": "File Found",
    "file": {
        "id": "5e6288bc8c7fec6308a1d499",
        "file": "s3://falcon-bucket/files/mark.png"
    }
}
```

#### Update a File

* Method - PUT

* URL - http://localhost:3000/api/v1/files/:id

* HEADER

* Sample Request

```
{
    "id": "5e6288bc8c7fec6308a1d499",
    "file": "s3://falcon-bucket/files/mark.png"
}
```

* Sample Response

```
{
    "status": true,
    "message": "File Updated"
}
```

#### Delete a File

* Method - DELETE

* URL - http://localhost:3000/api/v1/files/:id

* HEADER

* Sample Request

```
{
    "id": "5e6288bc8c7fec6308a1d499"
}
```

* Sample Response

```
{
    "status": true,
    "message": "File Deleted"
}
```

#### Search a File

#### Get all Files - Paging