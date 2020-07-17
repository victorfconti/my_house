export const DATABASE_CONFIG  = {
  apiKey: process.env.NODE_ENV === "production"?process.env.REACT_APP_APIKEY:'AIzaSyAlkMf4PLe2o7H9ZXQrPraZhytCdb7q-fU', 
  authDomain: process.env.NODE_ENV === "production"?process.env.REACT_APP_AUTHDOMAIN:'web-ufscar-react-app.firebaseapp.com', 
  databaseURL: process.env.NODE_ENV === "production"?process.env.REACT_APP_DATABASEURL:'https://web-ufscar-react-app.firebaseio.com', 
  projectId: process.env.NODE_ENV === "production"?process.env.REACT_APP_PROJECTID:'web-ufscar-react-app', 
  storageBucket: process.env.NODE_ENV === "production"?process.env.REACT_APP_STORAGEBUCKET:'web-ufscar-react-app.appspot.com', 
  messagingSenderId: process.env.NODE_ENV === "production"?process.env.REACT_APP_MESSAGINGSENDERID:'448587840541', 
  appId: process.env.NODE_ENV === "production"?process.env.REACT_APP_APPID:'1:448587840541:web:1f1dfbd3369b0c2a959af4', 
};
