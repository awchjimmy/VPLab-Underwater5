var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update,
  render: render
});
var cursors
var tropicalfish1
var fishCollection = []

function preload() {
  game.load.image('bg1', './assets/bg1.jpg')
  game.load.image('tropicalfish', './assets/tropicalfish.png')
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.image(0, 0, 'bg1')
  game.world.setBounds(0, 0, 1000, 526)
  cursors = game.input.keyboard.createCursorKeys()



  for (let i = 0; i < 3; i++) {
    tropicalfish1 = game.add.sprite(_.random(800), _.random(600), 'tropicalfish')
    tropicalfish1.scale.setTo(_.random(0.2, 0.3, true))
    game.physics.enable(tropicalfish1, Phaser.Physics.ARCADE);
    tropicalfish1.body.allowRotation = false
    tropicalfish1.body.velocity.set(20)
    tropicalfish1.body.collideWorldBounds = true

    fishCollection.push(tropicalfish1)
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
  game.debug.cameraInfo(game.camera, 32, 32)
  game.debug.spriteInfo(tropicalfish1, 32, 192)
}

// update acceleration every 2 secs
setInterval(() => {
  fishCollection.forEach((fish) => {
    fish.body.acceleration.set(_.random(-20, 20), _.random(-20, 20))
  })
}, 2000)