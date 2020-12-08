/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let likeFilm = prompt('Один из последних просмотренных фильмов?');
// let appraisalFilm = prompt('На сколько оцените его?');
// let likeFilm2 = prompt('Один из последних просмотренных фильмов?');
// let appraisalFilm2 = prompt('На сколько оцените его?');

// personalMovieDB.movies[likeFilm] = appraisalFilm;
// personalMovieDB.movies[likeFilm2] = appraisalFilm2;
// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('no ok!!!');
// };

// const num = 50;
// if (num < 49) {
//     console.log('Eror');
// } else if (num > 100) {
//     console.log('biiig!');
// } else {
//     console.log('ok!');
// };

// // тернарный оператор - потому что в его работе учавствует аж три аргумента
// (num === 50) ? console.log('Ok!') : console.log('Error!');
// (num === 23) ? console.log('Yeas!!') : console.log('Nooo!');

// // бинарный аргумент
// 4 + 4;

// // унирный агрумент
// +4;

// //условие которое провряет ТОЛЬКО СТРОГОЕ РАВЕНСТВО
// switch (num) {
//     case 49: 
//         console.log('ne 49!');
//         break;
//     case 100: 
//         console.log('ne 100!');
//         break;
//     case 50: 
//         console.log('winner!');
//         break;
//     default:
//         console.log('not today(');
//         break;
// };

//let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         //break; //полностью оастанавливает цикл, если условие правдиво console: 12345
//         continue; //позволяет пропустить тот круг цикла, который правдив console: 12345 7
//     }
//     console.log(i);
// }







// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// let likeFilm = prompt('Один из последних просмотренных фильмов?');
// let appraisalFilm = prompt('На сколько оцените его?');
// let likeFilm2 = prompt('Один из последних просмотренных фильмов?');
// let appraisalFilm2 = prompt('На сколько оцените его?');
// for (let i = 0; i < 2; i++) {
//     const likeFilm = prompt('Один из последних просмотренных фильмов?', '');
//     const appraisalFilm = prompt('На сколько оцените его?', '');
//     if (likeFilm != null && appraisalFilm != null && likeFilm != '' && appraisalFilm != '' && likeFilm.length < 50 && appraisalFilm.length < 50 ) {
//         personalMovieDB.movies[likeFilm] = appraisalFilm;
//         console.log('yeass!!');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// let i = 0;
// while (i < 2) {
//     const likeFilm = prompt('Один из последних просмотренных фильмов?', '');
//     const appraisalFilm = prompt('На сколько оцените его?', '')
//     i++;
//     if (likeFilm != null && appraisalFilm != null && likeFilm != '' && appraisalFilm != '' && likeFilm.length < 50 && appraisalFilm.length < 50 ) {
//         personalMovieDB.movies[likeFilm] = appraisalFilm;
//         console.log('yeass!!');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// let i = 0;
// do { 
//     const likeFilm = prompt('Один из последних просмотренных фильмов?', '');
//     const appraisalFilm = prompt('На сколько оцените его?', '')
//     i++;
//     if (likeFilm != null && appraisalFilm != null && likeFilm != '' && appraisalFilm != '' && likeFilm.length < 50 && appraisalFilm.length < 50 ) {
//         personalMovieDB.movies[likeFilm] = appraisalFilm;
//         console.log('yeass!!');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);

// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }

//personalMovieDB.movies[likeFilm] = appraisalFilm;
//personalMovieDB.movies[likeFilm2] = appraisalFilm2;
// console.log(personalMovieDB);

// let num = 10; //глобальная переменная
// function showFirstMessage (text) {
//     console.log(text);
//     let num = 10; //локальная переменная
    
// }
// showFirstMessage('hello world!');

// // вид функции function declaration 
// function calc(a, b) {
//     return (a + b); // после ретерн ничего не пишем потому что оно не выполнится 
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// // вид функции стрклочная функция
// const calc a => a + b; //если один аргумент скобки можно убрать
// const calc (a, b) => a + b; //если функция в одну строчку фигурные скобки можно убрать
// const calc (a, b) => { return a + b };
// const calc (a, b) => { 
//     console.log('hello world');
//     return a + b;
// };

// // -------------------------- МЕТОДЫ --------------------------------
// let string = 'Hello World!';

// console.log(string.length); //12
// console.log(string.toUpperCase()); //HELLO WORLD!
// console.log(string.toLowerCase()); //hello world!
// console.log();

// let fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit')); //5
// console.log(fruit.indexOf('q')); //-1 такой буквы нет в строке

// const logg = 'Hello World!';
// console.log(logg.slice(6)); //World!
// console.log(logg.slice(6, 12)); //World!
// console.log(logg.slice(-6, -1)); //World можно обрезать считая с конца строки

// console.log(logg.substring(6, 12)); //World!

// console.log(logg.substr(6, 3)); //Wor //6 - с какой буквы начинать обрезать, 3-сколько букв отрезать

// let number = 12.2;
// console.log(Math.round(number)); //12

// let number2 = '12.2px';
// console.log(parseInt(number)); //12 это уже числовой тип данных!
// console.log(parseFloat(number)); //12.2





// // ---------------- ПРАКТИКА 3 - Ф У Н К Ц И И ----------------------
// let numberOfFilms;

// function start () {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//   // пока одно из условий будет правдиво, мы будем повторять вопрос
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// } 

// start();

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const likeFilm = prompt('Один из последних просмотренных фильмов?', '');
//         const appraisalFilm = prompt('На сколько оцените его?', '');
//         if (likeFilm != null && appraisalFilm != null && likeFilm != '' && appraisalFilm != '' && likeFilm.length < 50 && appraisalFilm.length < 50 ) {
//             personalMovieDB.movies[likeFilm] = appraisalFilm;
//             console.log('yeass!!');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();

// function detectedPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//             alert('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count < 30) {
//             alert('Вы классический зритель');
//         } else if (personalMovieDB.count > 30) {
//             alert('Вы киноман');
//         } else {
//             alert('Произошла ошибка');
//         }
// }
// detectedPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for( let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
//     }
// }
// writeYourGenres();
// console.log(personalMovieDB.genres);
// console.log(personalMovieDB);


//CALLBACK 
// function two (a, b) {
//     console.log(a * b);
// }
// function first (callback) {
//     console.log('Сначала выполняется это');
//     callback();
// }
// first(function() {
//     two(2, 2);
// });


// // ---------------- ОБЪЕКТЫ И МЕТОДЫ ОБЪЕКТОВ ----------------------
// const object = {
//     name: 'test',
//     height: 1069,
//     weight: 1069,
//     colors: {
//         border: 'blue',
//         bg: 'red'
//     }
// };

// delete object.name; // метод удаляет ключ-значение
// console.log(object);// из объекта исчез name: 'test'


// for (let key in object) {
//     if (typeof(object[key]) === 'object') {
        
//         for (let key2 in object[key]) {
//             console.log(`своство ${key2} имеет значение ${object[key][key2]}`);
//         }
//     } else {
//         console.log(`своство ${key} имеет значение ${object[key]}`);
//     }
// };

// счетчик, который считает кол-во ключ-значений в объекте
// let counter = 0;
// for (let key in object) {
//     counter++;
// }
// console.log(counter);

// console.log(Object.keys(object).length);

//деструктуризация
// const {border, bg} = object.colors;
// console.log(border);



// // ----------------- МАССИВЫ ------------------------------ 
// const arr = [1, 2, 3, 6, 8];
// arr[99] = 'b';
// console.log(arr);
// arr.pop(); //удаление с конца
// console.log(arr);
// arr.push(10); // добавление в конец
// console.log(arr);
// arr.shift(); //удаление с начала
// console.log(arr);
// arr.unshift(0); // добавление в начало
// console.log(arr);

// //пребираем массив метод1
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// //перебираем массив метод2
// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// // 0: 0 внутри массива 0,2,3,6,10
// // 1: 2 внутри массива 0,2,3,6,10
// // 2: 3 внутри массива 0,2,3,6,10
// // 3: 6 внутри массива 0,2,3,6,10
// // 4: 10 внутри массива 0,2,3,6,10

// // сортировка чисел с функцией сравнивания
// const num = [2, 56, 23, 10, 3, 6];
// num.sort(sortNum);

// function sortNum(a, b) {
//     return a - b;
// }
// console.log(num);

// // преобразование строки в массив и наоборот
// const a = prompt('', '');
// const product = a.split(' ');
// console.log(product.join('; '));



// // -------------- ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ --------------------
//копирование примитивов ЭТО ДЕЙСТВТЕЛЬНО КОПИЯ предача по значению
// let  a = 5,
//      b = a; // сюда попадает копия структуры элемента let  a
// console.log(b = b + 5); // изменили копию
// console.log(a); // оригинал не изменился

// //копирование объектов А ТУТ ПРОСТО ССЫЛКА НА ОРИГИНАЛ передача по ссылке
// const obj = {
//     a: 1,
//     b: 2
// };
// const newObj = obj; // сюда попадает ссылка на объект const obj, а не структура
// newObj.a = 0; // изменили копию
// console.log(newObj); 
// console.log(obj); // оригинал тоже изменился



// // СПОСОБЫ КАК СОХДАВАТЬ КОПИИ ОБЪЕКТОВ, МАССИВОВ  т.д.
// // 1. использование цикла  
// function copy(mainObj) {
//     let objCopy = {};

//     let key; //запускаем перебирающую конструкцию
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]; // мы пройдем по оригиналу скопируем там все свойства и вставим в копию
//     }

//     return objCopy; // возвращаем копию, чтобы как то с ней взаимодействовать
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);
// // но если попробовать изменить объект в объекте, то изменения будут происходить и в оригинале потому что это поверхностная копия объекта
// newNumbers.c.x = 11;
// console.log(newNumbers);
// console.log(numbers);

// 2. Object.assign() метод, который позволяет соединить сразу несколько объектов
// const add = {
//     d: 17,
//     e: 20
// };
//                        // объект к которому нужно добавить
// console.log(Object.assign(numbers, add));
//                                 // объект который нужно добавить

// // так же можно и в пустой объект добавить существующий, при этом 
// const clone = Object.assign({}, add);                                
// clone.d = 20;
// console.log(add);
// console.log(clone);

// // 3. +метод для создания копии массива
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'bbb';
// console.log(newArray);
// console.log(oldArray);

// // 4. SPREAT оператор разворота
// //пример 1
// const video = ['youtube', 'vimeo', 'rutube'];
// const blogs = ['wordpresss', 'livejournale', 'blogger'];
// const internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// // пример 2
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// // представь что эти цифры это определенные данные, которые пришли с сервера
// // 2 - ссылка на сам источник
// // 5 = ссылка на заглушку, т.е. то, что стоит на превью видео
// // 7 - автор
// const numbe = [2, 5, 7];
// log(...numbe);


// // пример 3
// const orig = ['a', 'b'];
// const cop = [...orig];
// cop[0] = 'aaa';
// console.log(cop);
// console.log(orig);

// // пример 4
// const order = {
//     one: 1,
//     two: 2
// };
// const copyOrder = {...order};
// copyOrder.one = 111;
// console.log(copyOrder);
// console.log(order);


// // -------------------- ПРОТОТИП --------------------------
// устарелый вариант 
// let soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('hello!!!');
//     }
// };

// let jonh = {
//     health: 100
// };
 
// jonh.__proto__ = soldier;   // !!!!!!!!!!!!!!
// console.log(jonh.armor);

// современные варианты
// устранавливает прототип soldier для jonh
// Object.setPrototypeOf(jonh, soldier);  // !!!!!!!!!!!
// console.log(jonh.armor);

// создает объект с определенным прототипом
   // код читается так: мы создаем новый объект jonh который будет прототитно наследоваться от soldier
// const jonh = Object.create(soldier);
// console.log(jonh.sayHello());

// получает этот прототип
// Object.getPrototypeOf
// let jonh = Object.create(soldier);
// console.log(Object.getPrototypeOf(jonh) === soldier);



// // ----------------- ПРАКТИКА 4 - О Б Ъ Е К Т Ы --------------------
// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         // пока одно из условий будет правдиво, мы будем повторять вопрос
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const likeFilm = prompt('Один из последних просмотренных фильмов?', '');
//             const appraisalFilm = prompt('На сколько оцените его?', '');
//             if (likeFilm != null && appraisalFilm != null && likeFilm != '' && appraisalFilm != '' && likeFilm.length < 50 && appraisalFilm.length < 50 ) {
//                 personalMovieDB.movies[likeFilm] = appraisalFilm;
//                 console.log('yeass!!');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectedPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//                 alert('Просмотрено довольно мало фильмов');
//             } else if (personalMovieDB.count < 30) {
//                 alert('Вы классический зритель');
//             } else if (personalMovieDB.count > 30) {
//                 alert('Вы киноман');
//             } else {
//                 alert('Произошла ошибка');
//             }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i < 4; i++) { 
//             let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
    
//             if (genre === null || genre === '') {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach(function(item, ind, arr) {
//             console.log(`Любимый жанр #${ind + 1} - это ${item}`);
//         })
//     }
// };
// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectedPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// console.log(personalMovieDB.genres);



// let x = 5;
// console.log(x++);

// console.log([] + false - null + true);

// let y = 1;
// let x = y = 2;
// console.log(x);
// console.log(y);

// console.log([] + 1 + 2);

// console.log('1'[0]);

// let privat = true;

// const toggle = () => {
//     privat = !!privat;

//     return privat;
// };


// console.log((2 && 2 && 1 && 3));

// let a = true;
// let b = false;
// console.log(!!(a && b));
// console.log((a && b));

// console.log((null || 2 && 3 || 4)); // 3

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b); //false

// alert(+'Infinity'); //infinity

// alert('Ежик' > 'яблоко'); //false

// alert(0 || '' || 2 || undefined || true || false); // 2



// --------- ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ -----------------------
// // превращение в строку
// const a = 5;
// // 1
// console.log(typeof(String(a))); // string
// // 2
// console.log(typeof(5 + '')); // string



// // превращение в number 
// const b = '3';
// // 1 - метод 
// console.log(typeof(Number(b))); // number
// // 2 - унарный плюс
// console.log(typeof(+b)); // number
// // 3 - из единиц измерения
// console.log(typeof(parseInt('15px', 10))); // number
// console.log(typeof(parseFloat('15.50px', 10))); // number

// // превращение в boolean 
// // false - 0, '', null, undefined, NaN
// // true - массивы, объекты, переменные
// // 1
// let swicher = null;
//  if(swicher) {
//      console.log('Its true');
//  } else {
//      console.log('Its false, because its null or 0 or "" or undefined');
//  }

// swicher = 1;

// if(swicher) {
//     console.log('Its true');
// } else {
//     console.log('Its false, because its null or 0 or "" or undefined');
// }

// // 2
// console.log(typeof(Boolean('1'))); // boolean

// // 3
// console.log(typeof(!!'1')); // boolean
// let x = 12;
// if(!x) {
//     console.log('true');
// } else {
//     console.log('false');
// }