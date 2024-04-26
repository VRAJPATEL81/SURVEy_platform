# Survey Platform

## Purpose:

  The purpose of this website is to provide a convenient and efficient platform for administrators to create customer surveys,     collect valuable feedback, and facilitate the generation of online reviews. By offering a user-friendly interface and essential   features such as authentication, input validation, and anti-bot measures, the website aims to streamline the process of survey    creation and response management. Through this platform, administrators can gain valuable insights from customers without 
 requiring them to create an account, enabling a broader participation base.

## Functionality / features:

User Authentication:
  Staff can create and manage their accounts through a secure login system.
  User authentication ensures only authorized individuals can access survey creation and response management features.
  Validation checks to ensure the accuracy and integrity of user inputs, such as appropriate password length, "@" in email and 
  unique usernames.

Survey Creation Interface:
  User-friendly interface for admins to create surveys, including options to add multiple-choice questions, open-ended questions,   and rating scales.
  
Survey Response Interface:
  Interface for survey respondents to easily complete surveys without the need for an account.
  Clear instructions and user-friendly design to enhance the respondent experience.
  Intuitive and visually appealing interface design to enhance usability and user satisfaction.

Database Storage:
  A database to store surveys and survey responses securely.
  Efficient data management to ensure the integrity and availability of survey data for analysis.

View Survey Responses:
  Admins can access a dashboard or interface to view and analyze survey responses.
  Ability to filter, sort, and export survey responses for further analysis.

##  Target Audience:

  The survey site caters to two main groups: staff members and survey respondents. Staff members, who primarily utilize the       
  platform, are responsible for creating and managing surveys on behalf of businesses or organizations. They possess a reasonable 
  level of technical proficiency and work towards gathering customer feedback to gain valuable insights for enhancing products, 
  services, or business operations. These individuals, such as managers, customer experience professionals, and marketing teams, 
  aim to improve customer satisfaction, reputation, and online presence within their respective business/organizational contexts.

  On the other hand, survey respondents consist of customers or end-users who provide feedback through the surveys. They 
  represent a diverse range of demographics and willingly share their opinions and experiences regarding the products, services, 
  or interactions they have encountered. The platform ensures a user-friendly experience for survey respondents, allowing them to 
  conveniently complete surveys without the need for creating an account.

## Tech stack:

  The survey site intends to utilize the MERN (MongoDB, Express.js, React.js, Node.js) stack as the foundation of its technology 
  stack. This stack combines popular and robust technologies to create a full-stack web application with seamless integration 
  between the front-end and back-end. React.js will serve as the front-end framework, offering a component-based approach for 
  building interactive user interfaces. Dependencies such as react-dom-router and Bootstrap can be leveraged to enhance 
  navigation and provide a responsive and visually appealing design. For testing purposes, Jest can be employed as a testing 
  framework.

  On the back-end, Node.js and Express.js will power the server-side development, allowing for efficient and scalable handling of 
  HTTP requests and responses. Security measures can be implemented using Express Helmet, while CORS ensures proper handling of 
  cross-origin resource sharing. For authentication and authorization, dependencies like JSON Web Token (jsonwebtoken) and bcrypt 
  can be utilized to securely manage user authentication and password hashing. To interact with the MongoDB database, Mongoose 
  provides an elegant and user-friendly way to define data models and perform database operations

# Interface

[1]DASHBOARD
![image](https://github.com/VRAJPATEL81/SURVEy_platform/assets/121683448/68586946-f250-4413-bb5b-7fddcd5edb19)

[2]SURVEY 
![image](https://github.com/VRAJPATEL81/SURVEy_platform/assets/121683448/e38b4ac8-a1fa-4309-8298-32b1bdef9f39)

[3]MAIN
![image](https://github.com/VRAJPATEL81/SURVEy_platform/assets/121683448/3c728fb3-561d-4178-94e4-59c33271febe)


#### Start Development server

npm start      --> frontend server
node server.js --> backend server

#### Language Used

[1] JAVASCRIPT
[2] HTML
[3] MATERIALIZED CSS



