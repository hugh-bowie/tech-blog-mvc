const seedDataUser = require("./user-seeds");
const seedDataComment = require("./comment-seeds");
const seedDataBlog = require("./blog-seeds");

const sequelize = require("../config/connection");

const seedMVC = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("---------DATABASE SYNCED SUCCESSFULLY---------");
        await seedDataUser();
        console.log("---------USER DATA SEEDED---------");
        await seedDataComment();
        console.log("---------COMMENT DATA SEEDED---------");
        await seedDataBlog();
        console.log("---------BLOG DATA SEEDED---------");
    }
    catch (e) {
        console.log('error = ', e);
        process.exit(1);
    }
};
seedMVC();
