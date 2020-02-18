# Wishlist API :)

This api has as premise to register new customers and products in a wishlist

### Prerequisites

node 12   
npm 6

### Installing

npm i   
npm start

### Using

(i'm posting a postman collection to you import)  
[click here](./magalu.postman_collection.json)  

GET /ping
health

POST /login
expects in body: {
    "username": "magalu@sucesso.com",
    "password": "vamosla"
}
**returns a token that expires in 2h**

POST /client    
expects in body: clientEmail, clientName    
**needs authorization header with token**

GET /client    
expects in query string: clientEmail    
**needs authorization header with token**

PUT /client    
expects in query string: clientEmail    
expects in body: clientNewName    
**needs authorization header with token**

DELETE /client    
expects in query string: clientEmail    
**needs authorization header with token**


POST /wishlist    
expects in query string: clientEmail    
expects in body: productId    
**needs authorization header with token**

GET /wishlist    
expects in body: clientEmail    
**needs authorization header with token**

DELETE /wishlist    
expects in query string: clientEmail    
expects in body: productId    
**needs authorization header with token**

## Author

* **Raul Esteves**    
[github](https://github.com/PurpleBooth)   
[medium](https://medium.com/@raullesteves)    
[linkedin](https://www.linkedin.com/in/raul-esteves-677107160/)    

## Obs

I would love to dockerize the application and have a little extra time for unit tests and better documentation, using something like the Open Api specification, but because I was traveling I didn't have time :(    
However, it was really fun and I hope you like it :D
