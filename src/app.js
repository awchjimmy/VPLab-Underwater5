var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update,
  render: render
});
var cursors
var tropicalfish1

function preload() {
  game.load.image('bg1', './assets/bg1.jpg')
  game.load.image('tropicalfish', './assets/tropicalfish.png')
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.image(0, 0, 'bg1')
  game.world.setBounds(0, 0, 1000, 526)
  cursors = game.input.keyboard.createCursorKeys()


  tropicalfish1 = game.add.sprite(500, 300, 'tropicalfish')
  tropicalfish1.scale.setTo(0.3, 0.3)
  game.physics.enable(tropicalfish1, Phaser.Physics.ARCADE);
  tropicalfish1.body.allowRotation = false
  tropicalfish1.body.velocity.set(20, 20)
  tropicalfish1.body.collideWorldBounds = true

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

setInterval(() => {
  tropicalfish1.body.acceleration.set(_.random(-20, 20), _.random(-20, 20))
}, 2000)