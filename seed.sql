insert into users
  (name, username, email, password)
  values
  ('lorenzo', 'l.salvio', 'lorenzo@mail.com', 'password'),
  ('john', 'j.ohn', 'john@mail.com', 'password1');

insert into todos
  (name, isCompleted, user_id)
  values
  ('Wash my car', false, 1),
  ('Feed the dog', false, 1),
  ('Find the kids', false, 1),
  ('Get the groceries', true, 2),
  ('Go to the bank', false, 2)