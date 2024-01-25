export class Dog {
  constructor(name) {
    this.name = name
  }

  woof(content) {
    return content
  }

  hungry() {
    this.woof('汪汪汪')
  }
}
