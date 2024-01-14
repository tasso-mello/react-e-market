// config.js
const config = {
    development: {
      baseUrl: "https://localhost:7180/",
    },
    production: {
      baseUrl: "https://sua-api-prod.com/",
    },
  };
  
  export default process.env.NODE_ENV === "production" ? config.production : config.development;
  