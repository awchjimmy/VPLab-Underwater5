/**
 * Full credits go to Holy Spirit
 * for the fantastic idea and endless prayer.
 * Praise the Lord.
 */

var mediumState = function (game) { }

mediumState.prototype = {
  // vars
  width: 5000,
  height: 600,
  fishCount: 10,
  fishCollection: [],
  fishKeyCollction: ['fish101', 'fish102', 'fish103'],

  // funcs
  preload: function () {
    this.game.load.image('bg2', './assets/bg2.jpg')

    this.game.load.image('fish101', './assets/fish101.png')
    this.game.load.image('fish102', './assets/fish102.png')
    this.game.load.image('fish103', './assets/fish103.png')
  },

  create: function () {
    // game engine settings
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.initCamera()


    this.game.add.image(0, 0, 'bg2')


    // console.log(this.fishCollection)
    this.createFishCollection()
  },

  update: function () {
    this.updateCameraViaKeyboard()
  },

  render: function () {

  },

  createFishCollection: function () {
    for (let i = 0; i < this.fishCount; i++) {
      let x = _.random(this.width)
      let y = _.random(this.height)
      let rndKeyname = this.fishKeyCollction[_.random(this.fishKeyCollction.length - 1)]
      let whale = this.game.add.sprite(x, y, rndKeyname)
      this.game.physics.enable(whale, Phaser.Physics.ARCADE) // after enable physics, there is sprite.body, kinda cool
      // console.log(whale)

      whale.scale.set(_.random(0.3, 0.5, true))
      whale.body.velocity.set(100, _.random(-15, 15))

      this.fishCollection.push(whale)
    }
  },

  initCamera: function () {
    // // set bounds for camera
    this.game.world.setBounds(0, 0, width, height)
    // // set keyboard for camera control
    this.cursors = this.game.input.keyboard.createCursorKeys()
  },

  updateCameraViaKeyboard: function () {
    if (this.cursors.up.isDown) {
      this.game.state.start('Shallow')
    } else if (this.cursors.down.isDown) {
      this.game.state.start('Medium')
    }
    if (this.cursors.left.isDown) {
      this.game.camera.x -= 4
    } else if (this.cursors.right.isDown) {
      this.game.camera.x += 4
    }
  }

}