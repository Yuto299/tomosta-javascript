class Person {
  name;
  birth;

  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  getAge() {
    //年齢を計算する
    const now = new Date();
    let age = now.getFullYear() - this.birth.getFullYear();

    //誕生日がまだ来ていなければ、1引く
    const thisBirth = new Date(now.getFullYear(), this.birth.getMonth(), this.birth.getDate());
    if (now < thisBirth) {
      age--;
    }

    return age;
  }
}
