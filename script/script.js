// У стдентів повинні бути наступні властивості: university, course, fullName, вони
// передаються при створенні студента(в конструктор).

// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
// м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
// курс, учбовий заклад та імені студента.

// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
// Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5,
// 4, 4, 5, 5]

// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу
// – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок,
// просто повертається завжди null замість масиву оцінок)

// // Створіть метод this.recover, який дозволить поновити студента

class Student {
  constructor(university, course, fullName, marks) {
    this.isExpelled = true;
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.renewedMarks = [];
  }

  getInfo() {
    return `Студент ${this.course} курсу, ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    return this.marks;
  }

  set getMarks(value) {
    this.marks.push(value);
  }

  getAverageMark() {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  }

  isDismissed() {
    if ((this.isExpelled = false)) this.marks = null;
    return "Студент відрахований";
  }

  recoverStudent() {
    if ((this.isExpelled = true));
    this.renewedMarks = this.marks;
    return "Студента поновлено";
  }
}

const studentOstap = new Student(
  "Вища Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер",
  [5, 4, 4, 5]
);

console.log(studentOstap.getInfo());
console.log(studentOstap.getMarks);
studentOstap.getMarks = 5;
console.log(studentOstap.getMarks);
console.log(studentOstap.getAverageMark());
console.log(studentOstap.isDismissed());
console.log(studentOstap.recoverStudent());




// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
//
// Бюджетний студент може отримати стипендію за допомогою методу
// // this.getScholarship. Отримання стипендії супроводжується виведенням інформації
// // в консоль: Ви отримали 1400 грн. стипендії
// //
//  Метод отримання стипендії автоматично викликається кожні 30 секунд післе
// // створення об'єкту. Підказка: викликайте його в constructor
// // Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище
// // або дорівнює 4.0
// //
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно
// // :) )

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setInterval(() => this.getScholarship(), 30000)
  }
  getScholarship() {
    if (this.getAverageMark() >= 4) {
      console.log(`Ви отримали 1400 грн. стипендії`);
    } else {
      this.getAverageMark() < 4; 
      {
        console.log(`Середній бал вашої оцінки не дозволяє Вам отримати стипендію`);
      }
    }
  }
}
const budgetStudentKoguhko = new BudgetStudent("Університет ім. Івана Франка","1",
  "Когушко Семен Петрович", [5, 4, 4, 5]);
budgetStudentKoguhko.getScholarship();
