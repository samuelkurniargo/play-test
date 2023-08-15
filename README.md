## Database Structure
### Collection "videos"
```js
    {
      "_id": ObjectId,
      "title": String,
      "thumbnailUrl": String,
      "embededYoutube": String,
    }
```
### Collection "products"
```js
    {
      "_id": ObjectId,
      "title": String,
      "desc": String,
      "price": Number,
      "link" : String,
      "imageUrl" : String,
      "videoId" : String
    }
```
### Collection "comments"
```js
    {
      "_id": ObjectId,
      "username": String,
      "videoId" : String,
      "comment": String,
      "timestamp": Date
    }
```
## API Structure
```
|- index.js
|- src
    |- models
       |- Video.js
       |- Product.js
       |- Comment.js
    |- repositories
       |- videoRepository.js
       |- productRepository.js
       |- commentRepository.js
    |- services
       |- videosService.js
       |- productsService.js
       |- commentsService.js
   |- controllers
      |- videosController.js
      |- productsController.js
      |- commentsController.js
   |- routers
      |- videosRouter.js
      |- productsRouter.js
      |- commentsRouter.js
```

## List of API Requests and Responses
### **GET /videos**
Returns all videos in the database.

* **URL Params**  
    None
* **Data Params**  
    None
* **Headers**  
    Content-Type: application/json
* **Success Response:**
* **Code:** 200  
    **Content:**
```
[
  {<video_object>},
  {<video_object>},
  {<video_object>}
]
```
### **GET /products/:videoId**
Returns all products associated with the specified video.

* **URL Params**  
    _Required:_ `videoId=[string]`
* **Data Params**  
    None
* **Headers**  
    Content-Type: application/json
* **Success Response:**
* **Code:** 200  
    **Content:**
```
[
  {<product_object>},
  {<product_object>},
  {<product_object>}
]
```
* **Error Response:**
    * **Code:** 500 
        **Content:** `{ error : "Server Error" }` 
        
### **GET /comments/:videoId**
Returns all comments associated with the specified video.

* **URL Params**  
_Required:_ `videoId=[string]`
* **Data Params**  
None
* **Headers**  
Content-Type: application/json
* **Success Response:**
* **Code:** 200  
**Content:**
```
[
    {<comment_object>},
    {<comment_object>},
    {<comment_object>}
]
```
* **Error Response:**
* **Code:** 500 
    **Content:** `{ error : "Server Error" }` 
    
### **POST /comments/:videoId**
Creates a new Comment and returns success message.

* **URL Params**  
_Required:_ `videoId=[string]`
* **Data Params**  
```js
{
    username: string,
    comment: string
}
```
* **Headers**  
Content-Type: application/json
* **Success Response:**
* **Code:** 201  
**Content:**
```json
{
 "message": "Success"
}
```
* **Error Response:**
* **Code:** 500 
**Content:** `{ error : "Server Error" }` 

## Running Locally
#### 1\. Clone the repo and install dependencies
```shell
git clone
cd gengigih-tokped-play
npm i
```
#### 2\. Add the .env file
Make file name `.env` and then fill with variable
```shell
DATABASE_URL = mongodb://127.0.0.1:27017/tokpedPlay
```
#### 3\. Start the server
To run in local mode:
```shell
npm run start
```
