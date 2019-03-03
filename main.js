const ball = document.querySelector('#ball')
const wrap = document.querySelector('.wrap')

let xmouse,
  ymouse,
  dx,
  dy,
  x = wrap.clientWidth / 2,
  y = wrap.clientHeight / 2,
  key

wrap.addEventListener('mousemove', function (e) {
  xmouse = e.clientX
  ymouse = e.clientY
})

const followMouse = () => {

  key = requestAnimationFrame(followMouse)

  if (xmouse && ymouse) {
    dx = (xmouse - x) * 0.125
    dy = (ymouse - y) * 0.125
    if (Math.abs(dx) + Math.abs(dy) < 0.1) {
      x = xmouse
      y = ymouse
    } else {
      x += dx
      y += dy
    }
  }

  ball.style.top = y + 'px'
  ball.style.left = x + 'px'
}