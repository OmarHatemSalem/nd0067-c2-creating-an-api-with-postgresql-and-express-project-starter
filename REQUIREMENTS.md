# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show (args: product id) : [GET]
- Create (args: Product)[token required] : [POST]
- Update (args: product id)[token required]: [PUT]
- Delete (args: product id)[token required]: [DELETE]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show (args: id)[token required] : [GET]
- Create (args: User)[token required] : [POST]
- Update (args: id)[token required] : [PUT]
- Delete (args: id)[token required] : [DELETE]

#### Orders
- Current Order by user (args: user id)[token required] : [GET]
- Create Order by user (args: user id)[token required] : [POST]
- Delete Order by user (args: user id)[token required] : [DELETE]
- Update Order by user (args: user id)[token required] : [PUT]

- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id : VARCHAR
- name : VARCHAR
- price : number
- [OPTIONAL] category

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

