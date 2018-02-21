# API documentation

## Register user
Add user into game. Get auth credential as response.
* URL: `/user`
* Method: `POST`
* URL Params: None
* Data Params:
  ```
  {
    name: "Mary"
  }
  ```
* Success Response:
  * Code: 200 <br />
    Content:
    ```
    {
      id: 1,
      auth: "86fb269d190d2c85f6e0468ceca42a20"
    }
    ```
* Error Response:
  * Code: 422 UNPROCESSABLE ENTRY <br />
    Content:
    ```
    {
      error: "Username invalid."
    }
    ```

## Move user up
Add user into game. Get auth credential as response.
* URL: `/user/{id}/up`
* Method: `POST`
* URL Params: None
* Data Params:
  ```
  {
    auth: "86fb269d190d2c85f6e0468ceca42a20"
  }
  ```
* Success Response:
  * Code: 200 <br />
    Content: None
* Error Response:
  * Code: 422 UNPROCESSABLE ENTRY <br />
    Content:
    ```
    {
      error: "Wall on way."
    }
    ```
  * Code: 401 UNAUTHORIZED<br />
    Content: None
