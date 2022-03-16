"# test"

// Что такое Promise и зачем они нужны
// Promise - это специальный объект и набор методов в JavaScript для удобного написания асинхронного кода.
const promise = new Promise(resolve => {
    setTimeout(() => resolve(2), 3000);
  });

  promise
    .then(value => {
      console.log(value);
      return new Promise(resolve => {
        setTimeout(() => resolve(value * 2), 3000);
      });
    })
    .then(value => {
      console.log(value);
      return new Promise(resolve => {
        setTimeout(() => resolve(value * 2), 3000);
      });
    })
    .then(value => console.log(value))


//  При создании new Promise((resolve, reject) => ...) автоматически запускается функция-аргумент, которая должна вызвать resolve(result) при успешном выполнении и reject(error) – при ошибкеМы замораживаем код и ждем пока выполнится промис, а затем продолжаем. Но внутри все работает именно на генераторах

// Конструкция async\await
// Async await позволяет писать асинхронный код, так как будто он является синхронным.
//  Мы замораживаем код и ждем пока выполнится промис, а затем продолжаем. Но внутри все работает именно на генераторах.
async function AiCode() { const getDrink = () => { return new Promise((resolve, reject) => { setTimeout(() => { resolve('Ваш напиток готов!'); }, 1000); }); }; const mDrink = async function () {

const drink = await getDrink();
const [myDrink] = await Promise.all([drink]);
console.log(myDrink,);
}    mDrink(); } AiCode();

// Контекст js в классе this
// This – ключевое слово, ссылается на контекст выполняемой функции.

let user = { name: 'Айдай', say: function() { document.write('Здравствуйте Меня зовут ' + this.name); } } user.say();

// Замыкание в js
// Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.функция, определённая в замыкании, «запоминает» окружение, в котором она была создана. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания. В замыкание код пишется лучше, куда эффективнее и чище.
var counter = (function () {
    var current = 0;
    return function () {
      current++;
      return current;
    }
  })();

  console.log(counter()); // 1
  console.log(counter()); // 2

// Зачем нужны стрелочные функции, разница в функциях
// Стрелочные функции написанный на EC6 нужны для краткого и удобного способа написания кода и уменьшить количество символов при объявлении функции. Стрелочные функции анонимны
let print = mes=> console.log(mes);

print("Hello Metanit.com");
print("Welcome to JavaScript");


// Первое важное различие между обычными и стрелочными функциями — в ключевом слове this. В обычных функциях this очень динамичен, а в стрелочной функции нету this




