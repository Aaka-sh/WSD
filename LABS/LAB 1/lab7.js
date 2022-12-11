angular.module("grocery",[])
.filter('strUpp',function(){
    return function( str ) {
      var revStr = str.split(' ');
      return revStr.map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ');
    }
 })

.controller("groceryctrl",function($scope)
{
    var fooditems=[
        {name:'Amul Milk',price:50, description:'Fresh Cow Milk - Pasturised', category:'Organic', calories:'90'},
        {name:'Almond Cookies',price:150, description:'Almond Cookies made with Honey and Real almonds', category:'Cookies', calories:'190'},
        {name:'Britannia Brown Bread',price:40, description:'Healthy brown bread from the house of Britannia', category:'Bakery', calories:'140'},
        {name:'Peanut Butter',price:230, description:'Crunchy Peanut Butter', category:'Spreads', calories:'190'},
        {name:'Buttermilk',price:20, description:'Spiced Butter Milk', category:'Drinks', calories:'60'},
        {name:'Apples',price:110, description:'Juicy Apples', category:'Organic', calories:'30'}
    ];
    $scope.fd=fooditems;
    $scope.rowlimit=6;
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
      $scope.customStyle = {};
      $scope.turnGreen = function (){
          $scope.customStyle.style = {"color":"green"};
      }
      $scope.fname = " ";  

      $scope.changeColorFilter = function (item){
       
         if (item.category == 'Organic') {
           item.class = 'organic';
        }
        else if(item.category == 'Cookies'){
            item.class= 'cookies';
        }
        else if(item.category == 'Bakery'){
            item.class= 'bakery';
        }
        else if(item.category == 'Spreads'){
            item.class= 'spreads';
        }
        else if(item.category == 'Drinks'){
            item.class= 'drinks';
        }
     
       return true;
        
      };
    });