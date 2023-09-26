// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
let myArray = ["Cem", "Soyad", 30, true, ["muz", "elma"], ["pizza", "makarna"]];

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0] = "Mert";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.
console.log(myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.push("Köpek");
let newLengthAfterPush = myArray.length;
console.log(newLengthAfterPush);

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.unshift("Kedi");
let newLengthAfterUnshift = myArray.length;
console.log(newLengthAfterUnshift);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let deletedItem = myArray.pop();
console.log(deletedItem);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let deletedFirstItem = myArray.shift();
console.log(deletedFirstItem);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
let newArray = [deletedFirstItem, deletedItem, newLengthAfterUnshift, newLengthAfterPush];

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
let combinedArray1 = myArray.concat(newArray);
let combinedArray2 = [...myArray, ...newArray];

// 10- myArray içerisinde eleman olarak "Veli" var mı ?
let hasVeli = myArray.includes("Veli");

// 11- myArray içersinide 4.elemandan itibaren patates var mı?
let hasPatates = myArray[4].includes("patates");

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
let firstFruitIndex = myArray[4].indexOf("muz");

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
let firstThreeOfNewArray = newArray.slice(0, 3);
console.log(firstThreeOfNewArray);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
firstThreeOfNewArray.splice(1, 1, "YeniEleman1", "YeniEleman2");

// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin
firstThreeOfNewArray = firstThreeOfNewArray.filter(item => item !== "SilinenEleman");
firstThreeOfNewArray[1] = "DeğiştirilenEleman";
firstThreeOfNewArray.push("YeniEleman");

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
let finalString = firstThreeOfNewArray.join("+");
console.log(finalString);