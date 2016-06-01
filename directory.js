angular.module('directoryApp', [])
  .controller('directoryController', function(){
      var dirList = this;
      dirList.toggle = false
      dirList.list = [
        {name: 'Scott', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'},
        {name: 'Courtney', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/abbsol/128.jpg'},
        {name:'Ross', age: 33, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
        {name: 'Jamal', age:27, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/krystynheide/128.jpg'}
      ];
      dirList.addPerson = function() {
         dirList.list.push({name: dirList.name, age: dirList.age});
         dirList.name =''
         dirList.age = 0
      };
  });


