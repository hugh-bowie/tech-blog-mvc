const { Blog } = require("../models");

const blogData = [
    {
        id: '1',
        blog_title: "TikTok will let creators add mini apps to videos",
        blog_content: 'TikTok is announcing a new feature that will let users embed mini apps, called Jumps, into their videos. For example, if someone is making a cooking video, they could embed a link to the recipe app Whisk, which would allow viewers to pull up a recipe sheet inside of TikTok with the tap of a button. The feature is currently being tested, with only a select group of creators having the ability to embed a Jump into their videos, but TikTok says it will be rolling out the feature after more testing.',
        user_id: '1',
    },
    {
        id: '2',
        blog_title: "Twitch bans two top creators in struggle with sexually suggestive streams",
        blog_content: 'Twitch is once again struggling with how to handle sexually suggestive streams from some of the most popular women on its platform. Over the weekend, the service banned two top female streamers — Amouranth and Indiefoxx — who had been broadcasting ASMR streams from their beds. Both streams involved the creators licking a microphone while wearing what appeared to be the TikTok-famous leggings known for making your butt look great. It’s just the latest instance of Twitch making itself the arbiter of what counts as too sexy for its audience and advertisers.',
        user_id: '1',
    },

    {
        id: '3',
        blog_title: "The best Prime Day 2021 Apple deals",
        blog_content: 'Amazon Prime Day is an event — understandably — dedicated to all things Amazon, with substantial discounts on a range of Echo, Fire TV, and Kindle devices, as well as a time-sensitive smorgasbord of deals from both well- and little-known manufacturers. Apple is one of them, and while the company still charges a premium, Prime Day 2021 is a chance to save on an Apple Watch, a new MacBook, or a pair of AirPods, among other products.',
        user_id: '1',
    },
    {
        id: '4',
        blog_title: "How to activate and use Google Chat",
        blog_content: "Real-time collaborative chat, as exemplified by apps such as Slack, has become a common way to communicate between colleagues and friends, especially since last year when so many of us transitioned to working from home. Google has apparently taken note of this and is pitting itself against Slack by taking two of the features from its corporate Workplace app suite — Chat and Rooms — and integrating them into its standard Gmail app.",
        user_id: '1',
    },
];

const seedDataBlog = () => Blog.bulkCreate(blogData);
module.exports = seedDataBlog;