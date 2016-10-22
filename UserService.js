(function(){
  'use strict'

  angular.module('users')
    .service('userService',['$q', UserService]);

    function UserService($q){
      var users = [{
            "name": "Debra",
            "avatar": "https://robohash.org/doloresillonatus.png?size=250x250&set=set1",
            "content": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed"
          }, {
            "name": "Marilyn",
            "avatar": "https://robohash.org/voluptateminventoreid.png?size=250x250&set=set1",
            "content": "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent"
          }, {
            "name": "Steve",
            "avatar": "https://robohash.org/temporablanditiisfacere.png?size=250x250&set=set1",
            "content": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris"
          }, {
            "name": "Ann",
            "avatar": "https://robohash.org/utabconsectetur.png?size=250x250&set=set1",
            "content": "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus"
          }, {
            "name": "Anna",
            "avatar": "https://robohash.org/perferendisvoluptatemnon.png?size=250x250&set=set1",
            "content": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis"
          }, {
            "name": "Phillip",
            "avatar": "https://robohash.org/sapienteomnistempora.png?size=250x250&set=set1",
            "content": "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel"
          }, {
            "name": "Ryan",
            "avatar": "https://robohash.org/nisiautemvitae.png?size=250x250&set=set1",
            "content": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a"
          }, {
            "name": "Norma",
            "avatar": "https://robohash.org/voluptatibusblanditiisimpedit.png?size=250x250&set=set1",
            "content": "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at"
          }, {
            "name": "Anne",
            "avatar": "https://robohash.org/natusautnon.png?size=250x250&set=set1",
            "content": "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis"
          }, {
            "name": "Douglas",
            "avatar": "https://robohash.org/recusandaeconsequunturfugiat.png?size=250x250&set=set1",
            "content": "sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu"
          }]

      // Promise-based API
      return {
        loadAllUsers : function() {
          // Simulate async nature of real remote calls
          return $q.when(users);
        }
      };
    }
})();
