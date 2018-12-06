create table users(
  id serial primary key,
  name varchar(50) not null,
  username varchar(50) not null unique,
  email varchar(50) not null unique,
  password varchar(100)
);

create table todos(
  id serial primary key,
  name varchar(100),
  isCompleted boolean,
  user_id integer references users (id) on delete cascade
);