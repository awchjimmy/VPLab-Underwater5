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
  cursors: null,
  fishCount: 30,
  fishCollection: [],
  fishKeyCollction: ['fish101', 'fish102', 'fish103', 'fish104', 'fish105', 'fish106', 'fish107', 'fish108', 'fish109', 'fish110'],
  intervalCollection: [],

  // funcs
  preload: function () {
    this.game.load.image('bg2', './assets/bg2.jpg')
    this.game.load.image('ruler2', './assets/ruler2.png')

    this.game.load.image('fish101', './assets/fish101.png')
    this.game.load.image('fish102', './assets/fish102.png')
    this.game.load.image('fish103', './assets/fish103.png')
    this.game.load.image('fish104', './assets/fish104.png')
    this.game.load.image('fish105', './assets/fish105.png')
    this.game.load.image('fish106', './assets/fish106.png')
    this.game.load.image('fish107', './assets/fish107.png')
    this.game.load.image('fish108', './assets/fish108.png')
    this.game.load.image('fish109', './assets/fish109.png')
    this.game.load.image('fish110', './assets/fish110.png')
  },

  create: function () {
    // game engine settings
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // camera
    this.initCamera()

    this.game.add.image(0, 0, 'bg2')
    let ruler = this.game.add.image(100, 100, 'ruler2')
    ruler.scale.set(0.7)
    ruler.fixedToCamera = true

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

      whale.scale.set(_.random(0.4, 0.6, true))
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
      this.releaseIntervalCollection()
      this.game.state.start('Shallow')
    } else if (this.cursors.down.isDown) {
      this.releaseIntervalCollection()
      this.game.state.start('Deep')
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