<template>
  <div id="app">
  <div class="slide">
    <div id="list" class="grid">
      <img class="item" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100" />
      <img class="item" src="https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&ixlib=rb-1.2.1&q=80&w=100" />
    </div>
  </div>
  <div id="content">
    <span id="tip">拖动图片放置于此</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutView',
 setup() {
    let dragging = false
let cloneEl = null
let initial = {}
let queue = []

document.getElementById('list').addEventListener('mousedown', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('item') && !cloneEl) {
    document.getElementById('app').classList.add('active')
    // 选中了元素
    cloneEl = e.target.cloneNode(true)
    cloneEl.classList.add('flutter')
    // 模拟一个随机大小的"原图"，实际业务中不存在
    const fakeSize = parseInt(100 * randomNum(3, 5))
    // 初始化数据
    init(e, { width: e.target.offsetWidth }, fakeSize, Math.random())
    // 加载"原图"
    simulate(cloneEl.src.replace(/w=100/g, 'w=' + fakeSize), initial.flag)

    e.target.parentElement.appendChild(cloneEl)
    dragging = true
    e.target.classList.add('hide') // 放在最后
    queue.push(() => {
      e.target.classList.remove('hide')
    })
  }
})

window.addEventListener("mousemove", (e) => {
  if (dragging && cloneEl) {
    moveFlutter(e.pageX - initial.offsetX, e.pageY - initial.offsetY, distance(e))
  }
})

document.getElementById('content').addEventListener("mouseup", (e) => {
  if (e.target.id !== 'content') {
    const lostX = e.x - document.getElementById('content').getBoundingClientRect().left
    const lostY = e.y - document.getElementById('content').getBoundingClientRect().top
    done(lostX, lostY)
  } else { done(e.offsetX, e.offsetY) }
})

// 鼠标抬起
window.addEventListener("mouseup", (e) => {
  dragging = false
  document.getElementById('app').classList.remove('active')
  setTimeout(() => { end() }, 10)
})
// 鼠标离开了视窗
document.addEventListener("mouseleave", (e) => {
  end()
})
// 用户可能离开了浏览器
window.onblur = () => {
  end()
}

// 结束处理（动画）
function end() {
  dragging = false
  if (!cloneEl) { return }
  cloneEl.classList.add('is_return')
  changeStyle([`left: ${initial.pageX - initial.offsetX}px`, `top: ${initial.pageY - initial.offsetY}px`, 'transform: scale(1)'])
  setTimeout(() => {
    queue.length && queue.shift()()
    cloneEl && cloneEl.remove()
    cloneEl = null
  }, 300)
}
// 完成处理
function done(x, y) {
  if (!cloneEl) { return }
  const newEl = cloneEl.cloneNode(true)
  newEl.classList.remove('flutter')
  newEl.src = cloneEl.getAttribute('raw')
  newEl.style.cssText = `left: ${x - initial.offsetX}px; top: ${y - initial.offsetY}px;`
  document.getElementById('content').appendChild(newEl)
  cloneEl.remove()
  cloneEl = null
  queue.length && queue.shift()()
}

// 改变漂浮元素（合并多个操作）
function moveFlutter(x, y, d = 0) {
  // const scale = null // TODO: 关闭缩放
  const scale = d ? initial.width + d <= initial.fakeSize ? `transform: scale(${(initial.width + d) / initial.width})` : null : null
  const options = [`left: ${x}px`, `top: ${y}px`]
  scale && options.push(scale)
  changeStyle(options)
}
function changeStyle(arr) {
  const original = cloneEl.style.cssText.split(';')
  original.pop()
  cloneEl.style.cssText = original.concat(arr).join(';') + ';'
}

// 记录鼠标初始化事件
function init({ offsetX, offsetY, pageX, pageY }, { width }, fakeSize, flag) {
  initial = { offsetX, offsetY, pageX, pageY, width, fakeSize, flag }
  moveFlutter(pageX - offsetX, pageY - offsetY)
}

// 计算两点之间距离
function distance({ pageX, pageY }) {
  const { pageX: x, pageY: y } = initial
  const b = pageX - x;
  const a = pageY - y;
  // return Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2))

  return Math.hypot(b, a)
}

// 加载原图通常需要时间，利用缓存来优化卡顿
function simulate(url, flag) {
  cloneEl.setAttribute('raw', url)
  const image = new Image()
  image.src = url
  image.onload = function () {
    // 异步任务，克隆节点可能会先被清理
    cloneEl && initial.flag === flag && (cloneEl.src = url)
  }
}

function randomNum(n, m) {
  return Math.random() * (m - n) + n
}
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.active {
  cursor: grabbing;
}
.hide {
  opacity: 0;
}

.flutter {
  position: absolute;
  z-index: 9999;
  pointer-events: none;
}

.slide {
  width: 260px;
  height: 100%;
  overflow: scroll;
  border-right: 1px solid rgba(0,0,0,.15);
  #list {
    user-select: none;
    .item {
      background: rgba(0,0,0,.15);
      transform-origin: top left;
      width: 120px;
      display: inline-block;
      break-inside: avoid;  
      margin-bottom: 4px;
    }
    .item:hover {
      cursor: grab;
      transform: scale(1.02);
      filter: brightness(90%);
    }
    .item:active {
      cursor: grabbing;
    }
    .is_return {
      transition: all 0.3s;
    }
  }
  .grid {
      column-count: 2;
      column-gap: 0px;
  }
}
.slide::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

#content {
  position: relative;
  flex: 1;
  height: 100%;
  margin-left: 45px;
  background: rgba(0,0,0,.07);
  .item {
    position: absolute;
    transform-origin: top left;
  }
  #tip {
    color: #999999;
    font-size: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>