var width = 5000
var height = 600

var game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update,
  render: render
});
var cursors

var fish
var fishCount = 50
var fishCollection = []
var keyCollection = []

function preload() {
  game.load.image('bg1', './assets/bg1.jpg')

  populateKeyCollection()
  _.forEach(keyCollection, function (keyname) {
    game.load.image(`${keyname}`, `./assets/${keyname}.png`)
  })
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.image(0, 0, 'bg1')
  game.world.setBounds(0, 0, width, height)
  cursors = game.input.keyboard.createCursorKeys()



  for (let i = 0; i < fishCount; i++) {
    let randomKeyname = keyCollection[_.random(keyCollection.length-1)]
    fish = game.add.sprite(_.random(width), _.random(height), `${randomKeyname}`)
    fish.scale.setTo(_.random(0.3, 0.5, true))
    game.physics.enable(fish, Phaser.Physics.ARCADE);
    fish.body.allowRotation = false
    fish.body.velocity.set(20)
    fish.body.collideWorldBounds = true

    fishCollection.push(fish)
  }
}

function update() {

  if (cursors.up.isDown) {
    game.camera.y -= 4
  }
  else if (cursors.down.isDown) {
    game.camera.y += 4
  }
  if (cursors.left.isDown) {
    game.camera.x -= 4
  }
  else if (cursors.right.isDown) {
    game.camera.x += 4
  }
}

function render() {
  // game.debug.cameraInfo(game.camera, 32, 32)
  // game.debug.spriteInfo(fish, 32, 192)
}

// update acceleration every 2 secs
setInterval(() => {
  fishCollection.forEach((fish) => {
    fish.body.acceleration.set(_.random(-20, 20), _.random(-20, 20))
  })
}, 2000)

function populateKeyCollection () {
  keyCollection = ['fish001', 'fish002', 'fish003', 'fish004', 'fish005', 'fish006', 'fish007']
}