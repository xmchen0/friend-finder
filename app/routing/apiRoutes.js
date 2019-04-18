/* --------------------------- *\
|             U of T            |
|      Coding Bootcamp 2019     |
|          Friend Finder        |
|                               |
|      Template courtesy of:    |
|              Ahmed            |
\* --------------------------- */

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendProfile = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendProfile);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    console.log(req.body);
    //Algorithm by Ed:
    // [1] Write a loop that loops through all the friends in the array
    // [2] Get the current friend to 'compare'
    // [3] Read the score values of the current friend (Storing these values in a temporary array)
    // [4] Retrieve the array that stores my current scores (Some marker of indicator that identifies who you are, stored as object)
    // totalDifference += Math.abs(parseInt(currentUserScore - parseInt(currentFriendScore));
    // [5] If the sum of the differences is less than the differences of the current 'best matched' friend, -> replace that friend with your new 'compatible' friend and their score.
    // [6] Once you are done looping through all your friends, use the variable that stores the closest friend and their score
    // [7] Get that friend's object information
    // [8] In the response send that data back (in JSON format)

    // Object to hold the "best match"
    var bestMatch = {
      name: '',
      photo: '',
      friendDifference: 1000
    };

    // Take the result of the user's survey POST and parse it
    var userData = req.body;
    var userScores = userData.scores;

    // [1]
    for (var i = 0; i < friendProfile.length; i++) {
      
      // [2]
      var totalDifference = 0;
      console.log(friendProfile[i].name);

      // [3]
      for (var j = 0; j < friendProfile[i].scores[j]; j++) {
        
        totalDifference = 0;
        
        // [4]
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendProfile[i].scores[j]));


        // [5]
        if (totalDifference <= bestMatch.friendDifference) {

          // [6]
          bestMatch.name = friendProfile[i].name;
          bestMatch.photo = friendProfile[i].photo;
          bestMatch.friendDifference = totalDifference;

        }
      }
    }

    // [7]
    friendProfile.push(userData);

    // [8]
    res.json(bestMatch);

    console.log(bestMatch);

  });

};

/* ------------- *\
|* LOGIC ROADMAP *|
\* ------------- */

/*

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.

Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.

*/