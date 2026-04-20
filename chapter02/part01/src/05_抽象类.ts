(function () {
  abstract class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }

    abstract sayHello(): void
  }

  class Dog extends Animal {

    sayHello() {
      // super.sayHello()
      console.log(`汪汪汪汪！`);
    }
  }

  class Cat extends Animal {
    sayHello(): void {
      console.log('喵喵喵喵!')

    }
  }

  const dog = new Dog('旺财')
  dog.sayHello()


})();