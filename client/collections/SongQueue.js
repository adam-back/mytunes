// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    Songs.prototype.initialize.apply(this, arguments);

    this.on('add', function(song){
      if(this.at(0) === song) {
        this.playFirst();
      }
    });



  },

  playFirst: function() {


    this.at(0).play();
  }


});


