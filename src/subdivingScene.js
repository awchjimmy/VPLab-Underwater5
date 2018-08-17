/**
 * Full credits go to Holy Spirit
 * for the fantastic idea and endless prayer.
 * Praise the Lord.
 */

var subdivingState = function (game) { }

subdivingState.prototype = {
  // vars
  bgm: null,

  // funcs
  preload: function () {

    this.game.load.spritesheet('sp_sub', './assets/sp_sub.png', 800, 600, 65)
    this.game.load.audio('bgm3', './assets/bgm3.mp3', true)
  },

  create: function () {

    // bgm
    this.bgm = this.game.add.audio('bgm3', 1, true)
    this.bgm.play()

    let sub = this.game.add.sprite(0, 0, 'sp_sub')
    let anim = sub.animations.add('diving')
    anim.onComplete.add(function(){
      this.game.state.start('Medium')
    }, this)
    anim.play(10, false)
  },

  update: function () {
  },

  render: function () {
  },




}
