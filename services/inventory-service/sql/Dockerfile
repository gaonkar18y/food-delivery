FROM postgres:15.1-alpine

LABEL author="YogeshG"
LABEL description="Postgres Image for food-delivery"
LABEL version="1.0"

ENV POSTGRES_DB="ecomexample"
ENV POSTGRES_USER="inventoryservice"
ENV POSTGRES_PASSWORD="test13"

COPY *.sql /docker-entrypoint-initdb.d/