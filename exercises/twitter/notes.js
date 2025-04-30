// *High Level Notes*
// there is no right anwser
// focus is usually on the data model
// dont mention technologies
// draw stuff - core user interface
// talk a lot

//A. identify two core features
//B. possible implementations
//C. identify and adress difficulties
//D. solutions for scaling


// What does a tweet look like in the DB?
// How to make the hashtags and mentions system?
// How to implement retweets?
// How to show interesting tweets at top of feed?


// User
//  |
//  v
// Server -> Memory Store
//  |
//  v
// Database

// Scaling for Users
// Caching
// Deployment Options/Architecture

// *Horizontal Scaling*
//         User
//          |
//          v
//    Load Balancer
//    |      |     |
//    v      v     v 
// Server Server Server
//      |   |    |
//      v   v    v
//       Database