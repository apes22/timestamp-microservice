# Timestamp Microservice

This service accepts a string as a parameter and will check whether it is either a human readable date or a Unix timestamp. If it is, it will return both the Unix timestamp and the natural language form of that date as a JSON object. If it is neither, it returns 'null' for those properties. 

You can test it at [https://rust-mall.glitch.me/](https://rust-mall.glitch.me/)

A Full Stack Javascript application using NodeJS and ExpressJS.
An API Project for FreeCodeCamp.

## Example Usage

You can access the API directly through a browser or through a get ajax request.

```
https://rust-mall.glitch.me/December 15, 2015
```
```
https://rust-mall.glitch.me/1450137600
```

## Example Output

```javascript
{ 
  "unix": 1450137600, 
  "natural": "December 15, 2015" 
}
```

## To Run Project Locally
1. Fork this repo
2. Clone the fork
3. $ npm install
4. $ node app.js
5. Visit http://localhost:3000/



