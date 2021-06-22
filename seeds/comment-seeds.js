const { Comment } = require("../models");

const commentData = [
    {
        id: "12",
        comment: "have you got a 256 sha IQ, brilliant job",
        user_id: "121",
        blog_id: "121"
    },
    {
        id: "12",
        comment: "Bitcoin to the moon",
        user_id: "121",
        blog_id: "121"
    },

    {
        id: "12",
        comment: "thats pretty neat",
        user_id: "121",
        blog_id: "121"
    },
    {
        id: "12",
        comment: "i heard you sdfb! ",
        user_id: "121",
        blog_id: "121"
    }
];

const seedDataComment = () => Comment.bulkCreate(commentData);
module.exports = seedDataComment;