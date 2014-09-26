// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);
  },

  enqueue: function(song) {
    if(this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(song) {
    if(this.at(0) === song) {
      this.remove(song);
      this.playFirst();
    } else {
      this.remove(song);
    }
  },

  ended: function(song) {
    this.dequeue(song);
  },

  playFirst: function() {
    if(this.at(0)) {
      this.at(0).play();
    } else {
      this.stopPlaying();
    }
  },

  stopPlaying: function() {
    this.trigger('stop');
  }

});


