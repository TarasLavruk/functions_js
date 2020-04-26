// FUNCTIONS HOMEWORK

// HW 1

// function getCube(a) {
// 	return a * a * a; }
// let a = +prompt('enter your number please');
// let res = getCube(a);
// alert(res);
	
// HW 2

// function calcNum (a, b, c) {
// 	return (a + b) / c;
// }
// let a = +prompt('enter first number please');
// let b = +prompt('enter second number please');
// let c = +prompt('enter third number please');
// let res = calcNum(a, b, c);
// alert(res);

// HW 3


// let arr = ['ponedilok', 'vivtorok', 'sereda', 'chetver', 'piatnytsya', 'subota', 'nedilya'];
// function getDay (i) {
// 	return arr[i-1];
// }
// let i = +prompt('enter your number please', '1-7');
// let day = getDay(i)
// alert(day);

// HW 4

// function getFactor(n) {
// let x = 1;
// for (let i = 1; i <= n; i++) {
//     x = x * i;
// }   alert(x);    
// }
// let n = +prompt('number');
// let factor = getFactor(n);
   
// HW 5

// function getSec (a, b, c) {
// 	return 3600 * a + 60 *b + c;
// }
// let a = +prompt('enter number of hours please');
// let b = +prompt('enter number of minutes please');
// let c = +prompt('enter number of seconds please');
// let res = getSec(a, b, c);
// alert(res);

// HW 6

// function getTime (a) {
// 	let h = Math.floor(a / 3600);
// 	let m = Math.floor((a % 3600) / 60);
// 	let s = (a % 3660) % 60;
// 	return array = [h, m, s];
// }

// let a = +prompt('enter number of seconds please');

// let time = getTime(a);

// if (array[0] >= 24) {
// 	alert('more than one day')
// }
// alert(`${array[0]} hours, ${array[1]} minutes, ${array[2]} seconds`);

// HW 7

// - Зручний і компактний синтаксис;
// - Стрілкова функція не має власного контексту 'this', а використовує this з контексту;
// - У стрілкової функції немає змінної 'arguments';
// - У стрілкової функції немає 'super';
// - Стрілкові функції не можуть бути викликані з 'new'