CREATE TABLE product_category
(
    id serial primary key,
    name varchar(200) unique,
    description varchar(400)
);


CREATE TABLE products
(
    id serial primary key,
    category_id integer not null,
    name varchar(200) not null,
    description text,
    price integer not null,
    imageUrl varchar(1000),
    constraint category_id_fk FOREIGN KEY (category_id) REFERENCES product_category(id)
);


insert into product_category(name,description) values('non veg','These non veg foods');
insert into product_category(name,description) values('fast food','These are china fast food');

CREATE USER inventoryservice WITH PASSWORD 'test123';
create schema inventoryservice AUTHORIZATION inventoryservice;
GRANT ALL ON ALL TABLES IN SCHEMA inventoryservice TO inventoryservice;
GRANT ALL ON ALL SEQUENCES IN SCHEMA inventoryservice TO inventoryservice;