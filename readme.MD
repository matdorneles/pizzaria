# Pizzaria Project

This was a project based on an udemy course by Matheus Fraga, you can check this amazing teacher on this [link](https://www.udemy.com/course/dev-fullstack/). This is my first application "readme", feel free to give me any feedback.

So far this project consists in an API to handle a restaurant application, where you can get your order at the table, send to the kitchen and check if it is ready. This information and be exchanged between devices with access to the internet, most likely cellphones or computers.

You can register users, categories, products, and orders with items.

# Information

 - Written in Typescript and Node.JS v16.16.0;
 - Express to handle HTTP requests and responses;
 - Prisma to handle Database (PostgreSQL) connection and migrations
 - CORS to allow connections;
 - Jsonwebtoken to generate JWT;
 - Bcryptjs to handle encryption;
 - Dotenv to read environment files;
 - Multer to handle image uploading;

# Endpoints

Following you can check how to work with the back-end using our endpoints:

*P.S: After login, a JWT token will be generated and will need to be informed as a Bearer Token in order to access the following routes, this is needed for system security so only registered and logged users can use the application.*

 - USER ROUTES

**POST** `/users` - Create a new user using JSON and sending a `name(string), email(string) and password(string)`.

**LOGIN** `/session` - Login a user using JSON and sending an `email(string) and password(string)`.

**GET** `/me` - Check your user information after login.


- CATEGORY ROUTES

**POST** `/category` - Create a new category with JSON sending a `name(string)`. *This is necessary because you will need it's ID to create products and items,* i.e Pizzas and Drinks.

**GET** `/category` - Pull all previously registered categories.


- PRODUCT ROUTES

**POST** `/product` - Create a new product by sending a Multipart with a `name(string), price(string), description(string), file(image) and a category_id(string)`.

**GET** `/category/product` - Pull a previously registered category and all it's products by sending a `category_id(string)`.


- ORDER ROUTES

**POST** `/order` - Create a new order with JSON sending a `table(int4)`.

**POST** `/order/item` - Add a new item to an order with JSON sending an `order_id(string), product_id(string), amount(int4)`.

**DELETE** `/order/item` - Delete an existing item by informing it's `item_id(string)` via query params.

**DELETE** `/order` - Delete an existing order by informing it's `order_id(string)` via query params.

**PUT** `/order/send` - Send an order to the "kitchen" by informing it's `order_id(string)` via JSON.

**PUT** `/order/finish` - Finish an order by informing it's `order_id(string)` via JSON.

**GET** `/order` - List all send but not finished orders.

**POST** `/order/detail` - Detail an order's items that's been sent by informing it's `order_id(string)` via query params.
