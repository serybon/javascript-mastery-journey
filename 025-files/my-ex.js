const fs = require('fs');
//Данные для записи
let data = "Данные для записи в файл";
data = "Нет, вот эти данные";
fs.writeFile('C:\\Users\\bnd\\Desktop\\js_folder\\example.txt', data, 'utf8', (err) => {
    if (err) {
        console.error("Ошибка при записи файла: ", err);
        return;
    }
    console.log("Файл был успешно записан в файл example.txt")
})
//Асинхронное чтение из файла
fs.readFile(`C:\\Users\\bnd\\Desktop\\js_folder\\example.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла', err);
        return;
    }
    console.log("Содержимое файла: ", data);
});
const person = {
    firstName: 'bob',
    lastName: 'johnson',
    age: 39,
    job: 'manager',
    address: {
        "country": "Belarus",
        "city": "Minsk",
        "street": "Goretskogo",
        "building": 6
    }
}
let jsonString = JSON.stringify(person);
fs.writeFile('C:\\Users\\bnd\\Desktop\\js_folder\\data.json', jsonString, 'utf8', (err) => {
    if (err) {
        console.error("Ошибка при записи файла: ", err);
        return;
    }
    console.log("Файл был успешно записан  в формате json.");
});
fs.readFile('C:\\Users\\bnd\\Desktop\\js_folder\\data.json', 'utf8', (err, person) => {
    if (err) {
        console.log("Ошибка чтения файла json", err);
        return;
    }
    const personRead = JSON.parse(person)
    console.log("Файл json успешно прочитан. ", personRead);
    console.log(personRead.address);

})