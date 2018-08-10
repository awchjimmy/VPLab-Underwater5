/**
 * Full credits go to Holy Spirit
 * for the fantastic idea and endless prayer.
 * Praise the Lord.
 */

var shallowState = function (game) { }

shallowState.prototype = {
  // vars
  width: 5000,
  height: 600,
  cursors: null,
  fishCount: 50,
  fishCollection: [],
  fishKeyCollction: ['fish001', 'fish002', 'fish003', 'fish004', 'fish005', 'fish006', 'fish007'],
  intervalCollection: [],

  // funcs
  preload: function () {
    this.game.load.image('bg1', './assets/bg1.jpg')

    this.game.load.image('fish001', './assets/fish001.png')
    this.game.load.image('fish002', './assets/fish002.png')
    this.game.load.image('fish003', './assets/fish003.png')
    this.game.load.image('fish004', './assets/fish004.png')
    this.game.load.image('fish005', './assets/fish005.png')
    this.game.load.image('fish006', './assets/fish006.png')
    this.game.load.image('fish007', './assets/fish007.png')
  },

  create: function () {
    // game engine settings
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // camera
    this.initCamera()

    this.game.add.image(0, 0, 'bg1')

    // console.log(this.fishCollection)
    this.createFishCollection()
  },

  update: function () {
    this.updateCameraViaKeyboard()
  },

  render: function () {
    // this.game.debug.cameraInfo(this.game.camera, 32, 32)
  },

  createFishCollection: function () {
    for (let i = 0; i < this.fishCount; i++) {
      let x = _.random(this.width)
      let y = _.random(this.height)
      let rndKeyname = this.fishKeyCollction[_.random(this.fishKeyCollction.length - 1)]
      let whale = this.game.add.sprite(x, y, rndKeyname)
      this.game.physics.enable(whale, Phaser.Physics.ARCADE) // after enable physics, there is sprite.body, kinda cool
      whale.body.collideWorldBounds = true
      // console.log(whale)

      whale.scale.set(_.random(0.3, 0.5, true))
      whale.body.velocity.set(_.random(20))
      // random acceleration
      this.intervalCollection.push( setInterval(() => whale.body.acceleration.set(_.random(-20, 20), _.random(-20, 20)), 2000) )

      this.fishCollection.push(whale)
    }
  },

  initCamera: function () {
    // // set bounds for camera
    this.game.world.setBounds(0, 0, this.width, this.height)
    // // set keyboard for camera control
    this.cursors = this.game.input.keyboard.createCursorKeys()
  },

  updateCameraViaKeyboard: function () {
    if (this.cursors.up.isDown) {
      // this.releaseIntervalCollection()
      // this.game.state.start('Shallow')
    } else if (this.cursors.down.isDown) {
      this.releaseIntervalCollection()
      this.game.state.start('Medium')
    }
    if (this.cursors.left.isDown) {
      this.game.camera.x -= 4
    } else if (this.cursors.right.isDown) {
      this.game.camera.x += 4
    }
  },

  releaseIntervalCollection: function () {
    this.intervalCollection.forEach(intervalId => {
      clearInterval(intervalId)
    })
  }
}