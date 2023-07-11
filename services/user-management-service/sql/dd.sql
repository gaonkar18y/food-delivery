CREATE TABLE users
(
    id serial primary key,
    email varchar(100) not null unique,
    pass varchar(100) not null,
    firstname varchar(100) not null,
    lastname varchar(100)
);


CREATE TABLE address_type
(
    id serial primary key,
    from_time integer not null,
    to_time integer not null
);

CREATE TABLE addresses 
(
    id serial primary key,
    address_type integer not null,
    street varchar(200) not null,
    city varchar(200),
    constraint address_type_fk FOREIGN KEY (address_type) references address_type( id) ON DELETE NO ACTION
);

CREATE TABLE user_address
(
    userid integer not null,
    address_id integer not null,
    is_default boolean,
    constraint userid_fk FOREIGN KEY (userid) references users(id),
    constraint address_id_fk FOREIGN KEY (address_id) references addresses(id)
);

CREATE USER usermanagementservice WITH PASSWORD 'test123';

GRANT ALL ON ALL TABLES IN SCHEMA usermanagementservice TO usermanagementservice;
GRANT ALL ON ALL SEQUENCES IN SCHEMA usermanagementservice TO usermanagementservice;