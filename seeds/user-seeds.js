const { User } = require("../models");

const userData = [
    {
        id: 1,
        username: 'samsungman33',
        email: 'samsung@gmail.com',
        password: 'Samsung1!'

    },
    {
        id: 2,
        username: 'Rainman',
        email: 'rainmain@gmail.com',
        password: 'Rainman1!'

    },

    {
        id: 3,
        username: 'zeroCool',
        email: 'zerocool@gmail.com',
        password: 'Zerocool1!'

    },
    {
        id: 4,
        username: 'AcidBurn',
        email: 'acidburn@gmail.com',
        password: 'Acidburn1!'

    }
];

const seedDataUser = () => User.bulkCreate(userData);
module.exports = seedDataUser;