// 1. Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
//    name (string)
//    age(number)
//    hobbies (array) minimal 3 elements
//    IsMaried (boolean)
//    schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” ) minimal 3 elements
//    skills (Array of Object) with key skillName and level (beginner, advanced, expert) minimal 2 elements
//    interestInCoding (Boolean)

const data = {
  name: 'Iqbal',
  age: 23,
  hobbies: ['memancing', 'game', 'berkebun'],
  IsMarried: false,
  schoolList: [
    {
      name: 'UPI YPTK',
      yearIn: 2017,
      yearOut: 2022,
      major: 'Sistem Informasi',
    },
  ],
  skills: [
    {
      skillName: 'Programming',
      level: 'beginner',
    },
    {
      skillName: 'Grapic Design',
      level: 'advanced',
    },
    {
      skillName: 'Game',
      level: 'expert',
    },
  ],
  interestInCoding: true,
};

console.log(data);
