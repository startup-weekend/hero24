angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  function randomAmount(max){
    return Math.round(Math.random()*100*max)/100
  }
  $scope.txns = [
    {date:'10/4', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'10/3', description:'instacart', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'10/2', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'10/1', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/30', description:'instacart', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/29', description:'instacart', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/28', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/27', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/26', description:'instacart', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/25', description:'instacart', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/24', description:'instacart', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/23', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'9/22', description:'amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'}
  ];
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
