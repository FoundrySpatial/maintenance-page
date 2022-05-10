# Maintenance page

A simple container you can run that will serve a message with a 503 "Service Unavailable" status.

> **Scheduled Maintenance**
>
> This site is temporarily unavailable while we perform upgrades and maintenance.

Run the container on port 80:

```bash
docker run --init --rm -p:80:3000 maintenance-page
```

Run the container on port 80, with an additional message:

```bash
docker run --init --rm -e extraText='Contact foo@example.com for urgent issues.' -p:3000:3000 maintenance-page
```
