// 多态：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。

// DEMO: 对于鸭子和狗子来说，其都可以叫，只不过当我们让它们叫时，一个“嘎嘎”叫，一个“汪汪”叫。

class Dog {
  constructor() {}

  bark() {
    console.log('woof! woof!');
  }
}

class Duck {
  constructor() {}

  bark() {
    console.log('quack! quack!');
  }
}

const makesound = (obj) => {
  obj.bark()
}

const dog = new Dog()
const duck = new Duck()

makesound(dog)
makesound(duck)