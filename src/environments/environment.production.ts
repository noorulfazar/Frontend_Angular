// Path: src/environments/environment.production.ts

export const environment = {
  production: true,
  // since Apache is proxying “/api” for you,
  // you can just leave apiUrl at “/api” (no host/port!)
  apiUrl: '/api'
};


// export const environment = {
//   production: true,
//   // apiUrl: 'http://localhost:8080' // Your Spring Boot backend URL
//   //apiUrl: 'http://192.168.0.101:8080/api'  ---> Apache http server local install and run
//   // apiUrl: 'http://3.109.210.222:8080'    // Apache http server on EC2 instance with public IP
//   // apiUrl: 'http://15.207.228.68:9090'    // docker on EC2 instance with public IP
//   // apiUrl: 'https://curdops.ethicalintelligent.com'
//   apiUrl: ''
// };