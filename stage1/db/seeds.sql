USE employees;

INSERT INTO department
  (name)

  VALUES 
  ('Sales'),
  ('Human Recources'),
  ('Warehouse'),
  ('Legal');



  INSERT INTO role
          (title, salary, department_id)
  VALUES
    ('Senior Developer', 100000, 1),
    ('HR Business partner', 200000, 2),
    ('Operations Manager', 110000, 3),
    ('Lawyer', 90000, 4);

    INSERT INTO employees
      (first_name, last_name, role_id)

      VALUES
        ('Monkey D.', 'Luffy', 1),
        ('Roanoa', 'Zoro', 2),
        ('Sanji', 'Vinsmoke', 3),
        ('Portgouse D.', 'Ace', 4);