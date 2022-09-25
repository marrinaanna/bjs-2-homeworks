"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  if (a == 0) {
    arr.push(-c / b);
    return arr;
  }
  let det = b ** 2 - 4 * a * c;
  if (det >= 0) {
    if (det == 0) {
      arr.push(-b / (2 * a));
    } else {
      arr.push((-b + Math.sqrt(det)) / (2 * a));
      arr.push((-b - Math.sqrt(det)) / (2 * a));
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
