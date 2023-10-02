// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.


// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
// let a=parseInt(prompt("lütfen bir sayı giriniz"));
// let b=parseInt(prompt("lütfen bir sayı giriniz"));
// const multiply = (a, b) => a * b;
// alert(multiply(a,b));
// console.log(multiply(a,b));
// document.write(multiply(a,b));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
// let sentence=prompt("lütfen bir cümle giriniz");
// const kelimeSayisi = (cumle) => cumle.split(" ").length;
// console.log(kelimeSayisi("asjgda as jahdj asjdh asda"));
// console.log(kelimeSayisi(sentence));
// alert(kelimeSayisi(sentence));




// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

let n=parseInt(prompt("lütfen bir sayi girin"));
const factorial = (n) => {
    if (n === 0 || n === 1) return 1; // for loop daha mantıklı
    return n * factorial(n - 1); // 5 * 4 * 3 * factorial(2), , , 2 * factorial(1),
  };
  console.log((factorial(5)));;

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
// let num=parseInt(prompt("lütfen bir sayi girin"));
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
const findMax = (arr) => Math.max(...arr);

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
const sumNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
const sumNumbers2 = (arr) => arr.reduce((acc, num) => acc + num, 0);

// Buradan itibaren yalnızca arrow function kullanıyoruz.

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
const reverseString = (str) => str.split('').reverse().join('');

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın. (Kopya çekmek yok. Mantık kurmaya çalışın)
const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
const findDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  };
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
const countCharacter = (str, char) => {
    const charRegExp = new RegExp(char, 'g');
    const matches = str.match(charRegExp);
    return matches ? matches.length : 0;
  };

// BONUS - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.
const sumNumbersInString = (str) => {
    const numberRegExp = /\d+/g;
    const numbers = str.match(numberRegExp) || [];
    return numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);
  };