//3. Buatlah program yang memiliki satu variabel dengan nama “printSegitiga”
//   yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

const printSegitiga = 6;

const print = (printSegitiga) => {
  try {
    if (typeof printSegitiga === 'number') {
      for (let i = printSegitiga; i >= 1; i--) {
        let num = '';
        for (let j = 1; j <= i; j++) {
          num += j + ' ';
        }
        console.log(num);
      }
    }
  } catch (error) {
    console.log(`Pastikan Inputan Data harus number ${error}`);
  }
};

print(printSegitiga);
