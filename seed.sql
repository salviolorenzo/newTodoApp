insert into users
  (name, email, password)
  values
  ('lorenzo', 'lorenzo@mail.com', 'password'),
  ('john', 'john@mail.com', 'password1');

insert into todos
  (name, isCompleted, user_id)
  values
  ('Wash my car', false, 1),
  ('Feed the dog', false, 1),
  ('Find the kids', false, 1),
  ('Get the groceries', true, 2),
  ('Go to the bank', false, 2)