const constants = [2.72, 3.14, 9.81, 37, 100];
// E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
const [E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp] = constants;

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
const [fin, est, sw, den, nor] = countries;

const rectangle = { width: 20, height: 10, area: 200, perimeter: 60 };
// Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.
const { width, height, area, perimeter } = rectangle;

const users = [
  { name: "Brooks", scores: 75, skills: ["HTM", "CSS", "JS"], age: 16 },
  { name: "Alex", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
  { name: "David", scores: 75, skills: ["HTM", "CSS"], age: 22 },
  { name: "John", scores: 85, skills: ["HTML"], age: 25 },
  { name: "Sara", scores: 95, skills: ["HTM", "CSS", "JS"], age: 26 },
  { name: "Martha", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
  { name: "Thomas", scores: 90, skills: ["HTM", "CSS", "JS"], age: 20 }];
  
// Kullanıcılar dizisini Iterator ve destructuring kullanarak nesnenin tüm anahtarlarını alın.
for (const user of users) {
  const { name, scores, skills, age } = user;
  console.log(Object.keys(user));
}

// İkiden az beceriye sahip kişileri bulun.
const lessSkilledUsers = users.filter((user) => user.skills.length < 2);
console.log(lessSkilledUsers);

// Tüm ülkelerin adını, sermayesini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın.
const countriesData = {
  Finland: { capital: "Helsinki", population: 5521698, language: "Finnish" },
  Estonia: { capital: "Tallinn", population: 1324820, language: "Estonian" },
  Sweden: { capital: "Stockholm", population: 10365705, language: "Swedish" },
  Denmark: { capital: "Copenhagen", population: 5793636, language: "Danish" },
  Norway: { capital: "Oslo", population: 5391369, language: "Norwegian" },
};

for (const [country, { capital, population, language }] of Object.entries(
  countriesData
)) {
  console.log(
    `Country: ${country}, Capital: ${capital}, Population: ${population}, Language: ${language}`
  );
}
// Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır. Aşağıdaki dizi adını da, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine tek bir satırda destructuring işlemi uygulayın.

const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;
console.log(name, skills, htmlScore, cssScore, jsScore, reactScore);



// Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.
function convertArrayToObject(array) {
  return array.map((x) => {
    const [name, skills, scores] = x;
    return {
      name,
      skills,
      scores,
    };
  });
}
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
console.log(convertArrayToObject(students));

// Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent değişkenine kopyalayın ve yeni özellikleri ekleyin.

// frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin

// · backEnd beceri setlerine 9. seviye Express'i ekleyin

// · dataBase beceri setlerine seviye 8 ile SQL ekleyin

// · dataScience beceri setlerine seviye olmadan SQL ekleyin

const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontEnd: [...student.skills.frontEnd, { skill: "BootStrap", level: 8 }],
    backEnd: [...student.skills.backEnd, { skill: "Express", level: 9 }],
    dataBase: [...student.skills.dataBase, { skill: "SQL", level: 8 }],
    dataScience: [...student.skills.dataScience, "SQL"],
  },
};

console.log(newStudent);
