
INSERT INTO department (name)
VALUES 
      ("Human Resources"),
      ("Shipping"),
      ("Loss Prevention"),
      ("Grocery"),
      ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES 
      ("Manager", 110000, 1),
      ("Manager", 81000, 2),
      ("Manager", 78000, 3),
      ("Manager", 72000, 4),
      ("Manager", 60000, 5),
      ("Human Recources", 60000, 1),
      ("Lawyer", 100000, 1),
      ("Forklift Op", 31000, 2),
      ("Driver", 33000, 2),
      ("Security", 46000, 3),
      ("Night Security", 36000, 3),
      ("Stocker", 22000, 4),
      ("Produce", 30000, 4),
      ("Frozen Stocker", 31000, 4),
      ("Cashier", 23000, 5),
      ("Head Cashier", 39000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ("Monkey D.","Luffy", 1, null),
        ("Roanoa", "Zoro", 2, null),
        ("Portgaz D.", "Ace", 3, null),
        ("Sanji", "Vinsmoke", 4, null),
        ("Red Hair", "Shanks", 5, null),
        ("Nami", "Navigator", 6, 1),
        ("Nico", "Robin", 7, 1),
        ("Ussop", "Sniper", 8, 2),
        ("Franky", "Shipwright", 8, 2),
        ("Tony Tony", "Chopper", 9, 2),
        ("Trafagar", "Law", 10, 3),
        ("Donquixote", "DoFlamingo", 10, 3),
        ("Monkey D.", "Garp", 11, 3),
        ("Sabo", "Duno", 11, 3),
        ("Big", "Mom", 12, 4),
        ("Black", "Beard", 12, 4),
        ("White", "Beard", 13, 4),
        ("Buggy", "Clown", 13, 4),
        ("Marco", "White", 14, 4),
        ("Kozuki", "Momonosuke", 14, 4),
        ("Gol D.", "Roger", 15, 5),
        ("Hody", "Jones", 15, 5),
        ("Fish Man", "Jinbei", 16, 5);
