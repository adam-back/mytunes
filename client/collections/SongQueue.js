// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    // this.on('play', this.playFirst, this);
    this.on('add', this.enqueue, this);
    // this.on('remove', this.dequeue, this);
    // this.on('ended', this.ended, this);

    // Songs.prototype.initialize.apply(this, arguments);

    // this.on('add', function(song){
    //   if(this.at(0) === song) {
    //     this.playFirst();
    //   }
    // });

    // this.on('remove', function(song){
    //   if(this.at(0) !== song && this.at(0) !== undefined) {
    //     this.playFirst();
    //   }
    // });
  },

  //enqueue:
  enqueue: function(song) {
    if(this.length === 1){
      this.playFirst();
    }
  },

  //dequeue:

  //ended

  playFirst: function() {
    this.at(0).play();
  }


});


