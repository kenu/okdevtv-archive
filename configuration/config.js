module.exports = {
    /*
     * This file contains the configurations information of Twitter login app.
     * It consists of Twitter app information, database information.
     */

    facebook_api_key: process.env.FACEBOOK_API_KEY,
    facebook_api_secret: process.env.FACEBOOK_API_SECRET,
    callback_url: "http://localhost:3000/auth/facebook/callback",
    use_database: false,
    host: "localhost",
    username: "root",
    password: "",
    database: ""
};
