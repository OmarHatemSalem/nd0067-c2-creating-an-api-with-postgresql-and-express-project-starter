# Project 2: Store Backend API

## Short Description
This project implements a backend for a store that houses information for users, products and orders. It uses the following technologies:
- NodeJS
- Tyepscript
- PostgreSQL
- Express
- Jasmine

## Running the Project
You must first clone the GitHub repo and then do the following steps:
1. Run `npm install .` or `yarn` for all dependencies to be installed
2. Create a Postgres Database:
    1. Connect to the Postgres console
    2. Run the following command `CREATE USER shopping_user WITH PASSWORD 'password123';`
    3. Create the Databases `shopping` and `shopping_test`
    4. Connect to both databases and `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;` 
3. Add the following `.env` file:
<pre><code>
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=shopping
POSTGRES_TEST_DB=shopping_test
POSTGRES_USER=shopping_user
POSTGRES_PASSWORD=password123
ENV=dev
BCRYPT_PASSWORD=speak-friend-and-enter
SALT_ROUNDS=10
TOKEN_SECRET=eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3Mjg0NzYxNywiaWF0IjoxNjcyODQ3NjE3fQ.5fR4ht_kHQdC_kaUfe7YZTgm72xaaWqlrBNlZJz_HSo
</code></pre>


4. Run one Migration using `db-migrate`
5. Run the server using `yarn watch`
6. Build Production Server using `npm run build`
7. Test using `npm run test`

## Ports and Endpoints
The server is on the port `localhost://3000` and the database is on `5432`. The endpoints are discussed in the `REQUIREMENTS.md` file.