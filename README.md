# friend-finder

This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Preview

<a href="http://recordit.co/EZjTnReEdd.gif"><img src="https://media.giphy.com/media/Z9assXod9YOUGja1s5/giphy.gif" border="0"></a>

## Link

https://hello-friend-finder.herokuapp.com/

<hr>

## Getting Started

Download zip file or Git Clone repository will get you a copy of the project up and running on your local machine for development and testing purposes.

## Document Organisation

     FriendFinder
        - .gitignore
        - app
          - data
            - friends.js
          - public
            - home.html
            - survey.html
          - routing
            - apiRoutes.js
            - htmlRoutes.js
        - node_modules
        - package.json
        - server.js

## Algorithm by Edward

    [1] Write a loop that loops through all the friends in the array
    [2] Get the current friend to 'compare'
    [3] Read the score values of the current friend (Storing these values in a temporary array)
    [4] Retrieve the array that stores my current scores (Some marker of indicator that identifies who you are, stored as object) totalDifference += Math.abs(parseInt(currentUserScore - parseInt(currentFriendScore));
    [5] If the sum of the differences is less than the differences of the current 'best matched' friend, -> replace that friend with your new 'compatible' friend and their score.
    [6] Once you are done looping through all your friends, use the variable that stores the closest friend and their score
    [7] Get that friend's object information
    [8] In the response send that data back (in JSON format)

### Built With

* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - Language used
* [Express](https://www.npmjs.com/package/express) - Node.js web application framework
* [Path](https://www.npmjs.com/package/path) - Working with directories and file paths
* [Node.js](https://nodejs.org/en/) - Command-line applications
* [NPM](https://www.npmjs.com/) - JS library management
* [Visual Studio Code](https://code.visualstudio.com/) - Text editor
* [Heroku](https://heroku.com/) - Cloud platform as a service

<hr>

## Author

* **Kathy Chen** - *Friend Finder* - [xmkchen](https://github.com/xmkchen/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xmkchen/friend-finder/blob/master/LICENSE) file for details

## Acknowledgment

* Edward Apostol
* Ahmed
* UofT Coding Bootcamp 2019
