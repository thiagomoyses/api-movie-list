import dotenv from "dotenv";

class Configs {

    constructor(){
        dotenv.config();
    }

    jwtParams(): {JWT_SECRET: string, JWT_EXPIRATION_TIME: string, REFRESH_TOKEN_SECRET: string, REFRESH_TOKEN_EXPIRATION_TIME: string}{

        return {
            JWT_SECRET: process.env.JWT_SECRET || "",
            JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME || "",
            REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "",
            REFRESH_TOKEN_EXPIRATION_TIME: process.env.REFRESH_TOKEN_EXPIRATION_TIME || ""
        }
    }

}


export default Configs;