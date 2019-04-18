/* --------------------------- *\
|             U of T            |
|      Coding Bootcamp 2019     |
|          Friend Finder        |
|                               |
|      Template courtesy of:    |
|              Ahmed            |
\* --------------------------- */

// ===============================================================================
// DATA
// Below data will hold all of the friend profile.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendProfile = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Scooby-Doo",
        "photo": "https://media.giphy.com/media/J0jU16H81S13y/giphy.gif",
        "scores": [
            5,
            3,
            1,
            1,
            1,
            1,
            1,
            5,
            5,
            1
        ]
    },
    {
        "name": "Shaggy",
        "photo": "https://media.giphy.com/media/z5ihcoNDTaQ2Q/giphy.gif",
        "scores": [
            4,
            4,
            1,
            1,
            1,
            1,
            1,
            5,
            2,
            1
        ]
    },
    {
        "name": "Velma",
        "photo": "https://media.giphy.com/media/l4pTibO1cY4d5aeyI/giphy-downsized-large.gif",
        "scores": [
            2,
            1,
            1,
            5,
            5,
            1,
            3,
            1,
            1,
            4
        ]
    },
    {
        "name": "Daphne",
        "photo": "https://media.giphy.com/media/l4pTibO1cY4d5aeyI/giphy-downsized-large.gif",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            5,
            1,
            1,
            3,
            1
        ]
    },
    {
        "name": "Fred",
        "photo": "https://media.giphy.com/media/R6NM7iESjnXdS/giphy.gif",
        "scores": [
            1,
            1,
            5,
            1,
            1,
            1,
            5,
            1,
            1,
            1
        ]
    },
    {
        "name": "Scrappy-Doo",
        "photo": "https://media.giphy.com/media/1BdrkIeClrTbKablFf/giphy.gif",
        "scores": [
            1,
            5,
            1,
            1,
            1,
            1,
            4,
            1,
            1,
            5
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendProfile;
