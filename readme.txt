//  npm install --save-dev webpack
// npm install --save-dev webpack-cli/

/// create babel for react 
https://medium.com/@ns-tech-learn/how-to-install-babel-and-config-in-react-js-project-39c953527560
npm install --save -dev  @babel/core @babel/preset-env @babel/preset-react bable-loader

create .babelrc and paste its preset

// npm install react 
// npm install react-dom

//https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9

//for css and style loader 
 npm install css-loader style-loader

 // install redux-toolkit

 // to connect with react and redux install npm install react-redux


 // step to integration ReduxToolKitQuery  with React ;

 1. First install redux-toolkit
 2. import createApi and fetchBaseQuery from "import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";" make sure  you are import with right full path . becouse error arise if you will not fetch with proper path

3. read this doc to setUp Api reducere https://redux-toolkit.js.org/tutorials/rtk-query
4. create store and add all reducere with configure store and add middleware 
5. Import Provide from react-redux and pass store into it
