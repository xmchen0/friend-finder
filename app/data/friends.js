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
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
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
        "name": "Mr Bean",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        "name": "Mr Potato",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendProfile;
