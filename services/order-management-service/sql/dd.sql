CREATE TABLE order_status
(
    id serial primary key,
    name varchar(200) not null unique,
    description varchar(500)
);

CREATE TABLE orders
(
    id serial primary key,
    create_date timestamp,
    status_id integer not null,
    amount float not null,
    constraint status_id_ref FOREIGN KEY (status_id) references order_status(id)
);

CREATE TABLE user_orders
(
    user_id integer not null,
    order_id integer not null,
    constraint user_id_fk FOREIGN KEY (user_id) REFERENCES users(id),
    constraint order_id_fk FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE TABLE order_line
(
    id serial primary key,
    order_id integer not null,
    product_id integer not null,
    quantity integer not null,
    constraint order_id_fk FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    constraint product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE NO ACTION
);