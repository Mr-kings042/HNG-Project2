module.exports = {
  
  development: {
   url: "postgres://default:QAtLOryU06jh@ep-sparkling-sky-a4nvdbyg.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      
    },
  },
},
  test: {
     url: "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
     url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,

  },
},
}
};
