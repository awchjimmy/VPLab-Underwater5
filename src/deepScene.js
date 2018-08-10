/**
 * Full credits go to Holy Spirit
 * for the fantastic idea and endless prayer.
 * Praise the Lord.
 */

var deepState = function (game) { }

deepState.prototype = {
  // vars
  width: 5000,
  height: 600,
  cursors: null,
  fishCount: 5,
  fishCollection: [],
  fishKeyCollction: ['fish202', 'fish203', 'fish204', 'fish205', 'fish206', 'fish207', 'fish208', 'fish209'],
  intervalCollection: [],

  // funcs
  preload: function () {
    this.game.load.image('bg3', './assets/bg3.jpg')
    this.game.load.image('ruler3', './assets/ruler3.png')

    // this.game.load.image('fish201', './assets/fish201.png')
    this.game.load.image('fish202', './assets/fish202.png')
    this.game.load.image('fish203', './assets/fish203.png')
    this.game.load.image('fish204', './assets/fish204.png')
    this.game.load.image('fish205', './assets/fish205.png')
    this.game.load.image('fish206', './assets/fish206.png')
    this.game.load.image('fish207', './assets/fish207.png')
    this.game.load.image('fish208', './assets/fish208.png')
    this.game.load.image('fish209', './assets/fish209.png')
  },

  create: function () {
    // game engine settings
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // camera
    this.initCamera()

    this.game.add.image(0, 0, 'bg3')
    let ruler = this.game.add.image(100, 100, 'ruler3')
    ruler.scale.set(0.7)
    ruler.fixedToCamera = true

    this.createFish()
    this.intervalCollection.push( setInterval(() => {this.createFish()}, 10000) )
  },

  update: function () {
    this.updateCameraViaKeyboard()
  },

  render: function () {
    // this.game.debug.cameraInfo(this.game.camera, 32, 32)
  },

  // createFishCollection: function () {
  //   for (let i = 0; i < this.fishCount; i++) {
  //     let x = _.random(this.width)
  //     let y = _.random(this.height)
  //     let rndKeyname = this.fishKeyCollction[_.random(this.fishKeyCollction.length - 1)]
  //     let whale = this.game.add.sprite(x, y, rndKeyname)
  //     this.game.physics.enable(whale, Phaser.Physics.ARCADE) // after enable physics, there is sprite.body, kinda cool
  //     whale.body.collideWorldBounds = true
  //     // console.log(whale)

  //     whale.scale.set(_.random(0.6, 0.8, true))
  //     whale.body.velocity.set(_.random(20))
  //     // random acceleration
  //     this.intervalCollection.push(setInterval(() => whale.body.acceleration.set(_.random(0, 10), _.random(-10, 10)), 2000))

  //     this.fishCollection.push(whale)
  //   }
  // },

  createFish: function () {
    let x = _.random(800)
    let y = _.random(this.height)
    let rndKeyname = this.fishKeyCollction[_.random(this.fishKeyCollction.length - 1)]
    let whale = this.game.add.sprite(0, y, rndKeyname)
    whale.anchor.set(1, 0.5)
    this.game.physics.enable(whale, Phaser.Physics.ARCADE) // after enable physics, there is sprite.body, kinda cool
    whale.body.collideWorldBounds = false
    // console.log(whale)
    whale.scale.set(_.random(0.6, 0.8, true))
    whale.body.velocity.set(10)
    // random acceleration
    this.intervalCollection.push(setInterval(() => whale.body.acceleration.set(_.random(0, 10), _.random(-10, 10)), 2000))
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
      this.game.state.start('Medium')
    } else if (this.cursors.down.isDown) {
      // this.releaseIntervalCollection()
      // this.game.state.start('Deep')
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