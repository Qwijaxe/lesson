// console.log("Я JavaScript!" );

/* let admin, name;
name = "Джон";
admin = name;
console.log( admin ); */

/* let name = "Ilya";
console.log( `hello ${1}` );
console.log( `hello ${"name"}` );
console.log( `hello ${name}` ); */

/* let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
console.log(a + b); // =3 */

/* let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
	console.log('Верно!');
} else {
	console.log('Не знаете? ECMAScript!');
} */

/* let value = prompt('Введите число', 0);
if (value > 0) {
	console.log( 1 );
} else if (value < 0) {
	console.log( -1 );
} else {
	console.log( 0 );
} */

/* let result;
result = (a + b < 4) ? 'Мало' : 'Много'; */
/* 
let message = (login == 'Сотрудник') ?'Привет' :
 	      (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' :
  	      ''; */

/* if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90); 

let userName = prompt("Кто там?", '');
if (userName == 'Админ') {
  let pass = prompt('Пароль?', '');
  if (pass == 'Я главный') {
    console.log( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    console.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }
} else if (userName == '' || userName == null) {
  console.log( 'Отменено' );
} else {
  console.log( "Я вас не знаю" );
}*/

/* let i = 3;
while (i) {
  console.log( i );
  i--;
} */

/* for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
} */

/* let i = 0;
while (i < 3) {
  console.log( `number ${i}!` );
  i++;
} */

/* let num;
do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num); */

let n = 10;
let i;
let j;

outer: for (i = 2; i <= n; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) continue outer
  }
  console.log(i)
}