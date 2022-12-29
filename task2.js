// 2. Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4
//    nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam
//    program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga
//    untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
//    90 - 100 = A
//    80 - 89 = B
//    70 - 79 = C
//    60 - 69 = D
//    0 - 59 = E

const mtk = 60;
const BahasaIndonesia = 90;
const BahasaInggris = 89;
const ipa = 69;

let total = mtk + BahasaIndonesia + BahasaInggris + ipa;
let hitung = total / 4;
let test = true;

try {
  switch (test) {
    case hitung >= 0 && hitung <= 59:
      console.log(`Rata-rata = ${hitung}\nGrade = E`);
      break;
    case hitung >= 60 && hitung <= 69:
      console.log(`Rata-rata = ${hitung}\nGrade = D`);
      break;
    case hitung >= 70 && hitung <= 79:
      console.log(`Rata-rata = ${hitung}\nGrade = C`);
      break;
    // kondisi tidak apa jika tidak dalam scope apapun
    case hitung >= 80 && hitung <= 89:
      console.log(`Rata-rata = ${hitung}\nGrade = B`);
      break;
    case hitung >= 90 && hitung <= 100:
      console.log(`Rata-rata = ${hitung}\nGrade = A`);
      break;
    default:
      console.log('anda wajib mengulang');
      break;
  }
} catch (error) {
  console.log(`pastikan yang diinputkan adalah angka ${error}`);
}
