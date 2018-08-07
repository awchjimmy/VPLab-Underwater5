let production = false

let canvas = document.querySelector('#c')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d')

let fps = production ? 60 : 30
let CAMERA_DELTA = 14

ctx.fillRect(20, 20, 20, 20)

// background image
let bgurl = 'https://images.wallpaperscraft.com/image/fish_coral_underwater_73114_1600x900.jpg'
let bg = new Image()
bg.src = bgurl

// camera
class Camera {
    constructor () {
        this.x = 0
        this.y = 0
        this.width = 600
        this.height = window.innerHeight
    }

    render() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        ctx.drawImage(bg, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height)
    }
}
let camera = new Camera()
setInterval(() => {camera.render()}, 1000 / fps)

// keyboard
window.addEventListener('keydown', handleKeyboardInput)
function handleKeyboardInput (e) {
    switch (e.keyCode) {
        case 65: // A: left
            if(camera.x - CAMERA_DELTA > 0) {
                camera.x -= CAMERA_DELTA
            }
            break
        case 68: // D: right
            if(camera.x + CAMERA_DELTA < window.innerWidth - camera.width/2) {
                camera.x += CAMERA_DELTA
            }
            break
        default:
            alert(e.keyCode)
    }
}