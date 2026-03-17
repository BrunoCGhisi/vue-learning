export class User {
  constructor(id, name, age, skills=[], isOn = false) {
    this.id = id;
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


