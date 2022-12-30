//3. Buatlah program yang memiliki satu variabel dengan nama “printSegitiga”
//   yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

const printSegitiga = (angka) => {
  try {
    if (typeof angka === 'number' === false) throw 'inputan wajib angka'
    let num = ''
    for (let i = angka; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        num += `${j + 1} `
      }
      num += '\n'
    }
    return num
  } catch (err) {
    return err
  }
}

console.log(printSegitiga(5))
