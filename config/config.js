require("dotenv").config();

const dev = {
    app:{
        port:process.env.PORT || 2700,
    },
    db:{
        url: process.env.DB_URL || "mongobd://localhost:3000/userDemoDB"
    },
};

module.exports = dev;
