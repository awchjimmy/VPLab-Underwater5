var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update,
  render: render
});
var cursors

function preload() {
  game.load.image('bg5', 'http://127.0.0.1:8887/assets/bg5.jpg')
}

function create() {
  game.add.image(0, 0, 'bg5')
  game.world.setBounds(0, 0, 1280, 854)
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