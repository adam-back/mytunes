// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    Songs.prototype.initialize.apply(this, arguments);
  },


});

SongQueue.prototype.playFirst = function() {
  //call the function play
  // this.play();
};
