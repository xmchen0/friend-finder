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
    var newFriend = req.body;

    // Calculate total difference

    friendProfile.push(newFriend);
    res.json(match);
    console.log(match);
  });

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
  
  */

  // The modal should display both the name and picture of the closest match.

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendProfile.length = 0;

    res.json({ ok: true });
  });
};
