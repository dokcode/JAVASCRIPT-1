//3. Buatlah program yang memiliki satu variabel dengan nama “printSegitiga”
//   yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

const validasi = (printSegitiga) => {
  //error handling
  try {
    if (printSegitiga === '') throw 'null';
    if (isNaN(printSegitiga) || typeof printSegitiga === 'boolean') throw ' inputan validasi bukan angka';
    printSegitiga = Number(printSegitiga);
  } catch (err) {
    console.log(err);
  }
};

const print = (printSegitiga) => {
  validasi(printSegitiga);
  if (printSegitiga === true) {
    num = 0;
  }
  //Looping//
  let num = '';
  for (let i = printSegitiga; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      num += j + ' ';
    }
    num += '\n';
  }
  return num;
};
//print inputan
console.log(print(6));
