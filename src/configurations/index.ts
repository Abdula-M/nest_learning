import * as process from "process";

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_password: process.env.DB_PASSWORD,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPARE_JWT,

});


export interface AppConfig {
    port: number;
}