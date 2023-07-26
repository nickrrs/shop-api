import dotenv from "dotenv";

export default {
    environment: process.env.ENVIRONMENT,
    port: process.env.PORT,
    databaseHost: process.env.DATABASE_HOST,
    databaseUser: process.env.DATABASE_USER,
    databasePass: process.env.DATABASE_PASS
}