// 2. Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4
//    nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam
//    program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga
//    untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
//    90 - 100 = A
//    80 - 89 = B
//    70 - 79 = C
//    60 - 69 = D
//    0 - 59 = E

function nilai(hitung) {
  switch (true) {
    case hitung >= 0 && hitung <= 59:
      return 'E';
    case hitung >= 60 && hitung <= 69:
      return 'D';
    case hitung >= 70 && hitung <= 79:
      return 'C';
    case hitung >= 80 && hitung <= 89:
      return 'B';
    case hitung >= 90 && hitung <= 100:
      return 'A';
    case hitung >= 100 && hitung <= 500:
      return 'A+';
    default:
      return 'anda wajib mengulang';
  }
}

const mtk = 10;
const bahasaIndonesia = 100;
const bahasaInggris = 90;
const ipa = 70;

const jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa;
const NilaiRataRata = jumlah / 4;
const hasil = nilai(NilaiRataRata);

try {
  if (mtk >= 500 || mtk <= 0 || bahasaIndonesia >= 500 || bahasaIndonesia <= 0 || bahasaInggris >= 500 || bahasaInggris <= 0 || ipa >= 500 || ipa <= 0) throw 'error';
  if (typeof mtk !== 'number' || typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' || typeof ipa !== 'number') throw 'inputan harus berupa angka';
  console.log(`Rata-Rata = ${NilaiRataRata}`);
  console.log(`Grade = ${hasil}`);
} catch (err) {
  console.log(err);
}
