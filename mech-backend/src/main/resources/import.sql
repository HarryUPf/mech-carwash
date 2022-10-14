INSERT INTO roles (name) VALUES('ROLE_USER');
INSERT INTO roles (name) VALUES('ROLE_PM');
INSERT INTO roles (name) VALUES('ROLE_ADMIN');

INSERT INTO client (name,surname) VALUES ('Silvia','Yupanqui');
INSERT INTO client (name,surname) VALUES ('Fiorella','Yupanqui');
INSERT INTO client (name,surname) VALUES ('Harry','Yupanqui');

INSERT INTO employee (name,surname) VALUES ('Randall','Boggs');
INSERT INTO employee (name,surname) VALUES ('James','Sullivan');
INSERT INTO employee (name,surname) VALUES ('Mike','Wazowski');

INSERT INTO car (brand,model,plate,client_id) VALUES ('TOYOTA','Corolla','AAA111',1);
INSERT INTO car (brand,model,plate,client_id) VALUES ('HONDA','Civic','BBB222',2);
INSERT INTO car (brand,model,plate,client_id) VALUES ('FORD','Focus','CCC333',3);
INSERT INTO car (brand,model,plate,client_id) VALUES ('BMW','Gran Turismo','DDD444',1);
INSERT INTO car (brand,model,plate,client_id) VALUES ('VOLKSWAGEN','Amarok','EEE555',2);
INSERT INTO car (brand,model,plate,client_id) VALUES ('MAZDA','Sedan','FFF666',3);
INSERT INTO car (brand,model,plate,client_id) VALUES ('TESLA','CyberTruck','GGG777',1);

INSERT INTO product (name,price) VALUES ('PAINT',29.99);
INSERT INTO product (name,price) VALUES ('REPAIR',42);
INSERT INTO product (name,price) VALUES ('ENHANCE',100.5);

INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-04 12:40:11','details','1','1','1');
INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-08 13:50:22','details','2','2','2');
INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-12 14:00:33','details','3','3','3');
INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-16 15:10:44','details','4','1','1');
INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-20 16:20:55','details','5','2','1');
INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-24 17:30:00','details','6','1','3');
INSERT INTO product_order (date,description,car_id,employee_id,product_id) VALUES ('2019-12-30 17:42:00','details','7','1','3');
