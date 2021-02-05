# NBA APP

## URL
/user

/player

/news

/livescore

---
## METHODS

<b><u>POST /user/register</u></b>

Request Body:
* full_name
* email
* password

Success Response (201)
```
{
    "msg": "Register success",
    "id": 5,
    "full_name": "tes1234",
    "email": "ando@mail.com"
}
```
Error responses:
* 400
* 500

---
<b><u>POST /user/login</b></u>

Request Body:
* email
* password

Success Response (200)
```
{
  "access_token": "<token>"
}
```
Error responses:
* 400
* 404
* 500

---
<b><u>GET /news</u></b>

Request Header:
* access_token

Success Response (200)
```
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
* 400
* 500

---
<b><u>GET /player</u></b>

Request Header:
* access_token

Success Response(200)
```
"data": [
      {
      "id": 14,
      "first_name": "Ike",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Anigbogu",
      "position": "C",
      "team": {
          "id": 12,
          "abbreviation": "IND",
          "city": "Indiana",
          "conference": "East",
          "division": "Central",
          "full_name": "Indiana Pacers",
          "name": "Pacers"
      },
    "weight_pounds": null
    },
    {
      "id": 25,
      "first_name": "Ron",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Baker",
      "position": "G",
      "team": {
          "id": 20,
          "abbreviation": "NYK",
          "city": "New York",
          "conference": "East",
          "division": "Atlantic",
          "full_name": "New York Knicks",
          "name": "Knicks"
      },
    "weight_pounds": null
    }
  ],
  "meta": {
    "total_pages": 138,
    "current_page": 1,
    "next_page": 2,
    "per_page": 25,
    "total_count": 3448
  }
}
```
Error response:
* 500

---
<b><u>GET /livescore</u></b>

Request Header:
* access_token

Success Response (200)
```
[
  {
    "matchId": "22757045",
    "homeTeamName": "Zhejiang Lions",
    "awayTeamName": "Guangzhou Loong Lions",
    "costTime": "",
    "homeScore": 104,
    "homeFastScore": 0,
    "homeInsideScore": 0,
    "homeLeadingScore": 0,
    "homeTotalMiss": 9,
    "awayScore": 89,
    "awayFastScore": 0,
    "awayInsideScore": 0,
    "awayLeadingScore": 0,
    "awayTotalMiss": 16,
    "homePlayers": [...]
  },
  ...
]
```
Error responses:
* 400


