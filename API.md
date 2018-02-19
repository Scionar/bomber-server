# API documentation

## Get board
Returns board status as JSON data.
* **URL**
  /board
* **Method:**
  `GET`
*  **URL Params**
  None
* **Data Params**
  None
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ rows: [{"id":0,"type":"e", reference: ""} ...] }`
* **Error Response:**
  None

## Register user
Add user into game. Get auth credential as response.
* **URL**
  /user
* **Method:**
  `POST`
*  **URL Params**
   None
* **Data Params**
  ```
  {
    name: "Mary"
  }
  ```
* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      id: 1,
      auth: "86fb269d190d2c85f6e0468ceca42a20"
    }
    ```
* **Error Response:**
  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:**
    ```
    {
      error: "Username invalid."
    }
    ```

## Get user
Get user data.
* **URL**
  /user/:id
* **Method:**
  `GET`
*  **URL Params**
  * **Required:**
    * `id=[integer]`<br />
    example /user/1
* **Data Params**
  ```
  {
    name: "Mary"
  }
  ```
* **Success Response:**
  * **Code:** 200 <br />
    **Content:**
    ```
    {
      name: "Mary",
      wins: 3
    }
    ```
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```
    {
      error: "User doesn't exist."
    }
    ```
