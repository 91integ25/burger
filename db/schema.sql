CREATE DATABASE burger_db;
use burger_db;

CREATE TABLE burgers(
id int auto_increment not null,
burger_name varchar (30) null,
devoured boolean default false,
date timestamp not null,
primary key(id)
);
