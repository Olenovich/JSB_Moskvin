// Конструктор Студента
function Student(name, surname, birthYear, course) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.course = course;
  this.grades = [];
  this.attendance = [];
  this.classesPerCourse = [10, 12, 15];

  this.addGrade = function (grade) {
    this.grades.push(grade);
  };

  this.addAttendance = function (attended) {
    this.attendance.push(attended);
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };

  this.getAverageAttendance = function () {
    if (this.attendance.length === 0) return 0;
    const sum = this.attendance.reduce((acc, attended) => acc + attended, 0);
    return sum / this.attendance.length;
  };

  this.getAttendedClasses = function () {
    return this.attendance.filter(attended => attended).length;
  };

  this.changeCourse = function (newCourse) {
    this.course = newCourse;
    this.grades = [];
    this.attendance = [];
  };

  this.getStudentInfo = function () {
    return `${this.name} ${this.surname}, рік народження: ${this.birthYear}, курс: ${this.course}`;
  };
}

Student.prototype.addCourse = function (newCourse) {
  this.classesPerCourse.push(18);
};

Student.prototype.removeCourse = function (courseIndex) {
  this.classesPerCourse.splice(courseIndex, 1);
};

// Створення нового студента
const student = new Student('Олексій', 'Москвін', 1992, 1);
student.addGrade(4);
student.addGrade(5);
student.addAttendance(true);
student.addAttendance(false);

// Додавання курсу
student.addCourse(2);

console.log(student.getStudentInfo());
console.log(student.getAverageGrade());
console.log(student.getAverageAttendance());
console.log(student.getAttendedClasses());

student.removeCourse(0);
console.log(student.classesPerCourse);

// Конструктор Групи
function Group() {
  this.students = [];

  this.addStudent = function (student) {
    this.students.push(student);
  };

  this.removeStudent = function (studentIndex) {
    this.students.splice(studentIndex, 1);
  };

  this.getAttendanceRating = function () {
    return this.students.sort((a, b) =>
      a.getAverageAttendance() > b.getAverageAttendance() ? -1 : 1
    );
  };

  this.getGradesRating = function () {
    return this.students.sort((a, b) =>
      a.getAverageGrade() > b.getAverageGrade() ? -1 : 1
    );
  };
}

// Створення нової групи та додавання студентів
const group = new Group();
group.addStudent(student);

console.log(group.getAttendanceRating());
console.log(group.getGradesRating());
