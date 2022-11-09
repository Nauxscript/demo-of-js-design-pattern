// 从设计模式来看，原型模式是用于创建对象的一种模式。
// 关键：语言本身是否提供了克隆方法，如 `JavaScript` 的 `Object.create`

// Demo: 通过 Objec.create 克隆对象

const Plane = function () {
  this.blood = 100
  this.attackLevel = 1
  this.defenceLevel = 1
}

const plane = new Plane()
console.log(plane.blood); // 100
console.log(plane.attackLevel); // 1
console.log(plane.defenceLevel); // 1
plane.blood = 80
plane.attackLevel = 2
plane.defenceLevel = 2

const clonePlane = Object.create(plane)
console.log(clonePlane.blood); // 80 
console.log(clonePlane.attackLevel); // 2
console.log(clonePlane.defenceLevel); // 2

clonePlane.blood = 50
console.log(plane.blood); // 80 