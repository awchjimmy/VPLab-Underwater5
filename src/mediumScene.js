var mediumState = {
  preload: preload,
  create: create,
  update: update,
  render: render
}

function preload() {
  game.load.image('bg2', './assets/bg5.jpg')
}
function create() {
  game.add.image(0, 0, 'bg2')
}
function update() {
  updateCameraViaKeyboard()
}
function render() { }