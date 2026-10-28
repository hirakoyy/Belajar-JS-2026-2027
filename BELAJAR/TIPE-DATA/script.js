// PRIMITIVE
// 
// string
let myName = "Hiraki"
let alamat = "Bintaro"
let a = "2"
let b ="3"
let c = a+b
console.log(c)
// number
let firstNumber = 9
let secNumber = 4
// daripada
console.log("nama saya " +myName +" dan alamat saya " + alamat)
// mending
console.log(`nama saya ${myName} dan alamat saya ${alamat}`)
// backtick = semuanya string, tinggal pake ${variable} untuk menambah variable, daripada pake "+"
// boolean
let isTrue = true
console.log(isTrue)
let isTrue2 = 2==2
console.log(isTrue2)
let isFalse = false
console.log(isFalse)
let isFalse2 = 2==10
console.log(isFalse2)

// NON PRIMITIVE
// 
// array
// First data starts from 0, not 1
const arrayExample = ['Apple', 'Banana', 'Pear']
console.log(arrayExample)
// First array object
console.log(arrayExample[0])
const arrayCerita = ["Hiraki", "sepeda", "hujan deras", 15, "perpustakaan"]

document.write(`<h2>Cerita array</h2> ${arrayCerita[0]} berangkat ke sekolah menggunakan ${arrayCerita[1]}. Di tengah perjalanan,  ${arrayCerita[2]} turun sehingga ia berteduh di sebuah halte. Setelah menunggu selama ${arrayCerita[3]} menit, hujan mulai reda. ${arrayCerita[0]} kemudian melanjutkan perjalanan dan tiba di ${arrayCerita[4]} sekolah sebelum bel masuk berbunyi.`)

// array
const sate =['ayam', 'ikan']
console.log(sate)

// add data
console.log("array.push")

console.log(sate)
sate.push("babi")
console.log(sate)

// remove last data
console.log("array.pop")

const kue =['putu', 'klepon']
console.log(kue)
kue.pop()
console.log(kue)

// remove first data
console.log("array.shift")

const bakso =['urat', 'samrat']
console.log(bakso)
bakso.shift()
console.log(bakso)

// add first data
console.log("array.unshift")

const ayam =['rebus', 'goreng']
console.log(ayam)
ayam.unshift("crispy")
console.log(ayam)

// Extract
console.log("array.slice(2), cuts/slices 2 first datas")

const buah = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi'];
console.log(buah)
// Extract from index 2 to the very end
const slice = buah.slice(2); 
console.log(slice)

// object
console.log("Object")


let personalData = {name: "Hiraki",age:15, school: "Abu Dzar"}
console.log(personalData)
// object.data
console.log(`Add object data (personalData.hobi = "ngaji")`)
personalData.hobi="ngaji"
console.log(personalData)

const dataCeritaHiraki = {
    nama: "Hiraki",
    status: "siswa",
    usia:15, 
    kendaraan:"sepeda", 
    cuaca:"hujan", 
    menit: 10,
    tempat:"kantin"}

document.write(`<h2>Cerita object</h2>${dataCeritaHiraki.nama}, seorang ${dataCeritaHiraki.status} berusia ${dataCeritaHiraki.usia} tahun, pergi ke sekolah menggunakan ${dataCeritaHiraki.kendaraan}, tetapi karena ${dataCeritaHiraki.cuaca} ia berteduh selama ${dataCeritaHiraki.menit} menit sebelum melanjutkan perjalanan ke ${dataCeritaHiraki.tempat}.`)

// let number= parseInt(prompt("Masukkan data"));
// alert("Data yang anda input adalah " + typeof(number))

// data type conversion
console.log("Converting data types")
let num = 100;
let convertedNum = String(num);

console.log(convertedNum+convertedNum);
console.log(typeof convertedNum);

let year = "2026"
let convertedYear = Number(year);

console.log(convertedYear + 4);
console.log(typeof convertedYear);



