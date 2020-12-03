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

// МЕТОДЫ 
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





// ПРАКТИКА 3 - Ф У Н К Ц И И
let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  // пока одно из условий будет правдиво, мы будем повторять вопрос
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
} 

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const likeFilm = prompt('Один из последних просмотренных фильмов?', '');
        const appraisalFilm = prompt('На сколько оцените его?', '');
        if (likeFilm != null && appraisalFilm != null && likeFilm != '' && appraisalFilm != '' && likeFilm.length < 50 && appraisalFilm.length < 50 ) {
            personalMovieDB.movies[likeFilm] = appraisalFilm;
            console.log('yeass!!');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
}
detectedPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for( let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();
console.log(personalMovieDB.genres);
// console.log(personalMovieDB);