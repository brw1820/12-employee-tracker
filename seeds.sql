INSERT INTO departments (name) VALUES ('Human Resources');
INSERT INTO departments (name) VALUES ('IT');
INSERT INTO departments (name) VALUES ('Administration');
INSERT INTO departments (name) VALUES ('Software Development');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Communications');

INSERT INTO roles (title, salary, department_id) VALUES ('HR Leader', 100000.00, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Administrative Manager', 66000,1);
INSERT INTO roles (title, salary, department_id) VALUES ('Assistant HR Manager', 75000,1);
INSERT INTO roles (title, salary, department_id) VALUES ('Chief People Officer', 50000,1);

INSERT INTO roles (title, salary, department_id) VALUES ('Data Analyst', 40000,2);
INSERT INTO roles (title, salary, department_id) VALUES ('System Administrator', 80000,2);
INSERT INTO roles (title, salary, department_id) VALUES ('Computer Technician', 50000,2);
INSERT INTO roles (title, salary, department_id) VALUES ('Network Administrator', 55000,2);

INSERT INTO roles (title, salary, department_id) VALUES ('Head of Administration', 150000,3);
INSERT INTO roles (title, salary, department_id) VALUES ('Chief Business Officer', 880000,3);
INSERT INTO roles (title, salary, department_id) VALUES ('VP of Administration', 50000,3);
INSERT INTO roles (title, salary, department_id) VALUES ('Administrative Director', 100000,3);

INSERT INTO roles (title, salary, department_id) VALUES ('Web Developer', 100000,4);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 53000,4);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Developer', 78000,4);
INSERT INTO roles (title, salary, department_id) VALUES ('Front End Developer', 66000,4);

INSERT INTO roles (title, salary, department_id) VALUES ('Brand Ambassador', 80000,5);
INSERT INTO roles (title, salary, department_id) VALUES ('Copywriter', 58000,5);
INSERT INTO roles (title, salary, department_id) VALUES ('Social Media Manager', 75000,5);
INSERT INTO roles (title, salary, department_id) VALUES ('Marketing Manager', 52000,5);

INSERT INTO roles (title, salary, department_id) VALUES ('Sales Associate', 30000,6);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Representative', 50000,6);
INSERT INTO roles (title, salary, department_id) VALUES ('Account Executive', 75000,6);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Manager', 900000,6);

INSERT INTO roles (title, salary, department_id) VALUES ('Chief Communications Office', 150000,7);
INSERT INTO roles (title, salary, department_id) VALUES ('Vice President Communications', 990000,7);
INSERT INTO roles (title, salary, department_id) VALUES ('PR & Events Manager', 57500,7);
INSERT INTO roles (title, salary, department_id) VALUES ('Publicist', 45000,7);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Brian','Warner',2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Joseph','Smith',2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dwight','Huggins',2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Gregory','Monroe',2,1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jimmy','Kazadi',3,2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Stevie','Reiser',3,2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael','Brichant',3,2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Carol','Clyne',3,2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Brian','Bouchard',4,3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Arun','Gupta',4,3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Arianna','Gutierrez',4,3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emilia','Hermann',4,3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mary','Dory',5,4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Matt','Berson',5,4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Zachary','Parges',5,4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Luanne','Barco',5,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Nicolle','Mun',6,5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jayne','Pettry',6,5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Joseph','Levi',6,5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Leslie','Hollis',6,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Terina','Lanham',7,6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dean','Guerette',7,6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Zora','Caffey',7,6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ronald','Golden',7,6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Retta','Deere',8,7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('David','Johnson',8,7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Howard','Hugh',8,7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Meredith','Moodie',8,7);