class EventBus {
  constructor() {
    this.map = {}
  }
  on(eventName, fn) {
    this.map[eventName] = this.map[eventName] || [];
    this.map[eventName].push(fn);
  }
  emit(eventName, data) {
    this.map[eventName] && this.map[eventName].forEach(fn => fn(data));
  }
  off(eventName, fn) {
    if (this.map[eventName]) {
      if (!fn) {
        delete this.map[eventName]
      } else {
        let index = this.map[eventName].indexOf(fn);
        this.map[eventName].splice(index, 1);
      }
    }
  }
}

// 测试代码
const eventBus = new EventBus()

eventBus.on('click:btn', data => {
  console.log(data);
})
eventBus.emit('click:btn', { a: 1, b: 2 })
eventBus.off('click:btn')
eventBus.emit('click:btn', { a: 1, b: 2 })
