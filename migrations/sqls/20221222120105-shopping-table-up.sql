/* Replace with your SQL commands */
/*#### Product
-  id : VARCHAR
- name : VARCHAR
- price : number
- [OPTIONAL] category*/

/*
#### User
- id : VARCHAR Primary Key
- firstName : VARCHAR
- lastName : VARCHAR
- password : VARCHAR

#### Orders
- id : VARCHAR Primary Key
- id of each product in the order : VARCHAR
- quantity of each product in the order : NUMBER
- user_id : VARCHAR Foreign Key to Users
- status of order (active or complete) : BOOLEAN
*/
CREATE TABLE products (id SERIAL PRIMARY KEY, _name VARCHAR(100), price FLOAT);
CREATE TABLE users (id SERIAL PRIMARY KEY, firstName VARCHAR(100), lastName VARCHAR(100), _password VARCHAR(100));
CREATE TABLE orders (id SERIAL PRIMARY KEY, userID INTEGER FOREIGN KEY REFERENCES users(id), _status BOOLEAN);
CREATE TABLE orderProdcuts (id SERIAL PRIMARY KEY, quantity INTEGER, 
                            productID INTEGER FOREIGN KEY REFERENCES products(id),
                            orderID INTEGER FOREIGN KEY REFERENCES orders(id));