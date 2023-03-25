var slot1 = [{"from":"2023-02-14T22:00:00.000Z","name":"Haibane Renmei","picture":"haibane-renmei","rating":12,"date":"2023-02-21T19:00:00.000Z","day":21,"month":"Feb","weekday":"Tuesday"},{"from":"2023-04-04T21:00:00.000Z","name":"Eureka Seven","picture":"eureka-seven","rating":12,"date":"2023-04-11T18:00:00.000Z","day":11,"month":"Apr","weekday":"Tuesday"}];
var slot2 = [{"from":"2023-02-07T22:00:00.000Z","name":"BNA: Brand New Animal","picture":"bna","rating":12,"date":"2023-02-14T20:00:00.000Z","day":14,"month":"Feb","weekday":"Tuesday"},{"from":"2023-03-21T22:00:00.000Z","name":"Sakugan","picture":"sakugan","rating":12,"date":"2023-03-28T19:00:00.000Z","day":28,"month":"Mar","weekday":"Tuesday"},{"from":"2023-05-02T21:00:00.000Z","name":"The Aquatope on White Sand","picture":"aquatope","rating":"pg","date":"2023-05-09T19:00:00.000Z","day":9,"month":"May","weekday":"Tuesday"},{"from":"2023-06-13T21:00:00.000Z","name":"Appare-Ranman","picture":"appare-ranman","rating":15,"date":"2023-06-20T19:00:00.000Z","day":20,"month":"Jun","weekday":"Tuesday"},{"from":"2023-08-01T21:00:00.000Z","name":"The Aquatope on White Sand pt2","picture":"aquatope","rating":"pg","date":"2023-08-08T19:00:00.000Z","day":8,"month":"Aug","weekday":"Tuesday"}];
var slot3 = [{"from":"2023-01-03T22:00:00.000Z","displayFrom":"2022-12-22T00:00:00.000Z","name":"Snow White with the Red Hair","picture":"snow-white-red-hair","rating":12,"date":"2023-01-10T21:00:00.000Z","day":10,"month":"Jan","weekday":"Tuesday"},{"from":"2023-04-04T21:00:00.000Z","name":"Kaguya-sama, Love is War: Ultra Romantic","picture":"kaguya-sama3","rating":12,"date":"2023-04-11T20:00:00.000Z","day":11,"month":"Apr","weekday":"Tuesday"},{"from":"2023-05-23T21:00:00.000Z","name":"Slime Diaries","picture":"tensura","rating":"pg","date":"2023-05-30T20:00:00.000Z","day":30,"month":"May","weekday":"Tuesday"},{"from":"2023-07-04T21:00:00.000Z","name":"Taisho Otome Fairy Tale","picture":"taisho-otome","rating":12,"date":"2023-07-11T20:00:00.000Z","day":11,"month":"Jul","weekday":"Tuesday"}];
// var movies = [];
var comingSoon = [{"from":"2023-03-28T19:00:00.000Z","name":"Sakugan","picture":"sakugan","rating":12,"date":"2023-03-28T19:00:00.000Z","day":28,"month":"Mar","weekday":"Tuesday"},{"from":"2023-04-11T18:00:00.000Z","name":"Eureka Seven","picture":"eureka-seven","rating":12,"date":"2023-04-11T18:00:00.000Z","day":11,"month":"Apr","weekday":"Tuesday"},{"from":"2023-04-11T20:00:00.000Z","name":"Kaguya-sama, Love is War: Ultra Romantic","picture":"kaguya-sama3","rating":12,"date":"2023-04-11T20:00:00.000Z","day":11,"month":"Apr","weekday":"Tuesday"},{"from":"2023-05-09T19:00:00.000Z","name":"The Aquatope on White Sand","picture":"aquatope","rating":"pg","date":"2023-05-09T19:00:00.000Z","day":9,"month":"May","weekday":"Tuesday"},{"from":"2023-05-30T20:00:00.000Z","name":"Slime Diaries","picture":"tensura","rating":"pg","date":"2023-05-30T20:00:00.000Z","day":30,"month":"May","weekday":"Tuesday"},{"from":"2023-06-20T19:00:00.000Z","name":"Appare-Ranman","picture":"appare-ranman","rating":15,"date":"2023-06-20T19:00:00.000Z","day":20,"month":"Jun","weekday":"Tuesday"},{"from":"2023-07-11T20:00:00.000Z","name":"Taisho Otome Fairy Tale","picture":"taisho-otome","rating":12,"date":"2023-07-11T20:00:00.000Z","day":11,"month":"Jul","weekday":"Tuesday"},{"from":"2023-08-08T19:00:00.000Z","name":"The Aquatope on White Sand pt2","picture":"aquatope","rating":"pg","date":"2023-08-08T19:00:00.000Z","day":8,"month":"Aug","weekday":"Tuesday"}];

var events = [{"date":"2023-03-28T18:00:00.000Z","shortDate":"2023-03-28","month":"Mar","day":28,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-03-28T18:00:00.000Z","dateLong":"Tuesday, 28 March 2023, 7pm","mediumDate":"28 Mar 2023","shortDate":"2023-03-28","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":28,"month":"Mar","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-03-28T19:05:00.000Z","dateLong":"Tuesday, 28 March 2023, 8pm","mediumDate":"28 Mar 2023","shortDate":"2023-03-28","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":28,"month":"Mar","prename":"New series","name":"Sakugan","picture":"sakugan","class":"new-series"}],"special":false},{"date":"2023-04-04T18:00:00.000Z","shortDate":"2023-04-04","month":"Apr","day":4,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-04T18:00:00.000Z","dateLong":"Tuesday, 4 April 2023, 7pm","mediumDate":"4 Apr 2023","shortDate":"2023-04-04","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":4,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-11T18:00:00.000Z","shortDate":"2023-04-11","month":"Apr","day":11,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-11T18:00:00.000Z","dateLong":"Tuesday, 11 April 2023, 7pm","mediumDate":"11 Apr 2023","shortDate":"2023-04-11","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":11,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-04-11T18:05:00.000Z","dateLong":"Tuesday, 11 April 2023, 7pm","mediumDate":"11 Apr 2023","shortDate":"2023-04-11","weekday":"Tuesday","shortWeekday":"","time":"7pm","day":11,"month":"Apr","prename":"New series","name":"Eureka Seven","picture":"eureka-seven","class":"new-series"},{"date":"2023-04-11T20:05:00.000Z","dateLong":"Tuesday, 11 April 2023, 9pm","mediumDate":"11 Apr 2023","shortDate":"2023-04-11","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":11,"month":"Apr","prename":"New series","name":"Kaguya-sama, Love is War: Ultra Romantic","picture":"kaguya-sama3","class":"new-series"}],"special":false},{"date":"2023-04-13T00:00:00.000Z","shortDate":"2023-04-13","month":"Apr","day":13,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-04-13T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 13 April 2023, 6pm","mediumDate":"13 Apr 2023","shortDate":"2023-04-13","day":13,"weekday":"Thursday","shortWeekday":"Thu","month":"Apr","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-14T00:00:00.000Z","shortDate":"2023-04-14","month":"Apr","day":14,"weekday":"Friday","class":"cinema","events":[{"name":"Suzume","date":"2023-04-14T00:00:00.000Z","class":"cinema","time":"","dateLong":"Friday, 14 April 2023","mediumDate":"14 Apr 2023","shortDate":"2023-04-14","day":14,"weekday":"Friday","shortWeekday":"Fri","month":"Apr","special":true,"venue":"","address":""}],"special":true},{"date":"2023-04-18T18:00:00.000Z","shortDate":"2023-04-18","month":"Apr","day":18,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-18T18:00:00.000Z","dateLong":"Tuesday, 18 April 2023, 7pm","mediumDate":"18 Apr 2023","shortDate":"2023-04-18","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":18,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-19T00:00:00.000Z","shortDate":"2023-04-19","month":"Apr","day":19,"weekday":"Wednesday","class":"social","events":[{"name":"Magic the Gathering","date":"2023-04-19T00:00:00.000Z","class":"social","venue":"White Hart","time":"7pm","dateLong":"Wednesday, 19 April 2023, 7pm","mediumDate":"19 Apr 2023","shortDate":"2023-04-19","day":19,"weekday":"Wednesday","shortWeekday":"Wed","month":"Apr","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-04-25T18:00:00.000Z","shortDate":"2023-04-25","month":"Apr","day":25,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-04-25T18:00:00.000Z","dateLong":"Tuesday, 25 April 2023, 7pm","mediumDate":"25 Apr 2023","shortDate":"2023-04-25","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":25,"month":"Apr","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-02T18:00:00.000Z","shortDate":"2023-05-02","month":"May","day":2,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-02T18:00:00.000Z","dateLong":"Tuesday, 2 May 2023, 7pm","mediumDate":"2 May 2023","shortDate":"2023-05-02","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":2,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-09T18:00:00.000Z","shortDate":"2023-05-09","month":"May","day":9,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-09T18:00:00.000Z","dateLong":"Tuesday, 9 May 2023, 7pm","mediumDate":"9 May 2023","shortDate":"2023-05-09","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":9,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-05-09T19:05:00.000Z","dateLong":"Tuesday, 9 May 2023, 8pm","mediumDate":"9 May 2023","shortDate":"2023-05-09","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":9,"month":"May","prename":"New series","name":"The Aquatope on White Sand","picture":"aquatope","class":"new-series"}],"special":false},{"date":"2023-05-11T00:00:00.000Z","shortDate":"2023-05-11","month":"May","day":11,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-05-11T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 11 May 2023, 6pm","mediumDate":"11 May 2023","shortDate":"2023-05-11","day":11,"weekday":"Thursday","shortWeekday":"Thu","month":"May","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-16T18:00:00.000Z","shortDate":"2023-05-16","month":"May","day":16,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-16T18:00:00.000Z","dateLong":"Tuesday, 16 May 2023, 7pm","mediumDate":"16 May 2023","shortDate":"2023-05-16","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":16,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-23T18:00:00.000Z","shortDate":"2023-05-23","month":"May","day":23,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-23T18:00:00.000Z","dateLong":"Tuesday, 23 May 2023, 7pm","mediumDate":"23 May 2023","shortDate":"2023-05-23","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":23,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-05-30T18:00:00.000Z","shortDate":"2023-05-30","month":"May","day":30,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-05-30T18:00:00.000Z","dateLong":"Tuesday, 30 May 2023, 7pm","mediumDate":"30 May 2023","shortDate":"2023-05-30","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":30,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-05-30T20:05:00.000Z","dateLong":"Tuesday, 30 May 2023, 9pm","mediumDate":"30 May 2023","shortDate":"2023-05-30","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":30,"month":"May","prename":"New series","name":"Slime Diaries","picture":"tensura","class":"new-series"}],"special":false},{"date":"2023-06-06T18:00:00.000Z","shortDate":"2023-06-06","month":"Jun","day":6,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-06T18:00:00.000Z","dateLong":"Tuesday, 6 June 2023, 7pm","mediumDate":"6 Jun 2023","shortDate":"2023-06-06","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":6,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-06-08T00:00:00.000Z","shortDate":"2023-06-08","month":"Jun","day":8,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-06-08T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 8 June 2023, 6pm","mediumDate":"8 Jun 2023","shortDate":"2023-06-08","day":8,"weekday":"Thursday","shortWeekday":"Thu","month":"Jun","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-06-13T18:00:00.000Z","shortDate":"2023-06-13","month":"Jun","day":13,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-13T18:00:00.000Z","dateLong":"Tuesday, 13 June 2023, 7pm","mediumDate":"13 Jun 2023","shortDate":"2023-06-13","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":13,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-06-20T18:00:00.000Z","shortDate":"2023-06-20","month":"Jun","day":20,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-20T18:00:00.000Z","dateLong":"Tuesday, 20 June 2023, 7pm","mediumDate":"20 Jun 2023","shortDate":"2023-06-20","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":20,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-06-20T19:05:00.000Z","dateLong":"Tuesday, 20 June 2023, 8pm","mediumDate":"20 Jun 2023","shortDate":"2023-06-20","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":20,"month":"Jun","prename":"New series","name":"Appare-Ranman","picture":"appare-ranman","class":"new-series"}],"special":false},{"date":"2023-06-27T18:00:00.000Z","shortDate":"2023-06-27","month":"Jun","day":27,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-06-27T18:00:00.000Z","dateLong":"Tuesday, 27 June 2023, 7pm","mediumDate":"27 Jun 2023","shortDate":"2023-06-27","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":27,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-07-04T18:00:00.000Z","shortDate":"2023-07-04","month":"Jul","day":4,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-07-04T18:00:00.000Z","dateLong":"Tuesday, 4 July 2023, 7pm","mediumDate":"4 Jul 2023","shortDate":"2023-07-04","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":4,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-07-11T18:00:00.000Z","shortDate":"2023-07-11","month":"Jul","day":11,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-07-11T18:00:00.000Z","dateLong":"Tuesday, 11 July 2023, 7pm","mediumDate":"11 Jul 2023","shortDate":"2023-07-11","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":11,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-07-11T20:05:00.000Z","dateLong":"Tuesday, 11 July 2023, 9pm","mediumDate":"11 Jul 2023","shortDate":"2023-07-11","weekday":"Tuesday","shortWeekday":"","time":"9pm","day":11,"month":"Jul","prename":"New series","name":"Taisho Otome Fairy Tale","picture":"taisho-otome","class":"new-series"}],"special":false},{"date":"2023-07-13T00:00:00.000Z","shortDate":"2023-07-13","month":"Jul","day":13,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-07-13T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 13 July 2023, 6pm","mediumDate":"13 Jul 2023","shortDate":"2023-07-13","day":13,"weekday":"Thursday","shortWeekday":"Thu","month":"Jul","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-07-18T18:00:00.000Z","shortDate":"2023-07-18","month":"Jul","day":18,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-07-18T18:00:00.000Z","dateLong":"Tuesday, 18 July 2023, 7pm","mediumDate":"18 Jul 2023","shortDate":"2023-07-18","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":18,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-07-25T18:00:00.000Z","shortDate":"2023-07-25","month":"Jul","day":25,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-07-25T18:00:00.000Z","dateLong":"Tuesday, 25 July 2023, 7pm","mediumDate":"25 Jul 2023","shortDate":"2023-07-25","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":25,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-08-01T18:00:00.000Z","shortDate":"2023-08-01","month":"Aug","day":1,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-08-01T18:00:00.000Z","dateLong":"Tuesday, 1 August 2023, 7pm","mediumDate":"1 Aug 2023","shortDate":"2023-08-01","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":1,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-08-08T18:00:00.000Z","shortDate":"2023-08-08","month":"Aug","day":8,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-08-08T18:00:00.000Z","dateLong":"Tuesday, 8 August 2023, 7pm","mediumDate":"8 Aug 2023","shortDate":"2023-08-08","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":8,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2023-08-08T19:05:00.000Z","dateLong":"Tuesday, 8 August 2023, 8pm","mediumDate":"8 Aug 2023","shortDate":"2023-08-08","weekday":"Tuesday","shortWeekday":"","time":"8pm","day":8,"month":"Aug","prename":"New series","name":"The Aquatope on White Sand pt2","picture":"aquatope","class":"new-series"}],"special":false},{"date":"2023-08-10T00:00:00.000Z","shortDate":"2023-08-10","month":"Aug","day":10,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-08-10T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 10 August 2023, 6pm","mediumDate":"10 Aug 2023","shortDate":"2023-08-10","day":10,"weekday":"Thursday","shortWeekday":"Thu","month":"Aug","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-08-15T18:00:00.000Z","shortDate":"2023-08-15","month":"Aug","day":15,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-08-15T18:00:00.000Z","dateLong":"Tuesday, 15 August 2023, 7pm","mediumDate":"15 Aug 2023","shortDate":"2023-08-15","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":15,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-08-22T18:00:00.000Z","shortDate":"2023-08-22","month":"Aug","day":22,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-08-22T18:00:00.000Z","dateLong":"Tuesday, 22 August 2023, 7pm","mediumDate":"22 Aug 2023","shortDate":"2023-08-22","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":22,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-08-29T18:00:00.000Z","shortDate":"2023-08-29","month":"Aug","day":29,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-08-29T18:00:00.000Z","dateLong":"Tuesday, 29 August 2023, 7pm","mediumDate":"29 Aug 2023","shortDate":"2023-08-29","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":29,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-09-05T18:00:00.000Z","shortDate":"2023-09-05","month":"Sept","day":5,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-09-05T18:00:00.000Z","dateLong":"Tuesday, 5 September 2023, 7pm","mediumDate":"5 Sept 2023","shortDate":"2023-09-05","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":5,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-09-12T18:00:00.000Z","shortDate":"2023-09-12","month":"Sept","day":12,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-09-12T18:00:00.000Z","dateLong":"Tuesday, 12 September 2023, 7pm","mediumDate":"12 Sept 2023","shortDate":"2023-09-12","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":12,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-09-14T00:00:00.000Z","shortDate":"2023-09-14","month":"Sept","day":14,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-09-14T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 14 September 2023, 6pm","mediumDate":"14 Sept 2023","shortDate":"2023-09-14","day":14,"weekday":"Thursday","shortWeekday":"Thu","month":"Sept","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-09-19T18:00:00.000Z","shortDate":"2023-09-19","month":"Sept","day":19,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-09-19T18:00:00.000Z","dateLong":"Tuesday, 19 September 2023, 7pm","mediumDate":"19 Sept 2023","shortDate":"2023-09-19","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":19,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-09-26T18:00:00.000Z","shortDate":"2023-09-26","month":"Sept","day":26,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-09-26T18:00:00.000Z","dateLong":"Tuesday, 26 September 2023, 7pm","mediumDate":"26 Sept 2023","shortDate":"2023-09-26","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":26,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-10-03T18:00:00.000Z","shortDate":"2023-10-03","month":"Oct","day":3,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-10-03T18:00:00.000Z","dateLong":"Tuesday, 3 October 2023, 7pm","mediumDate":"3 Oct 2023","shortDate":"2023-10-03","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":3,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-10-10T18:00:00.000Z","shortDate":"2023-10-10","month":"Oct","day":10,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-10-10T18:00:00.000Z","dateLong":"Tuesday, 10 October 2023, 7pm","mediumDate":"10 Oct 2023","shortDate":"2023-10-10","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":10,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-10-12T00:00:00.000Z","shortDate":"2023-10-12","month":"Oct","day":12,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-10-12T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 12 October 2023, 6pm","mediumDate":"12 Oct 2023","shortDate":"2023-10-12","day":12,"weekday":"Thursday","shortWeekday":"Thu","month":"Oct","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-10-17T18:00:00.000Z","shortDate":"2023-10-17","month":"Oct","day":17,"weekday":"Tuesday","class":"anime","events":[{"date":"2023-10-17T18:00:00.000Z","dateLong":"Tuesday, 17 October 2023, 7pm","mediumDate":"17 Oct 2023","shortDate":"2023-10-17","time":"7pm","weekday":"Tuesday","shortWeekday":"Tue","day":17,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}],"special":false},{"date":"2023-11-09T00:00:00.000Z","shortDate":"2023-11-09","month":"Nov","day":9,"weekday":"Thursday","class":"social","events":[{"name":"Board Games","date":"2023-11-09T00:00:00.000Z","class":"social","venue":"Dice Tower","time":"6pm","dateLong":"Thursday, 9 November 2023, 6pm","mediumDate":"9 Nov 2023","shortDate":"2023-11-09","day":9,"weekday":"Thursday","shortWeekday":"Thu","month":"Nov","special":false,"address":"London Road, Basingstoke RG21 4AE"}],"special":false}];

var options = {"online":false,"hiatus":false,"hiatusMessage":"","comingSoonRows":3,"newsCutoff":0};

var ratingText = {"u": "Universal", "pg": "Parental Guidance", "12": "12 and older", "15": "15 and older"};

var top10 = [{"name":"Terror in Resonance","picture":"terror-in-resonance","genre":["Thriller","Crime"]},{"name":"Erased","picture":"erased","genre":["Crime","Mystery"]},{"name":"Eden of the East","picture":"eden-of-the-east","genre":["Thriller","Mystery"]},{"name":"B: The Beginning","picture":"b-the-beginning","genre":["Thriller","Crime"]},{"name":"Death Note","picture":"death-note","genre":["Thriller","Shounen","Dark"]},{"name":"Astra: Lost in Space","picture":"astra-lost-in-space","genre":["Adventure","Sci fi","Mystery","Shounen"]},{"name":"Magatsu Wahrheit: ZUERST","picture":"magatsu-wahrheit-zuerst","genre":["War","Action","Mystery"]},{"name":"Everything Becomes F: The Perfect Insider","picture":"everything-becomes-f","genre":["Mystery","Crime","Thriller"]},{"name":"Code Geass","picture":"code-geass","genre":["Action","Adventure","War","Shounen"]},{"name":"Charlotte","picture":"charlotte","genre":["Action","Drama"]},{"name":"Working!","picture":"working","genre":["Comedy","Slice of life"]},{"name":"The Great Passage","picture":"great-passage","genre":["Slice of life","Drama"]},{"name":"Welcome to the NHK!","picture":"welcome-to-the-nhk","genre":["Slice of life","Comedy"]},{"name":"K-ON!","picture":"k-on","genre":["Comedy","Slice of life","Music"]},{"name":"Blue Spring Ride","picture":"blue-spring-ride","genre":["Romance","Slice of life"]},{"name":"Teasing Master Takagi","picture":"takagi-san","genre":["Romance","Slice of life","Comedy"]},{"name":"Non Non Biyori","picture":"non-non-biyori-non-stop","genre":["Comedy","Slice of life"]},{"name":"Hinamatsuri","picture":"hinamatsuri","genre":["Comedy","Slice of life"]},{"name":"Nichijou","picture":"nichijou","genre":["Comedy","Slice of life"]},{"name":"Sing Yesterday For Me","picture":"sing-yesterday","genre":["Drama","Romance","Slife of life"]},{"name":"Haibane Renmei","picture":"haibane-renmei","genre":["Drama","Slice of life","Mystery"]},{"name":"Violet Evergarden","picture":"violet-evergarden","genre":["Drama","War"]},{"name":"Crest of the Stars","picture":"crest-of-the-stars","genre":["Sci fi","Action","Romance","War"]},{"name":"Fullmetal Alchemist","picture":"fullmetal-alchemist","genre":["Action","Adventure","War","Shounen"]},{"name":"Higurashi: When They Cry","picture":"higurashi","genre":["Mystery","Crime","Drama","Dark"]},{"name":"Baccano!","picture":"baccano","genre":["Crime","Action","Mystery"]},{"name":"Bamboo Blade","picture":"bamboo-blade","genre":["Comedy","Slice of life","Sports"]},{"name":"Steins;Gate","picture":"steins-gate","genre":["Sci fi","Drama","Mystery"]},{"name":"Your Name","picture":"your-name","genre":["Romance","Mystery"]},{"name":"Monthly Girls' Nozaki-kun","picture":"nozaki-kun","genre":["Comedy","Romance"]},{"name":"Eureka Seven","picture":"eureka-seven","genre":["Action","Adventure","Mystery","Mecha","Sci fi"]},{"name":"Last Exile","picture":"last-exile","genre":["Action","Adventure","Mystery","War"]},{"name":"Alderamin on the Sky","picture":"alderamin-on-the-sky","genre":["War","Action"]},{"name":"Hinamatsuri","picture":"hinamatsuri","genre":["Comedy","Slice of life"]},{"name":"My Love Story!","picture":"oremonogatari","genre":["Romance","Comedy","Slice of life"]},{"name":"Miss Kobayashi's Dragon Maid","picture":"kobayashi-dragon-maid","genre":["Comedy","Romance","Slice of life"]},{"name":"Bunny Drop","picture":"bunny-drop","genre":["Slice of life","Drama"]},{"name":"Oban Star Racers","picture":"oban-star-racers","genre":["Action","Adventure","Sci fi","Shounen"]},{"name":"From The New World","picture":"shinsekai-yori","genre":["Mystery","Drama","Dark"]},{"name":"Carole & Tuesday","picture":"carole-and-tuesday","genre":["Music","Drama","Sci fi"]},{"name":"BOFURI","picture":"bofuri","genre":["Comedy","Slice of life"]},{"name":"The Third","picture":"the-third","genre":["Sci fi","Action"]},{"name":"The Ancient Magus' Bride","picture":"ancient-magus-bride","genre":["Adventure","Drama","Romance"]},{"name":"Golden Kamuy","picture":"golden-kamuy","genre":["Adventure","Shounen"]},{"name":"Konosuba","picture":"konosuba-legend-of-crimson","genre":["Comedy","Isekai"]},{"name":"Death Parade","picture":"death-parade","genre":["Mystery","Drama","Dark"]},{"name":"Free!","picture":"free","genre":["Slice of life","Sports"]},{"name":"No Game No Life","picture":"no-game-no-life","genre":["Comedy","Isekai","Adventure"]},{"name":"Stellvia of the Universe","picture":"stellvia","genre":["Sci fi","Adventure"]},{"name":"Black Butler","picture":"black-butler","genre":["Adventure","Dark"]},{"name":"Made In Abyss","picture":"made-in-abyss","genre":["Adventure","Drama","Mystery","Dark"]},{"name":"Log Horizon","picture":"log-horizon","genre":["Isekai","Action","Adventure","Drama","Shounen"]},{"name":"MegaloBox","picture":"megalobox","genre":["Sports","Drama"]},{"name":"Kids on the Slope","picture":"kids-on-the-slope","genre":["Music","Slice of life","Romance"]},{"name":"Dragonball","picture":"dragonball","genre":["Action","Shounen"]},{"name":"Tamako Market","picture":"tamako-market","genre":["Slice of life","Romance"]},{"name":"The Promised Neverland","picture":"promised-neverland","genre":["Adventure","Thriller","Dark"]},{"name":"Howl's Moving Castle","picture":"howls-moving-castle","genre":["Adventure","Romance"]},{"name":"Silver Spoon","picture":"silver-spoon","genre":["Slice of life"]},{"name":"No.6","picture":"no6","genre":["Thriller","Adventure","Sci fi"]},{"name":"Yuru Camp","picture":"yuru-camp-s2","genre":["Slice of life"]},{"name":"Eizouken ni wa Te wo Dasu na!","picture":"eizouken","genre":["Slice of life","Comedy"]},{"name":"The Irresponsible Captain Tylor","picture":"irresponsible-captain-tylor","genre":["Comedy","Sci fi","Adventure"]},{"name":"Adolescense of Utena","picture":"utena","genre":["Drama"]},{"name":"Fantastic Children","picture":"fantastic-children","genre":["Adventure","Mystery"]},{"name":"Re:Creators","picture":"re-creators","genre":["Isekai","Action","Shounen","Mecha"]},{"name":"Laputa: Castle In The Sky","picture":"laputa","genre":["Adventure"]},{"name":"Bloom Into You","picture":"bloom-into-you","genre":["Romance","Drama"]},{"name":"Ghost Hound","picture":"ghost-hound","genre":["Mystery"]},{"name":"Simoun","picture":"simoun","genre":["Mystery","Romance","Sci fi"]},{"name":"Doughnuts Under A Crescent Moon","picture":"doughnuts-under-a-crescent-moon-manga","genre":["Romance","Slice of life"]},{"name":"Maria is watching us","picture":"mari-mite","genre":["Romance","Drama"]},{"name":"After Hours","picture":"after-hours-manga","genre":["Romance"]},{"name":"R.O.D the TV","picture":"rod","genre":["Action","Adventure","Comedy"]},{"name":"Catch These Hands!","picture":"catch-these-hands-manga","genre":["Comedy","Romance","Slice of life"]},{"name":"Canaan","picture":"canaan","genre":["Action","Adventure","Romance"]},{"name":"Hayate X Blade","picture":"hayate-x-blade-manga","genre":["Action","Comedy"]},{"name":"Whispered Words","picture":"whispered-words-manga","genre":["Comedy","Drama","Romance"]},{"name":"New Game!","picture":"new-game","genre":["Comedy"]},{"name":"School Zone","picture":"school-zone","genre":["Comedy","Romance"]}];

// select a background image
function selectBackground() {
    var DAY_LIMIT = 6;
    var NIGHT_LIMIT = 9;

    var hour = new Date().getHours();
    var isDay = hour >= 6 && hour < 18;
    var bgNum = 1+Math.floor(Math.random() * (isDay ? DAY_LIMIT : NIGHT_LIMIT));
    var bg = (isDay ? "day-" : "night-")+bgNum;

    if (isDay) {
      document.body.classList.add('day');
      document.body.classList.remove('night');
    } else {
      document.body.classList.add('day');
      document.body.classList.remove('night');
    }

    document.body.setAttribute('bg', bg);
}

function slugify(str) {
  str = str.toLowerCase();
  str = str.replace("'", "");
  str = str.replace(/ \(.*\)/, '');
  str = str.split(/[ _/-]+/).join('-');
  return str;
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

function expandComingSoon() {
  let elem = document.getElementById('coming-soon');
  if (elem !== null) {
    elem.classList.remove('coming-soon--less');
    elem.classList.add('coming-soon--more');
  }
}

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

  // pick a random recommendation
  console.log('Top 10: '+top10.length+' items');
  let index = Math.floor(Math.random() * top10.length);
  console.log('Top 10: item '+index);
  let top10pick = top10[index];
  console.log('Top 10:', top10pick);

  document.getElementById('recommendation__name').innerHTML = top10pick.name;
  let url = 'images/series/'+top10pick.picture+'.png';
  document.getElementById('recommendation__picture').setAttribute('src', url);

  let genres = top10pick.genre.map((genre) => {
    let slug = slugify(genre);
    return `<span class="genre genre-${slug}" data-genre="${slug}">${genre}</span>`;
  }).join(' ');
  document.getElementById('recommendation__genre').innerHTML = genres;
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