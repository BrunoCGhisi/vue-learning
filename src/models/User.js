export class User {
  constructor(name, age, skills=[], isOn = false) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.isOn = isOn;
  }

  changeStatus() {
    this.isOn = !this.isOn;
  }

  isOlder() {
    if (this.age >18){
      return true;
    }
    else{
      return false;
    }
  }
}
