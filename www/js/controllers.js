angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup, $timeout) {
  function randomAmount(max){
    return Math.round(Math.random()*100*max)/100
  }

  function generateDetails (n) {
    var sentences = []
    var verb = ['feeling', 'was', 'sounded', 'appeared', 'noted as being']
    var adjective = ['Accepted','Accomplished','Aggravated','Alone','Amused','Angry','Annoyed','Anxious','Apathetic','Ashamed','Awake','Bewildered','Bitchy','Bittersweet','Blah','Blank','Blissful','Bored','Bouncy','Calm','Cheerful','Chipper','Cold','Complacent','Confused','Content','Cranky','Crappy','Crazy','Crushed','Curious','Cynical','Dark','Depressed','Determined','Devious','Dirty','Disappointed','Discontent','Ditzy','Dorky','Drained','Drunk','Ecstatic','Energetic','Enraged','Enthralled','Envious','Exanimate','Excited','Exhausted','Flirty','Frustrated','Full','Geeky','Giddy','Giggly','Gloomy','Good','Grateful','Groggy','Grumpy','Guilty','Happy','High','Hopeful','Hot','Hungry','Hyper','Impressed','Indescribable','Indifferent','Infuriated','Irate','Irritated','Jealous','Jubilant','Lazy','Lethargic','Listless','Lonely','Loved','Mad','Melancholy','Mellow','Mischievous','Moody','Morose','Naughty','Nerdy','Numb','Okay','Optimistic','Peaceful','Pessimistic','Pissed off','Pleased','Predatory','Quixotic','Recumbent','Refreshed','Rejected','Rejuvenated','Relaxed','Relieved','Restless','Rushed','Sad','Satisfied','Shocked','Sick','Silly','Sleepy','Smart','Stressed','Surprised','Sympathetic','Thankful','Tired','Touched','Uncomfortable','Weird'].map(function(adj){ return adj.toLowerCase(); })
    while (sentences.length < (Math.floor(n) || 1)) {
      var sentence = verb[Math.floor(Math.random()*verb.length)] +' '+ adjective[Math.floor(Math.random()*adjective.length)] + '.'
      sentences.push(sentence)
    }
    return sentences.join(' ')
  }

  $scope.txns = [
    {date:'10/4', description:'Amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'10/3', description:'Instacart', amount: randomAmount(100), details: generateDetails(2)},
    {date:'10/2', description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'10/1', description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/30', description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/29', description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/28', description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/27', description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/26', description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/25', description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/24', description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/23', description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/22', description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)}
  ];

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Approve this transaction?',
      template: '' +
        '<div class="item item-divider row" ng-click="showDiv = !showDiv">' +
        '  <div class="date col">10/4</div>' +
        '  <div class="description col">Amazon</div>' +
        '  <div class="amount col">$623.99</div>' +
        '</div>'
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };

  $timeout($scope.showConfirm, 2000);
})

.controller('AccountCtrl', function($scope) {
  $scope.conciergeCard = {
    number: '1234 5678 1234 5678',
    name: 'Agnes Filtcher',
    zip: 12345,
    expiry: '10/18',
    security: 123
  }

  $scope.conciergeCard = {
    number: '1234 5678 1234 5678',
    name: 'Agnes Filtcher',
    zip: 12345,
    expiry: '10/18',
    security: 123
  }

  $scope.approvalThresholdAmount = 500;
});
