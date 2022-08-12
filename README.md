# Diazar Certifications Backend

API for use with [Diazar Certifications Frontend]("https://github.com/daveku/diazar-certifications-frontend.git"), listen in port 5555 without HTTPS.

## Requirements:

- Docker
- Docker Compose

## Instructions

1. Clone or download the repository
2. In the `/` directory create file `.env` with the following content:

```
NODE_ENV = development
MONGO_URI = mongodb://mongodb/certificate
HOSTNAME = localhost
```

3. Run `docker compose build`
4. Run `docker compose up -d`
