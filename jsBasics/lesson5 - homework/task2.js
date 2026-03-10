const averageGrade = 85;
let result;

switch (Math.floor(averageGrade / 10)) {
  case 10:
  case 9:
    result = "Отлично";
    break;
  case 8:
    result = "Очень хорошо";
    break;
  case 7:
    result = "Хорошо";
    break;
  case 6:
    result = "Нормально";
    break;
  default:
    result = "Плохо";
}

console.log(result);