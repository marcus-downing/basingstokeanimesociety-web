var slot1 = [{"from":"2022-08-16T21:00:00.000Z","name":"Aldnoah.Zero part 2","picture":"aldnoah-zero","rating":15,"date":"2022-08-23T18:00:00.000Z","day":23,"month":"Aug","weekday":"Tuesday"},{"from":"2022-09-27T21:00:00.000Z","name":"Moriarty The Patriot","picture":"moriarty","rating":15,"date":"2022-10-04T18:00:00.000Z","day":4,"month":"Oct","weekday":"Tuesday"}];
var slot2 = [{"from":"2022-05-17T21:00:00.000Z","name":"Dr Stone","picture":"dr-stone","rating":12,"date":"2022-05-24T19:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"},{"from":"2022-09-20T21:00:00.000Z","name":"Beyond The Boundary","picture":"beyond-the-boundary","rating":15,"date":"2022-09-27T19:00:00.000Z","day":27,"month":"Sept","weekday":"Tuesday"},{"from":"2022-11-01T22:00:00.000Z","name":"That Time I Got Reincarnated as a Slime","picture":"tensura","rating":15,"date":"2022-11-08T20:00:00.000Z","day":8,"month":"Nov","weekday":"Tuesday"}];
var slot3 = [{"from":"2022-08-16T21:00:00.000Z","name":"Love, Chunibyou & Other Delusions","picture":"chunibyou","rating":12,"date":"2022-08-23T20:00:00.000Z","day":23,"month":"Aug","weekday":"Tuesday"},{"from":"2022-09-27T21:00:00.000Z","name":"Wave, Listen to Me!","picture":"wave-listen-to-me","rating":12,"date":"2022-10-04T20:00:00.000Z","day":4,"month":"Oct","weekday":"Tuesday"},{"from":"2022-11-08T22:00:00.000Z","name":"My Senpai is Annoying","picture":"senpai-ga-uzai","rating":15,"date":"2022-11-15T21:00:00.000Z","day":15,"month":"Nov","weekday":"Tuesday"}];
// var movies = [];
var comingSoon = [{"from":"2022-09-27T19:00:00.000Z","name":"Beyond The Boundary","picture":"beyond-the-boundary","rating":15,"date":"2022-09-27T19:00:00.000Z","day":27,"month":"Sept","weekday":"Tuesday"},{"from":"2022-10-04T18:00:00.000Z","name":"Moriarty The Patriot","picture":"moriarty","rating":15,"date":"2022-10-04T18:00:00.000Z","day":4,"month":"Oct","weekday":"Tuesday"},{"from":"2022-10-04T20:00:00.000Z","name":"Wave, Listen to Me!","picture":"wave-listen-to-me","rating":12,"date":"2022-10-04T20:00:00.000Z","day":4,"month":"Oct","weekday":"Tuesday"},{"from":"2022-11-08T20:00:00.000Z","name":"That Time I Got Reincarnated as a Slime","picture":"tensura","rating":15,"date":"2022-11-08T20:00:00.000Z","day":8,"month":"Nov","weekday":"Tuesday"},{"from":"2022-11-15T21:00:00.000Z","name":"My Senpai is Annoying","picture":"senpai-ga-uzai","rating":15,"date":"2022-11-15T21:00:00.000Z","day":15,"month":"Nov","weekday":"Tuesday"}];

var events = [{"date":"2022-09-10T00:00:00.000Z","shortDate":"2022-09-10","month":"Sept","day":10,"weekday":"Saturday","class":"social","events":[{"name":"Blobberu's Birthday Bash","date":"2022-09-10T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"5pm","dateLong":"Saturday, 10 September 2022, 5pm","mediumDate":"10 Sept 2022","shortDate":"2022-09-10","day":10,"weekday":"Saturday","shortWeekday":"Sat","month":"Sept","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-09-13T18:00:00.000Z","shortDate":"2022-09-13","month":"Sept","day":13,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-13T18:00:00.000Z","dateLong":"Tuesday, 13 September 2022, 7pm","mediumDate":"13 Sept 2022","shortDate":"2022-09-13","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":13,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-09-17T00:00:00.000Z","shortDate":"2022-09-17","month":"Sept","day":17,"weekday":"Saturday","class":"social","events":[{"name":"16th Anniversary BBQ","date":"2022-09-17T00:00:00.000Z","class":"social","venue":"Swarraton Village Hall, SO24 9TQ","time":"11am","special":true,"dateLong":"Saturday, 17 September 2022, 11am","mediumDate":"17 Sept 2022","shortDate":"2022-09-17","day":17,"weekday":"Saturday","shortWeekday":"Sat","month":"Sept","address":"London Road, Basingstoke RG21 4AE"}],"special":true},{"date":"2022-09-20T18:00:00.000Z","shortDate":"2022-09-20","month":"Sept","day":20,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-20T18:00:00.000Z","dateLong":"Tuesday, 20 September 2022, 7pm","mediumDate":"20 Sept 2022","shortDate":"2022-09-20","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":20,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-09-27T18:00:00.000Z","shortDate":"2022-09-27","month":"Sept","day":27,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-27T18:00:00.000Z","dateLong":"Tuesday, 27 September 2022, 7pm","mediumDate":"27 Sept 2022","shortDate":"2022-09-27","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":27,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-09-27T19:05:00.000Z","dateLong":"Tuesday, 27 September 2022, 8pm","mediumDate":"27 Sept 2022","shortDate":"2022-09-27","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":27,"month":"Sept","prename":"New series","name":"Beyond The Boundary","picture":"beyond-the-boundary","class":"new-series"}],"special":false},{"date":"2022-10-04T18:00:00.000Z","shortDate":"2022-10-04","month":"Oct","day":4,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-04T18:00:00.000Z","dateLong":"Tuesday, 4 October 2022, 7pm","mediumDate":"4 Oct 2022","shortDate":"2022-10-04","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":4,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-10-04T18:05:00.000Z","dateLong":"Tuesday, 4 October 2022, 7pm","mediumDate":"4 Oct 2022","shortDate":"2022-10-04","weekday":"Tuesday","shortWeekday":"","time":"7pm","day":4,"month":"Oct","prename":"New series","name":"Moriarty The Patriot","picture":"moriarty","class":"new-series"},{"date":"2022-10-04T20:05:00.000Z","dateLong":"Tuesday, 4 October 2022, 9pm","mediumDate":"4 Oct 2022","shortDate":"2022-10-04","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":4,"month":"Oct","prename":"New series","name":"Wave, Listen to Me!","picture":"wave-listen-to-me","class":"new-series"}],"special":false},{"date":"2022-10-11T18:00:00.000Z","shortDate":"2022-10-11","month":"Oct","day":11,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-11T18:00:00.000Z","dateLong":"Tuesday, 11 October 2022, 7pm","mediumDate":"11 Oct 2022","shortDate":"2022-10-11","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":11,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-10-15T00:00:00.000Z","shortDate":"2022-10-15","month":"Oct","day":15,"weekday":"Saturday","class":"social","events":[{"name":"Shrink Laureate's Birthday Board Games","date":"2022-10-15T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"1pm","dateLong":"Saturday, 15 October 2022, 1pm","mediumDate":"15 Oct 2022","shortDate":"2022-10-15","day":15,"weekday":"Saturday","shortWeekday":"Sat","month":"Oct","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-10-18T18:00:00.000Z","shortDate":"2022-10-18","month":"Oct","day":18,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-18T18:00:00.000Z","dateLong":"Tuesday, 18 October 2022, 7pm","mediumDate":"18 Oct 2022","shortDate":"2022-10-18","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":18,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-10-25T18:00:00.000Z","shortDate":"2022-10-25","month":"Oct","day":25,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-25T18:00:00.000Z","dateLong":"Tuesday, 25 October 2022, 7pm","mediumDate":"25 Oct 2022","shortDate":"2022-10-25","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":25,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-11-01T19:00:00.000Z","shortDate":"2022-11-01","month":"Nov","day":1,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-01T19:00:00.000Z","dateLong":"Tuesday, 1 November 2022, 7pm","mediumDate":"1 Nov 2022","shortDate":"2022-11-01","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":1,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-11-08T19:00:00.000Z","shortDate":"2022-11-08","month":"Nov","day":8,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-08T19:00:00.000Z","dateLong":"Tuesday, 8 November 2022, 7pm","mediumDate":"8 Nov 2022","shortDate":"2022-11-08","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":8,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-11-08T20:05:00.000Z","dateLong":"Tuesday, 8 November 2022, 8pm","mediumDate":"8 Nov 2022","shortDate":"2022-11-08","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":8,"month":"Nov","prename":"New series","name":"That Time I Got Reincarnated as a Slime","picture":"tensura","class":"new-series"}],"special":false},{"date":"2022-11-10T00:00:00.000Z","shortDate":"2022-11-10","month":"Nov","day":10,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2022-11-10T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 10 November 2022, 6pm","mediumDate":"10 Nov 2022","shortDate":"2022-11-10","day":10,"weekday":"Thursday","shortWeekday":"Thu","month":"Nov","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-11-15T19:00:00.000Z","shortDate":"2022-11-15","month":"Nov","day":15,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-15T19:00:00.000Z","dateLong":"Tuesday, 15 November 2022, 7pm","mediumDate":"15 Nov 2022","shortDate":"2022-11-15","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":15,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-11-15T21:05:00.000Z","dateLong":"Tuesday, 15 November 2022, 9pm","mediumDate":"15 Nov 2022","shortDate":"2022-11-15","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":15,"month":"Nov","prename":"New series","name":"My Senpai is Annoying","picture":"senpai-ga-uzai","class":"new-series"}],"special":false},{"date":"2022-11-22T19:00:00.000Z","shortDate":"2022-11-22","month":"Nov","day":22,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-22T19:00:00.000Z","dateLong":"Tuesday, 22 November 2022, 7pm","mediumDate":"22 Nov 2022","shortDate":"2022-11-22","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":22,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-11-29T19:00:00.000Z","shortDate":"2022-11-29","month":"Nov","day":29,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-29T19:00:00.000Z","dateLong":"Tuesday, 29 November 2022, 7pm","mediumDate":"29 Nov 2022","shortDate":"2022-11-29","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":29,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-06T19:00:00.000Z","shortDate":"2022-12-06","month":"Dec","day":6,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-06T19:00:00.000Z","dateLong":"Tuesday, 6 December 2022, 7pm","mediumDate":"6 Dec 2022","shortDate":"2022-12-06","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":6,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-08T00:00:00.000Z","shortDate":"2022-12-08","month":"Dec","day":8,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2022-12-08T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 8 December 2022, 6pm","mediumDate":"8 Dec 2022","shortDate":"2022-12-08","day":8,"weekday":"Thursday","shortWeekday":"Thu","month":"Dec","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-13T19:00:00.000Z","shortDate":"2022-12-13","month":"Dec","day":13,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-13T19:00:00.000Z","dateLong":"Tuesday, 13 December 2022, 7pm","mediumDate":"13 Dec 2022","shortDate":"2022-12-13","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":13,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-20T19:00:00.000Z","shortDate":"2022-12-20","month":"Dec","day":20,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-20T19:00:00.000Z","dateLong":"Tuesday, 20 December 2022, 7pm","mediumDate":"20 Dec 2022","shortDate":"2022-12-20","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":20,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-27T00:00:00.000Z","shortDate":"2022-12-27","month":"Dec","day":27,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2022-12-27T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 27 December 2022","mediumDate":"27 Dec 2022","shortDate":"2022-12-27","day":27,"weekday":"Tuesday","shortWeekday":"Tue","month":"Dec","special":false,"venue":"","address":""}],"special":false},{"date":"2023-01-03T00:00:00.000Z","shortDate":"2023-01-03","month":"Jan","day":3,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2023-01-03T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 3 January 2023","mediumDate":"3 Jan 2023","shortDate":"2023-01-03","day":3,"weekday":"Tuesday","shortWeekday":"Tue","month":"Jan","special":false,"venue":"","address":""}],"special":false},{"date":"2023-01-10T19:00:00.000Z","shortDate":"2023-01-10","month":"Jan","day":10,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-10T19:00:00.000Z","dateLong":"Tuesday, 10 January 2023, 7pm","mediumDate":"10 Jan 2023","shortDate":"2023-01-10","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":10,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-12T00:00:00.000Z","shortDate":"2023-01-12","month":"Jan","day":12,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-01-12T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 12 January 2023, 6pm","mediumDate":"12 Jan 2023","shortDate":"2023-01-12","day":12,"weekday":"Thursday","shortWeekday":"Thu","month":"Jan","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-17T19:00:00.000Z","shortDate":"2023-01-17","month":"Jan","day":17,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-17T19:00:00.000Z","dateLong":"Tuesday, 17 January 2023, 7pm","mediumDate":"17 Jan 2023","shortDate":"2023-01-17","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":17,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-24T19:00:00.000Z","shortDate":"2023-01-24","month":"Jan","day":24,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-24T19:00:00.000Z","dateLong":"Tuesday, 24 January 2023, 7pm","mediumDate":"24 Jan 2023","shortDate":"2023-01-24","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":24,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-31T19:00:00.000Z","shortDate":"2023-01-31","month":"Jan","day":31,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-31T19:00:00.000Z","dateLong":"Tuesday, 31 January 2023, 7pm","mediumDate":"31 Jan 2023","shortDate":"2023-01-31","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":31,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-07T19:00:00.000Z","shortDate":"2023-02-07","month":"Feb","day":7,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-07T19:00:00.000Z","dateLong":"Tuesday, 7 February 2023, 7pm","mediumDate":"7 Feb 2023","shortDate":"2023-02-07","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":7,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-14T19:00:00.000Z","shortDate":"2023-02-14","month":"Feb","day":14,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-14T19:00:00.000Z","dateLong":"Tuesday, 14 February 2023, 7pm","mediumDate":"14 Feb 2023","shortDate":"2023-02-14","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":14,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-21T19:00:00.000Z","shortDate":"2023-02-21","month":"Feb","day":21,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-21T19:00:00.000Z","dateLong":"Tuesday, 21 February 2023, 7pm","mediumDate":"21 Feb 2023","shortDate":"2023-02-21","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":21,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-28T19:00:00.000Z","shortDate":"2023-02-28","month":"Feb","day":28,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-28T19:00:00.000Z","dateLong":"Tuesday, 28 February 2023, 7pm","mediumDate":"28 Feb 2023","shortDate":"2023-02-28","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":28,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-07T19:00:00.000Z","shortDate":"2023-03-07","month":"Mar","day":7,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-07T19:00:00.000Z","dateLong":"Tuesday, 7 March 2023, 7pm","mediumDate":"7 Mar 2023","shortDate":"2023-03-07","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":7,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-14T19:00:00.000Z","shortDate":"2023-03-14","month":"Mar","day":14,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-14T19:00:00.000Z","dateLong":"Tuesday, 14 March 2023, 7pm","mediumDate":"14 Mar 2023","shortDate":"2023-03-14","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":14,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-21T19:00:00.000Z","shortDate":"2023-03-21","month":"Mar","day":21,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-21T19:00:00.000Z","dateLong":"Tuesday, 21 March 2023, 7pm","mediumDate":"21 Mar 2023","shortDate":"2023-03-21","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":21,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-28T18:00:00.000Z","shortDate":"2023-03-28","month":"Mar","day":28,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-28T18:00:00.000Z","dateLong":"Tuesday, 28 March 2023, 7pm","mediumDate":"28 Mar 2023","shortDate":"2023-03-28","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":28,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-04T18:00:00.000Z","shortDate":"2023-04-04","month":"Apr","day":4,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-04T18:00:00.000Z","dateLong":"Tuesday, 4 April 2023, 7pm","mediumDate":"4 Apr 2023","shortDate":"2023-04-04","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":4,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-12-26T00:00:00.000Z","shortDate":"2023-12-26","month":"Dec","day":26,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2023-12-26T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 26 December 2023","mediumDate":"26 Dec 2023","shortDate":"2023-12-26","day":26,"weekday":"Tuesday","shortWeekday":"Tue","month":"Dec","special":false,"venue":"","address":""}],"special":false},{"date":"2024-01-02T00:00:00.000Z","shortDate":"2024-01-02","month":"Jan","day":2,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2024-01-02T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 2 January 2024","mediumDate":"2 Jan 2024","shortDate":"2024-01-02","day":2,"weekday":"Tuesday","shortWeekday":"Tue","month":"Jan","special":false,"venue":"","address":""}],"special":false},{"date":"2024-12-24T00:00:00.000Z","shortDate":"2024-12-24","month":"Dec","day":24,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2024-12-24T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 24 December 2024","mediumDate":"24 Dec 2024","shortDate":"2024-12-24","day":24,"weekday":"Tuesday","shortWeekday":"Tue","month":"Dec","special":false,"venue":"","address":""}],"special":false},{"date":"2024-12-31T00:00:00.000Z","shortDate":"2024-12-31","month":"Dec","day":31,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2024-12-31T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 31 December 2024","mediumDate":"31 Dec 2024","shortDate":"2024-12-31","day":31,"weekday":"Tuesday","shortWeekday":"Tue","month":"Dec","special":false,"venue":"","address":""}],"special":false}];

var options = {"online":false,"hiatus":false,"hiatusMessage":"","comingSoonRows":3,"newsCutoff":0};

var ratingText = {"u": "Universal", "pg": "Parental Guidance", "12": "12 and older", "15": "15 and older"};

// select a background image
function selectBackground() {
    var DAY_LIMIT = 6;
    var NIGHT_LIMIT = 9;

    var hour = new Date().getHours();
    var isDay = hour >= 6 && hour < 18;
    var bgNum = 1+Math.floor(Math.random() * (isDay ? DAY_LIMIT : NIGHT_LIMIT));
    var bodyClass = (isDay ? "day day-" : "night night-")+bgNum;

    document.getElementsByTagName("BODY")[0].className = bodyClass;
}

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

window.onload = function () {
  if (isHome) {
    setupHome();
  }

  if (isRecommendations) {
    setupRecommendations();
  }

  setupSlideshow();

  // add hover on all the rating symbols
  function addRatingHover(item) {
    var img = item.getElementsByClassName("rating-img")[0];
    var hover = item.getElementsByClassName("rating-hover")[0];
    var tag = item.getElementsByClassName("rating__tag")[0];

    if (img === undefined) {
      return;
    }

    img.addEventListener("mouseover", function(event) {
      hover.classList.add("rating-hover--show");

      var imgbox = img.getBoundingClientRect();
      var hoverbox = hover.getBoundingClientRect();

      var left = imgbox.left - hoverbox.left + 17;
      tag.style.left = left+"px";
    });
    img.addEventListener("mouseout", function(event) {
      hover.classList.remove("rating-hover--show");
    });
  }

  var ratingElements = document.getElementsByClassName('rating');
  for (var item of ratingElements) {
    addRatingHover(item);
  }

  selectBackground();
};
setInterval(selectBackground, 300000); // 5 minutes

function setupHome() {
  var now = new Date(Date.now());
  var yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  // adjust the showing anime
  function showingAnime(slot) {
    var before = slot.filter(function (series) {
      var from = series.hasOwnProperty('displayFrom') ? series.displayFrom : series.from;
      return Date.parse(from) < now;
    });
    return before[before.length - 1];
  }

  // function nextAnime(slot) {
  //   var after = slot.filter(function (series) {
  //     return Date.parse(series.from) >= now;
  //   });
  //   return after[0];
  // }

  var currentSlot1 = showingAnime(slot1);
  var currentSlot2 = showingAnime(slot2);
  var currentSlot3 = showingAnime(slot3);

  // var nextSlot1 = nextAnime(slot1);
  // var nextSlot2 = nextAnime(slot2);
  // var nextSlot3 = nextAnime(slot3);

  function editSlot(id, series) {
    if (series.name == "") {
      document.getElementById(id).classList.add('hide');
      return;
    }

    document.getElementById(id+'name').innerHTML = '<p class="series-ident">'+(series.movie ? 'Movie' : 'Series')+'</p>'+series.name;
    var img = document.getElementById(id+'picture');
    img.setAttribute('src', 'images/series/'+series.picture+'.png');
    img.classList.add("show");

    var slotDate = document.getElementById(id+'date');
    if (slotDate !== null) {
      slotDate.innerHTML = "<span class='day'>"+series.day+"</span><span class='month'>"+series.month+"</span>";
    }

    if (series.movie) {
      document.getElementById(id).classList.add('movie');
    }

    if (series.rating) {
      document.getElementById(id+'rating').innerHTML = `<img class='rating-img rating-${series.rating}' src='images/rating/${series.rating}.svg'>` +
        `<div class='rating-hover rating-hover-${series.rating}'><span>Age rating: ${ratingText[series.rating]}</span><div class='rating__tag'></div></div>`;
    }
  }

  editSlot('slot1', currentSlot1);
  editSlot('slot2', currentSlot2);
  editSlot('slot3', currentSlot3);

  // editSlot('nextSlot1', nextSlot1);
  // editSlot('nextSlot2', nextSlot2);
  // editSlot('nextSlot3', nextSlot3);


  // adjust the coming soon list
  function futureN(items, number) {
    var after = items.filter(function(item) {
      return Date.parse(item.date) >= now;
    });
    return after.slice(0, number);
  }

  function excludeSeries(items, exclude) {
    excludeNames = exclude.map(function (item) {
      return item.name;
    });
    return items.filter(function (item) {
      return !excludeNames.includes(item.name);
    });
  }

  var rowCutoffs = {1: 2, 2: 5, 3: 8, 4: 11};
  function findCutoff(items, maxRow) {
    for (var row = maxRow; row > 1; row--) {
      var cutoff = rowCutoffs[row];
      if (items >= cutoff)
        return cutoff;
    }
    return rowCutoffs[1];
  }

  // var comingSoonCutoff = findCutoff(comingSoon.length, options.comingSoonRows);
  comingSoon = futureN(comingSoon, 12);
  comingSoon = excludeSeries(comingSoon, [currentSlot1, currentSlot2, currentSlot3]);
  comingSoon = futureN(comingSoon, 5);

  var comingSoonHTML = '';
  for (item of comingSoon) {
    var html = `<figure${item.movie ? " class='movie'" : ""}><figcaption>`;
    if (item.movie) {
      html = html + "<p class='movie-ident'>Movie</p>";
    } else {
      html = html + "<p class='series-ident'>New series</p>";
    }
    html = html + `<h3>${item.name}</h3>`;
    if (!item.movie) {
      html = html + "<div class='series-info'><p class='starting'>Starting</p></div>";
    }
    html = html + `<div class='info-line'><div><time datetime="${item.date}"><span class='day'>${item.day}</span><span class='month'>${item.month}</span></time></div>`;
    if (item.trailer) {
      html = html + `<a class='trailer' href='${trailer}' target='_blank'>Trailer</a>`;
    }
    if (item.movie && item.time) {
      html = html + `<div class='movie-time'><p class='movie-weekday'>${item.weekday}</p><p class='movie-start-time'>${item.time}</p></div>`;
    }
    html = html + "</div>";
    if (item.rating) {
      html = html + "<div class='rating'>";
      html = html + `<img class='rating-img rating-${item.rating}' src='images/rating/${item.rating}.svg'>`;
      html = html + `<div class='rating-hover rating-hover-${item.rating}'><span>Age rating: ${ratingText[item.rating]}</span><div class='rating__tag'></div></div>`;
      html = html + "</div>";
    }
    html = html + `</figcaption><img class='series-picture' src='images/series/${item.picture}.png'></figure>`;
    comingSoonHTML = comingSoonHTML + html;
  }
  document.getElementById('coming-soon').innerHTML = comingSoonHTML;

  if (comingSoon.length <= 5) {
    document.getElementById('coming-soon').classList.add('coming-soon--short');
  }


  // adjust the events list
  events = events.filter(function (event) {
    return Date.parse(event.date) >= yesterday;
  });
  events = events.slice(0, 24);
  // var nextEvent = events[0].events[0];

  var eventsHTML = '';
  var event;
  for (event of events) {
    var html = "<article id='upcoming-"+event.date+"' class='event event-"+event.class+"'>\n"+
      "<time datetime='"+event.date+"'><span class='day'>"+event.day+"</span><span class='month'>"+event.month+"</span>"+(event.special ? "<span class='time__special'></span>" : "")+"</time>\n";
    for (ev of event.events) {
      var time = false;
      var a = "";
      var _a = "";
      if (ev.hasOwnProperty("link")) {
        a = "<a href='"+ev.link+"'>";
        _a = "</a>";
      }
      html = html + "<div class='event-detail event-detail-"+ev.class+"'>";
      if (ev.hasOwnProperty("picture") && ev.picture != "") {
        html = html + "<img src='images/series/"+ev.picture+".png'>";
      }
      if (ev.hasOwnProperty("prename") && ev.prename != "") {
        html = html + "<p class='series-ident'>"+ev.prename+"</p>";
      }
      html = html + "<h3>"+ev.name+"</h3>\n";
      if (ev.hasOwnProperty("time") || (ev.hasOwnProperty("venue") && ev.venue)) {
        html = html+"<p>"+a;
        if (ev.hasOwnProperty("venue") && ev.venue) {
          html = html + ev.venue;
          if (ev.hasOwnProperty("time")) {
            html = html + ", ";
            if (ev.hasOwnProperty("shortWeekday")) html = html + ev.shortWeekday + " ";
            html = html + ev.time
          }
        } else {
          if (ev.hasOwnProperty("shortWeekday")) html = html + ev.shortWeekday + " ";
          html = html+ev.time;
        }

        html = html+_a+"</p>\n";
      }
      if (ev.price) {
        html = html + "<p>Club fee: "+ev.price+"</p>";
      }
      html = html+"</div>";
    };
    html = html + "</article>\n";
    eventsHTML = eventsHTML + html;
  }
  document.getElementById('events-list').innerHTML = eventsHTML;

  // adjust the next event headline
  // var mainEvents = [];
  // for (event of events) {
  //   for (ev of event.events) {
  //     switch (ev.class) {
  //       case 'esports':
  //       case 'cinema':
  //       case 'skip':
  //       case 'new-series':
  //         continue;

  //       default:
  //         mainEvents.push(ev);
  //     }
  //   }
  // }
  // var nextEvent = mainEvents[0];

  var meetings = [];
  var social = [];
  for (var event of events) {
    for (ev of event.events) {
      switch (ev.class) {
        case 'anime':
        case 'online':
          meetings.push(ev);
          break;

        case 'social':
          social.push(ev);
          break;
      }
    }
  }

  // next main meeting
  var nextMeeting = meetings[0];
  
  document.getElementById('next-meeting-date').innerHTML = "<time datetime='"+nextMeeting.date+"'><span class='day'>"+nextMeeting.day+"</span><span class='month'>"+nextMeeting.month+"</span></time>"+
    "<div class='next-meeting-side focus-date-side'>"+nextMeeting.weekday+"<br>"+nextMeeting.time+"</div>";
  // document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
  if (document.getElementById('next-meeting-venue')) {
    document.getElementById('next-meeting-venue').innerHTML = nextMeeting.venue;
  }
  if (document.getElementById('next-meeting-address')) {
    document.getElementById('next-meeting-address').innerHTML = nextMeeting.address;
  }

  // next social
  if (social.length > 0) {
    var nextSocial = social[0];

    document.getElementById('next-social-date').innerHTML = "<time datetime='"+nextSocial.date+"'><span class='day'>"+nextSocial.day+"</span><span class='month'>"+nextSocial.month+"</span></time>"+
      "<div class='next-social-side focus-date-side'><span class='next-social-title'>"+nextSocial.name+"</span><br>"+nextSocial.weekday+" "+nextSocial.time+"</div>";
    // document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
    if (document.getElementById('next-social-venue')) {
      document.getElementById('next-social-venue').innerHTML = nextSocial.venue;
    }
    if (document.getElementById('next-social-address')) {
      document.getElementById('next-social-address').innerHTML = nextSocial.address;
    }
  } else {
    document.getElementById('section-next-social').remove();
  }
}

function setupRecommendations() {
  // clear genre and list selection
  function clearPick (event) {
    document.body.classList.remove('genre-filter');
    document.body.classList.remove('list-filter');
    for (let genreLink of document.getElementsByClassName('genre')) {
      let genre = genreLink.dataset.genre;
      document.body.classList.remove('genre-filter-'+genre);
      genreLink.classList.remove('genre-selected');
    }

    for (let listLink of document.getElementsByClassName('pick-list')) {
      let list = listLink.dataset.list;
      document.body.classList.remove('list-filter-'+list);
      listLink.classList.remove('pick-show');
      document.getElementById('pick-pane-'+list).classList.remove('pick-pane-show');
    }
  }

  function scrollToResults() {
    document.getElementById('top10results').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function pickGenre(genre) {
    clearPick();

    document.body.classList.add('genre-filter');
    document.body.classList.add('genre-filter-'+genre);
    for (let link of document.getElementsByClassName('genre-'+genre)) {
      link.classList.add('genre-selected');
    }
    scrollToResults();
  }

  function pickList(list) {
    clearPick();

    document.body.classList.add('list-filter')
    document.body.classList.add('list-filter-'+list);
    document.getElementById('pick-list-'+list).classList.add('pick-show');
    document.getElementById('pick-pane-'+list).classList.add('pick-pane-show');
    scrollToResults();
  }

  // select genre
  for (let genreLink of document.getElementsByClassName('genre')) {
    (function (genreLink) {
      let genre = genreLink.dataset.genre;
      function selectGenre(event) {
        pickGenre(genre);
      }
      genreLink.addEventListener('click', selectGenre);
      // genreLink.addEventListener('touchend', selectGenre);
    })(genreLink);
  }

  // select list
  for (let listLink of document.getElementsByClassName('pick-list')) {
    (function (listLink) {
      let list = listLink.dataset.list;
      function selectList(event) {
        pickList(list);
      }
      listLink.addEventListener('click', selectList);
      // listLink.addEventListener('touchend', selectList);
    })(listLink);
  }

  let clearLink = document.getElementById('clear-filter');
  if (clearLink !== null) {
    clearLink.addEventListener('click', clearPick);
    // clearLink.addEventListener('touchend', clearPick);
  }

  // initial selection
  setTimeout(function () {
    if (window.location.hash !== null && window.location.hash.length > 1) {
      let hash = window.location.hash.substring(1);
      let vars = parseQuery(hash);

      if (vars.hasOwnProperty('genre')) {
        pickGenre(vars.genre);
      }
    }
  });
}

function setupSlideshow() {
  for (let slideshow of document.getElementsByClassName('slideshow')) {
    (function (slideshow) {
      let pos = 1;
      setInterval(function () {
        slideshow.classList.remove('pos'+pos);
        pos++;
        if (pos > 4) {
          pos -= 4;
        }
        slideshow.classList.add('pos'+pos);
      }, 3000);
    })(slideshow);
  }
}

function showMap() {
  document.getElementById('blanket').className = "hide";
  document.getElementById('map-overlay').className = "hide";
  setTimeout(() => {
    document.getElementById('blanket').className = "show";
    document.getElementById('map-overlay').className = "show";
  }, 1);
}

function showNews() {
  document.getElementById('news-more-switch').className = "hide";
  document.getElementById('news-more').className = "show";
}

function hideMap() {
  document.getElementById('blanket').className = "hide";
  document.getElementById('map-overlay').className = "hide";
  setTimeout(() => {
    document.getElementById('blanket').className = "";
    document.getElementById('map-overlay').className = "";
  }, 500);
}