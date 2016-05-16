var app = {};

app.time = {
  'hours': null,
  'minutes': null,
  'seconds': null
};

app.run = function(){
  var _self = this;
  window.setInterval(function(){
    window.requestAnimationFrame(_self.main_loop)
  }, 17);
};

app.main_loop = function(){
  // 
  // do things
  // 
  
  var date          = new Date();

  this.time.seconds = date.getSeconds();
  this.time.minutes = date.getMinutes();
  this.time.hours   = function(){
    var _hours = date.getHours();
    if(_hours > 12){
      return hours - 12;
    }
  }();

}

