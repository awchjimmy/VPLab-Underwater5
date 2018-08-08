var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update,
  render: render
});
var cursors

function preload() {
  game.load.image('bg1', 'http://127.0.0.1:8887/assets/bg1.jpg')
  game.load.image('tropicalfish', 'http://127.0.0.1:8887/assets/tropicalfish.png')
}

function create() {
  game.add.image(0, 0, 'bg1')

  let tropicalfish1 = game.add.image(500, 300, 'tropicalfish')
  tropicalfish1.scale.setTo(0.3, 0.3)

  game.world.setBounds(0, 0, 1000, 526)
  cursors = game.input.keyboard.createCursorKeys()
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
  game.debug.cameraInfo(game.camera, 32, 32);
}