var app = {};

app.time = {
  'hours': null,
  'minutes': null,
  'seconds': null
};

app.rotate = function(id, degrees) {
  console.log(id, degrees);
  var el = document.getElementById( id );
  console.log(el);
  el.style.transform = 'rotate(' + degrees + 'deg)';
};

app.main_loop = function(){

  var _self          = app;
  var date           = new Date();
  
  _self.time.seconds = date.getSeconds();
  _self.time.minutes = date.getMinutes();
  _self.time.hours   = date.getHours();
  
  var secondPosition = _self.time.seconds * 6;
  var minutePosition = _self.time.minutes * 6;
  var hourPosition   = _self.time.hours * 30 + ( _self.time.minutes / 2 );

  _self.rotate('seconds', secondPosition);
  _self.rotate('minutes', minutePosition);
  _self.rotate('hours', hourPosition);

  // requestAnimationFrame( app.main_loop );

};

app.run = function(){
  var _self = app;
  window.setTimeout(function(){
    _self.main_loop();
  },0);
}();