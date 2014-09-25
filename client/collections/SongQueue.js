// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    Songs.prototype.initialize.apply(this, arguments);

    this.on('add', function(song){
      if(this.at(0) === song) {
        this.playFirst();
      }
    });

    this.on('remove', function(song){
      if(this.at(0) !== song && this.at(0) !== undefined) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {

    this.at(0).play();
  }


});


