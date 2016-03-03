if (annyang){
  console.log('running annyang')



  var greeting = function() {
    console.log('i hear you')
    alert('HELLO THERE')
    // $('#greeting').alert('Hello!');
  }

  var showFlickr = function(tag) {
    var url = 'http://api.flickr.com/services/rest/?tags='+tag;
    $.getJSON(url);
    console.log('flicker tag results go here')
  }

  var calculateStats = function(month) {
    $('#stats').text('Statistics for '+month);
  }

  function repeatName (name) {
    alert('your name is ' + name)
  }

  function repeat (words) {
    alert('you said ' + words)
  }

  function add (num1, num2) {
    alert(num1 + ' + ' + num2 + ' = ' + (parseInt(num1) + parseInt(num2)))
  }

  var commands = {
    // annyang will capture anything after a splat (*) and pass it to the function.
    // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
    'show me *tag': showFlickr,

    // A named variable is a one word variable, that can fit anywhere in your command.
    // e.g. saying "calculate October stats" will call calculateStats('October');
    'calculate :month stats': calculateStats,

    // By defining a part of the following command as optional, annyang will respond to both:
    // "say hello to my little friend" as well as "say hello friend"
    // 'hello': greeting
    'hello': greeting,

    'what is your name' : function () {alert('ANNYANG')},

    'my name is :name' : repeatName,

    'repeat *words' : repeat,

    'add :num1 (and) (plus) :num2' : add

  };

  annyang.addCommands(commands)
  annyang.debug()
  var options = {
    autoRestart : true
  }
  annyang.start(options);

  // // Tell KITT to use annyang
  // SpeechKITT.annyang();

  // // Define a stylesheet for KITT to use
  // SpeechKITT.setStylesheet('http://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');

  // // Render KITT's interface
  // SpeechKITT.vroom();
}

// if (annyang) {
//   // Let's define a command.
//   var commands = {
//     'hello': function() { alert('Hello world!'); }
//   };

//   // Add our commands to annyang
//   annyang.addCommands(commands);

//   // Start listening.
//   annyang.start();
// }