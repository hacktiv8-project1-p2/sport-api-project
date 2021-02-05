# Basketball App

## URL

/user

/player

/news

/livescore

---

## METHODS

<b><u>POST /user/register</u></b>

Untuk mendaftarkan diri anda sebagai pengguna basketball app kami. Semua input harus diisi, dan <u>e-mail</u> bersifat unique, yang berarti tidak bisa ada 2 e-mail yang sama yang akan terdaftar di database kami. Endpoint ini menerima 3 request body, yaitu:

- full_name
- email
- password

Output berupa sebuah object.

Success response (201)

```json
{
    "msg": "Register success",
    "id": 21,
    "full_name": "Shark Potter",
    "email": "harry@gmail.com"
}
```

Error responses:

- 400
- 500

<b><u>POST /user/login</u></b>

Setelah anda berhasil register, anda dapat login dengan e-mail dan password yang anda daftar di endpoint /user/register. Semua input harus diisi. Endpoint ini menerima 2 request body, yaitu:

- email
- password

Output berupa sebuah object yang berisi access_token. access_token ini yang akan mengidentifikasi perbedaan antara 1 user dengan user yang lain.

Success response (200)

```json
{
    "access_token": "<token>"
}
```

Error responses:

- 400
- 404
- 500

---

<b><u>GET /news</u></b>

Anda hanya bisa mengakses route ini setelah anda register dan login. Anda akan menerima hasil array of objects, yang setiap objectnya memiliki 4 atribut, yaitu:

- title: STRING
- abstract: STRING
- url: STRING
- imageUrl: STRING

Success response (200)
```json
[
    {
        "title": <title>,
        "abstract": <abstract>,
        "url": <url>,
        "imageUrl": <imageUrl>
    },
    {
        "title": <title>,
        "abstract": <abstract>,
        "url": <url>,
        "imageUrl": <imageUrl>
    }
]
```

Error responses: 

- 400
- 500