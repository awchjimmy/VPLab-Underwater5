/**
 * Full credits go to Holy Spirit
 * for the fantastic idea and endless prayer.
 * Praise the Lord.
 */

var mediumState = function (game) { }

mediumState.prototype = {
  // vars
  fishCount: 3,
  fishCollection: [],

  // funcs
  preload: function () {
    this.game.load.image('bg2', './assets/bg2.jpg')

    this.game.load.image('fish101', './assets/fish101.png')
  },

  create: function () {
    // game engine settings
    this.game.physics.startSystem(Phaser.Physics.ARCADE)


    this.game.add.image(0, 0, 'bg2')


    // console.log(this.fishCollection)
    this.createFishCollection()
  },

  update: function () {
    updateCameraViaKeyboard()
  },

  render: function () {

  },

  createFishCollection: function () {
    for (let i = 0; i < this.fishCount; i++) {
      let whale = this.game.add.sprite(100, 200, 'fish101')
      this.game.physics.enable(whale, Phaser.Physics.ARCADE) // after enable physics, there is sprite.body, kinda cool
      // console.log(whale)

      whale.scale.set(_.random(0.3, 0.5, true))
      whale.body.velocity.set(100, _.random(-15, 15))

      this.fishCollection.push(whale)
    }
  }
}