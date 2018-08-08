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
  tropicalfish1.anchor.setTo(0, 0.5)
  game.physics.enable(tropicalfish1, Phaser.Physics.ARCADE);
  tropicalfish1.body.allowRotation = false

}

function update() {
  game.physics.arcade.moveToXY(tropicalfish1, 100, 100, 60, 1500)

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
  game.debug.spriteInfo(tropicalfish1, 32, 32)
}