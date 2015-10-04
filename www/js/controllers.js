angular.module('starter.controllers', [])

.controller('tabCtrl', function($scope){
  $scope.txnAlertCount = 1
  $scope.$on('decrementTxnAlert', function(){
    $scope.txnAlertCount = 0
  })
})

.controller('WelcomeCtrl', function($scope, $state){
  $scope.email = 'kathy@advertising.com'
  $scope.password = '231412341234'
  $scope.login = function(){
    console.log('going to transactions')
    $state.go('tab.account')
  }
})

.controller('TransactionsCtrl', function($scope, $ionicPopup, $timeout) {
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
    {date:'10/3', approved:true, description:'Amazon', amount: randomAmount(100), details: 'feeling tired today. forgot to take meds in AM.'},
    {date:'10/2', approved:true, description:'Instacart', amount: randomAmount(100), details: generateDetails(2)},
    {date:'10/1', approved:false, description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/30', approved:true, description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/29', approved:true, description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/28', approved:true, description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/27', approved:true, description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/26', approved:false, description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/25', approved:true, description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/24', approved:true, description:'Instacart', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/23', approved:true, description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)},
    {date:'9/22', approved:true, description:'Amazon', amount: randomAmount(100), details: generateDetails(Math.random()*3)}
  ];

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Approve this transaction?',
      template: '' +
        '<div class="item item-divider row">' +
        '  <div class="date col">10/4</div>' +
        '  <div class="description col">Amazon</div>' +
        '  <div class="amount col">$623.99</div>' +
        '</div>'
    });
    confirmPopup.then(function(res) {
      $scope.txns.unshift({date:'10/4', approved:true, description:'Amazon', amount: 623.99, details: 'manic behavior, possible shopping spree alert.'})
      $scope.$emit('decrementTxnAlert');
    });
  };

  $timeout($scope.showConfirm, 1000);
})

.controller('AccountCtrl', function($scope) {
  $scope.cards = [{
      title: 'Card for Concierge Fee',
      number: 'xxxx xxxx xxxx 5678',
      name: 'Agnes Filtcher',
      zip: 67890,
      expiry: '11/20',
      security: 'xxx'
  },{
    title: 'Card for Purchases',
  }]

  $scope.approvalThresholdAmount = 500;
});
