// 使用class关键字来定义一个类
/* 
  对象中主要包含了两个部分：
      属性
      方法
 */
class Person {

  // 定义属性
  name: string = '孙悟空'
  age: number = 18

  // 定义方法
  sayHello() {
    console.log('hello,大家好!')
  }
}

const per = new Person()

console.log(per.age)
