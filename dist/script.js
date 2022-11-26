var slot1 = [{"from":"2022-09-27T21:00:00.000Z","name":"Moriarty The Patriot","picture":"moriarty","rating":15,"date":"2022-10-04T18:00:00.000Z","day":4,"month":"Oct","weekday":"Tuesday"},{"from":"2023-01-03T22:00:00.000Z","name":"Kabaneri of the Iron Fortress","picture":"kabaneri","rating":15,"date":"2023-01-10T19:00:00.000Z","day":10,"month":"Jan","weekday":"Tuesday"},{"from":"2023-02-14T22:00:00.000Z","name":"Haibane Renmei","picture":"haibane-renmei","rating":12,"date":"2023-02-21T19:00:00.000Z","day":21,"month":"Feb","weekday":"Tuesday"},{"from":"2023-04-04T21:00:00.000Z","name":"Eureka Seven","picture":"eureka-seven","rating":12,"date":"2023-04-11T18:00:00.000Z","day":11,"month":"Apr","weekday":"Tuesday"}];
var slot2 = [{"from":"2022-11-01T22:00:00.000Z","name":"That Time I Got Reincarnated as a Slime","picture":"tensura","rating":15,"date":"2022-11-08T20:00:00.000Z","day":8,"month":"Nov","weekday":"Tuesday"},{"from":"2023-02-07T22:00:00.000Z","name":"BNA: Brand New Animal","picture":"bna","rating":12,"date":"2023-02-14T20:00:00.000Z","day":14,"month":"Feb","weekday":"Tuesday"},{"from":"2023-03-21T22:00:00.000Z","name":"Sakugan","picture":"sakugan","rating":12,"date":"2023-03-28T19:00:00.000Z","day":28,"month":"Mar","weekday":"Tuesday"},{"from":"2023-05-02T21:00:00.000Z","name":"The Aquatope on White Sand","picture":"aquatope","rating":"pg","date":"2023-05-09T19:00:00.000Z","day":9,"month":"May","weekday":"Tuesday"}];
var slot3 = [{"from":"2022-11-08T22:00:00.000Z","name":"My Senpai is Annoying","picture":"senpai-ga-uzai","rating":15,"date":"2022-11-15T21:00:00.000Z","day":15,"month":"Nov","weekday":"Tuesday"},{"from":"2023-01-03T22:00:00.000Z","name":"Snow White with the Red Hair","picture":"snow-white-red-hair","rating":12,"date":"2023-01-10T21:00:00.000Z","day":10,"month":"Jan","weekday":"Tuesday"},{"from":"2023-03-28T21:00:00.000Z","name":"Kaguya-sama, Love is War: Ultra Romantic","picture":"kaguya-sama3","rating":12,"date":"2023-04-04T20:00:00.000Z","day":4,"month":"Apr","weekday":"Tuesday"},{"from":"2023-05-23T21:00:00.000Z","name":"Slime Diaries","picture":"tensura","rating":"pg","date":"2023-05-30T20:00:00.000Z","day":30,"month":"May","weekday":"Tuesday"}];
// var movies = [];
var comingSoon = [{"from":"2023-01-10T19:00:00.000Z","name":"Kabaneri of the Iron Fortress","picture":"kabaneri","rating":15,"date":"2023-01-10T19:00:00.000Z","day":10,"month":"Jan","weekday":"Tuesday"},{"from":"2023-01-10T21:00:00.000Z","name":"Snow White with the Red Hair","picture":"snow-white-red-hair","rating":12,"date":"2023-01-10T21:00:00.000Z","day":10,"month":"Jan","weekday":"Tuesday"},{"from":"2023-02-14T20:00:00.000Z","name":"BNA: Brand New Animal","picture":"bna","rating":12,"date":"2023-02-14T20:00:00.000Z","day":14,"month":"Feb","weekday":"Tuesday"},{"from":"2023-02-21T19:00:00.000Z","name":"Haibane Renmei","picture":"haibane-renmei","rating":12,"date":"2023-02-21T19:00:00.000Z","day":21,"month":"Feb","weekday":"Tuesday"},{"from":"2023-03-28T19:00:00.000Z","name":"Sakugan","picture":"sakugan","rating":12,"date":"2023-03-28T19:00:00.000Z","day":28,"month":"Mar","weekday":"Tuesday"},{"from":"2023-04-04T20:00:00.000Z","name":"Kaguya-sama, Love is War: Ultra Romantic","picture":"kaguya-sama3","rating":12,"date":"2023-04-04T20:00:00.000Z","day":4,"month":"Apr","weekday":"Tuesday"},{"from":"2023-04-11T18:00:00.000Z","name":"Eureka Seven","picture":"eureka-seven","rating":12,"date":"2023-04-11T18:00:00.000Z","day":11,"month":"Apr","weekday":"Tuesday"},{"from":"2023-05-09T19:00:00.000Z","name":"The Aquatope on White Sand","picture":"aquatope","rating":"pg","date":"2023-05-09T19:00:00.000Z","day":9,"month":"May","weekday":"Tuesday"},{"from":"2023-05-30T20:00:00.000Z","name":"Slime Diaries","picture":"tensura","rating":"pg","date":"2023-05-30T20:00:00.000Z","day":30,"month":"May","weekday":"Tuesday"}];

var events = [{"date":"2022-11-29T19:00:00.000Z","shortDate":"2022-11-29","month":"Nov","day":29,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-29T19:00:00.000Z","dateLong":"Tuesday, 29 November 2022, 7pm","mediumDate":"29 Nov 2022","shortDate":"2022-11-29","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":29,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-11-30T00:00:00.000Z","shortDate":"2022-11-30","month":"Nov","day":30,"weekday":"Wednesday","class":"cinema","events":[{"name":"Goodbye Don Glees","date":"2022-11-30T00:00:00.000Z","time":"7pm","class":"cinema","venue":"Vue Basingstoke","dateLong":"Wednesday, 30 November 2022, 7pm","mediumDate":"30 Nov 2022","shortDate":"2022-11-30","day":30,"weekday":"Wednesday","shortWeekday":"Wed","month":"Nov","special":true,"address":""}],"special":true},{"date":"2022-12-06T19:00:00.000Z","shortDate":"2022-12-06","month":"Dec","day":6,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-06T19:00:00.000Z","dateLong":"Tuesday, 6 December 2022, 7pm","mediumDate":"6 Dec 2022","shortDate":"2022-12-06","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":6,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-08T00:00:00.000Z","shortDate":"2022-12-08","month":"Dec","day":8,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2022-12-08T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 8 December 2022, 6pm","mediumDate":"8 Dec 2022","shortDate":"2022-12-08","day":8,"weekday":"Thursday","shortWeekday":"Thu","month":"Dec","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-13T19:00:00.000Z","shortDate":"2022-12-13","month":"Dec","day":13,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-13T19:00:00.000Z","dateLong":"Tuesday, 13 December 2022, 7pm","mediumDate":"13 Dec 2022","shortDate":"2022-12-13","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":13,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-20T19:00:00.000Z","shortDate":"2022-12-20","month":"Dec","day":20,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-20T19:00:00.000Z","dateLong":"Tuesday, 20 December 2022, 7pm","mediumDate":"20 Dec 2022","shortDate":"2022-12-20","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":20,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2022-12-27T00:00:00.000Z","shortDate":"2022-12-27","month":"Dec","day":27,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2022-12-27T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 27 December 2022","mediumDate":"27 Dec 2022","shortDate":"2022-12-27","day":27,"weekday":"Tuesday","shortWeekday":"Tue","month":"Dec","special":false,"venue":"","address":""}],"special":false},{"date":"2023-01-03T00:00:00.000Z","shortDate":"2023-01-03","month":"Jan","day":3,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2023-01-03T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 3 January 2023","mediumDate":"3 Jan 2023","shortDate":"2023-01-03","day":3,"weekday":"Tuesday","shortWeekday":"Tue","month":"Jan","special":false,"venue":"","address":""}],"special":false},{"date":"2023-01-10T19:00:00.000Z","shortDate":"2023-01-10","month":"Jan","day":10,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-10T19:00:00.000Z","dateLong":"Tuesday, 10 January 2023, 7pm","mediumDate":"10 Jan 2023","shortDate":"2023-01-10","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":10,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-01-10T19:05:00.000Z","dateLong":"Tuesday, 10 January 2023, 7pm","mediumDate":"10 Jan 2023","shortDate":"2023-01-10","weekday":"Tuesday","shortWeekday":"","time":"7pm","day":10,"month":"Jan","prename":"New series","name":"Kabaneri of the Iron Fortress","picture":"kabaneri","class":"new-series"},{"date":"2023-01-10T21:05:00.000Z","dateLong":"Tuesday, 10 January 2023, 9pm","mediumDate":"10 Jan 2023","shortDate":"2023-01-10","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":10,"month":"Jan","prename":"New series","name":"Snow White with the Red Hair","picture":"snow-white-red-hair","class":"new-series"}],"special":false},{"date":"2023-01-12T00:00:00.000Z","shortDate":"2023-01-12","month":"Jan","day":12,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-01-12T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 12 January 2023, 6pm","mediumDate":"12 Jan 2023","shortDate":"2023-01-12","day":12,"weekday":"Thursday","shortWeekday":"Thu","month":"Jan","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-17T19:00:00.000Z","shortDate":"2023-01-17","month":"Jan","day":17,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-17T19:00:00.000Z","dateLong":"Tuesday, 17 January 2023, 7pm","mediumDate":"17 Jan 2023","shortDate":"2023-01-17","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":17,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-24T19:00:00.000Z","shortDate":"2023-01-24","month":"Jan","day":24,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-24T19:00:00.000Z","dateLong":"Tuesday, 24 January 2023, 7pm","mediumDate":"24 Jan 2023","shortDate":"2023-01-24","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":24,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-01-31T19:00:00.000Z","shortDate":"2023-01-31","month":"Jan","day":31,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-01-31T19:00:00.000Z","dateLong":"Tuesday, 31 January 2023, 7pm","mediumDate":"31 Jan 2023","shortDate":"2023-01-31","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":31,"month":"Jan","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-07T19:00:00.000Z","shortDate":"2023-02-07","month":"Feb","day":7,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-07T19:00:00.000Z","dateLong":"Tuesday, 7 February 2023, 7pm","mediumDate":"7 Feb 2023","shortDate":"2023-02-07","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":7,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-09T00:00:00.000Z","shortDate":"2023-02-09","month":"Feb","day":9,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-02-09T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 9 February 2023, 6pm","mediumDate":"9 Feb 2023","shortDate":"2023-02-09","day":9,"weekday":"Thursday","shortWeekday":"Thu","month":"Feb","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-02-14T19:00:00.000Z","shortDate":"2023-02-14","month":"Feb","day":14,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-14T19:00:00.000Z","dateLong":"Tuesday, 14 February 2023, 7pm","mediumDate":"14 Feb 2023","shortDate":"2023-02-14","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":14,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-02-14T20:05:00.000Z","dateLong":"Tuesday, 14 February 2023, 8pm","mediumDate":"14 Feb 2023","shortDate":"2023-02-14","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":14,"month":"Feb","prename":"New series","name":"BNA: Brand New Animal","picture":"bna","class":"new-series"}],"special":false},{"date":"2023-02-21T19:00:00.000Z","shortDate":"2023-02-21","month":"Feb","day":21,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-21T19:00:00.000Z","dateLong":"Tuesday, 21 February 2023, 7pm","mediumDate":"21 Feb 2023","shortDate":"2023-02-21","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":21,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-02-21T19:05:00.000Z","dateLong":"Tuesday, 21 February 2023, 7pm","mediumDate":"21 Feb 2023","shortDate":"2023-02-21","weekday":"Tuesday","shortWeekday":"","time":"7pm","day":21,"month":"Feb","prename":"New series","name":"Haibane Renmei","picture":"haibane-renmei","class":"new-series"}],"special":false},{"date":"2023-02-28T19:00:00.000Z","shortDate":"2023-02-28","month":"Feb","day":28,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-02-28T19:00:00.000Z","dateLong":"Tuesday, 28 February 2023, 7pm","mediumDate":"28 Feb 2023","shortDate":"2023-02-28","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":28,"month":"Feb","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-07T19:00:00.000Z","shortDate":"2023-03-07","month":"Mar","day":7,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-07T19:00:00.000Z","dateLong":"Tuesday, 7 March 2023, 7pm","mediumDate":"7 Mar 2023","shortDate":"2023-03-07","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":7,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-09T00:00:00.000Z","shortDate":"2023-03-09","month":"Mar","day":9,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-03-09T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 9 March 2023, 6pm","mediumDate":"9 Mar 2023","shortDate":"2023-03-09","day":9,"weekday":"Thursday","shortWeekday":"Thu","month":"Mar","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-14T19:00:00.000Z","shortDate":"2023-03-14","month":"Mar","day":14,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-14T19:00:00.000Z","dateLong":"Tuesday, 14 March 2023, 7pm","mediumDate":"14 Mar 2023","shortDate":"2023-03-14","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":14,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-21T19:00:00.000Z","shortDate":"2023-03-21","month":"Mar","day":21,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-21T19:00:00.000Z","dateLong":"Tuesday, 21 March 2023, 7pm","mediumDate":"21 Mar 2023","shortDate":"2023-03-21","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":21,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-03-28T18:00:00.000Z","shortDate":"2023-03-28","month":"Mar","day":28,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-28T18:00:00.000Z","dateLong":"Tuesday, 28 March 2023, 7pm","mediumDate":"28 Mar 2023","shortDate":"2023-03-28","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":28,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-03-28T19:05:00.000Z","dateLong":"Tuesday, 28 March 2023, 8pm","mediumDate":"28 Mar 2023","shortDate":"2023-03-28","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":28,"month":"Mar","prename":"New series","name":"Sakugan","picture":"sakugan","class":"new-series"}],"special":false},{"date":"2023-04-04T18:00:00.000Z","shortDate":"2023-04-04","month":"Apr","day":4,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-04T18:00:00.000Z","dateLong":"Tuesday, 4 April 2023, 7pm","mediumDate":"4 Apr 2023","shortDate":"2023-04-04","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":4,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-04-04T20:05:00.000Z","dateLong":"Tuesday, 4 April 2023, 9pm","mediumDate":"4 Apr 2023","shortDate":"2023-04-04","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":4,"month":"Apr","prename":"New series","name":"Kaguya-sama, Love is War: Ultra Romantic","picture":"kaguya-sama3","class":"new-series"}],"special":false},{"date":"2023-04-11T18:00:00.000Z","shortDate":"2023-04-11","month":"Apr","day":11,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-11T18:00:00.000Z","dateLong":"Tuesday, 11 April 2023, 7pm","mediumDate":"11 Apr 2023","shortDate":"2023-04-11","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":11,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-04-11T18:05:00.000Z","dateLong":"Tuesday, 11 April 2023, 7pm","mediumDate":"11 Apr 2023","shortDate":"2023-04-11","weekday":"Tuesday","shortWeekday":"","time":"7pm","day":11,"month":"Apr","prename":"New series","name":"Eureka Seven","picture":"eureka-seven","class":"new-series"}],"special":false},{"date":"2023-04-13T00:00:00.000Z","shortDate":"2023-04-13","month":"Apr","day":13,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-04-13T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 13 April 2023, 6pm","mediumDate":"13 Apr 2023","shortDate":"2023-04-13","day":13,"weekday":"Thursday","shortWeekday":"Thu","month":"Apr","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-18T18:00:00.000Z","shortDate":"2023-04-18","month":"Apr","day":18,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-18T18:00:00.000Z","dateLong":"Tuesday, 18 April 2023, 7pm","mediumDate":"18 Apr 2023","shortDate":"2023-04-18","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":18,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-25T18:00:00.000Z","shortDate":"2023-04-25","month":"Apr","day":25,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-25T18:00:00.000Z","dateLong":"Tuesday, 25 April 2023, 7pm","mediumDate":"25 Apr 2023","shortDate":"2023-04-25","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":25,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-02T18:00:00.000Z","shortDate":"2023-05-02","month":"May","day":2,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-02T18:00:00.000Z","dateLong":"Tuesday, 2 May 2023, 7pm","mediumDate":"2 May 2023","shortDate":"2023-05-02","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":2,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-09T18:00:00.000Z","shortDate":"2023-05-09","month":"May","day":9,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-09T18:00:00.000Z","dateLong":"Tuesday, 9 May 2023, 7pm","mediumDate":"9 May 2023","shortDate":"2023-05-09","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":9,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-05-09T19:05:00.000Z","dateLong":"Tuesday, 9 May 2023, 8pm","mediumDate":"9 May 2023","shortDate":"2023-05-09","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":9,"month":"May","prename":"New series","name":"The Aquatope on White Sand","picture":"aquatope","class":"new-series"}],"special":false},{"date":"2023-05-11T00:00:00.000Z","shortDate":"2023-05-11","month":"May","day":11,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-05-11T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 11 May 2023, 6pm","mediumDate":"11 May 2023","shortDate":"2023-05-11","day":11,"weekday":"Thursday","shortWeekday":"Thu","month":"May","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-16T18:00:00.000Z","shortDate":"2023-05-16","month":"May","day":16,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-16T18:00:00.000Z","dateLong":"Tuesday, 16 May 2023, 7pm","mediumDate":"16 May 2023","shortDate":"2023-05-16","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":16,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-23T18:00:00.000Z","shortDate":"2023-05-23","month":"May","day":23,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-23T18:00:00.000Z","dateLong":"Tuesday, 23 May 2023, 7pm","mediumDate":"23 May 2023","shortDate":"2023-05-23","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":23,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-30T18:00:00.000Z","shortDate":"2023-05-30","month":"May","day":30,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-30T18:00:00.000Z","dateLong":"Tuesday, 30 May 2023, 7pm","mediumDate":"30 May 2023","shortDate":"2023-05-30","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":30,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-05-30T20:05:00.000Z","dateLong":"Tuesday, 30 May 2023, 9pm","mediumDate":"30 May 2023","shortDate":"2023-05-30","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":30,"month":"May","prename":"New series","name":"Slime Diaries","picture":"tensura","class":"new-series"}],"special":false},{"date":"2023-06-06T18:00:00.000Z","shortDate":"2023-06-06","month":"Jun","day":6,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-06T18:00:00.000Z","dateLong":"Tuesday, 6 June 2023, 7pm","mediumDate":"6 Jun 2023","shortDate":"2023-06-06","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":6,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-06-08T00:00:00.000Z","shortDate":"2023-06-08","month":"Jun","day":8,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-06-08T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 8 June 2023, 6pm","mediumDate":"8 Jun 2023","shortDate":"2023-06-08","day":8,"weekday":"Thursday","shortWeekday":"Thu","month":"Jun","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-06-13T18:00:00.000Z","shortDate":"2023-06-13","month":"Jun","day":13,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-13T18:00:00.000Z","dateLong":"Tuesday, 13 June 2023, 7pm","mediumDate":"13 Jun 2023","shortDate":"2023-06-13","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":13,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-06-20T18:00:00.000Z","shortDate":"2023-06-20","month":"Jun","day":20,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-20T18:00:00.000Z","dateLong":"Tuesday, 20 June 2023, 7pm","mediumDate":"20 Jun 2023","shortDate":"2023-06-20","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":20,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-12-26T00:00:00.000Z","shortDate":"2023-12-26","month":"Dec","day":26,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2023-12-26T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 26 December 2023","mediumDate":"26 Dec 2023","shortDate":"2023-12-26","day":26,"weekday":"Tuesday","shortWeekday":"Tue","month":"Dec","special":false,"venue":"","address":""}],"special":false},{"date":"2024-01-02T00:00:00.000Z","shortDate":"2024-01-02","month":"Jan","day":2,"weekday":"Tuesday","class":"skip","events":[{"name":"No Meeting","date":"2024-01-02T00:00:00.000Z","class":"skip","time":"","dateLong":"Tuesday, 2 January 2024","mediumDate":"2 Jan 2024","shortDate":"2024-01-02","day":2,"weekday":"Tuesday","shortWeekday":"Tue","month":"Jan","special":false,"venue":"","address":""}],"special":false}];

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

  var currentSlot1 = showingAnime(slot1);
  var currentSlot2 = showingAnime(slot2);
  var currentSlot3 = showingAnime(slot3);

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
  comingSoon = futureN(comingSoon, 8);

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

  if (comingSoon.length <= 2) {
    document.getElementById('coming-soon').classList.add('coming-soon--very-short');
  } else if (comingSoon.length <= 5) {
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