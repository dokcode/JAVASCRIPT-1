//a.  Ubahlah data  tersebut menggunakan spread operator menjadi:
//    name: nama anda
//    email: email anda
//    hobby: hobi anda

let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

//merubah nilai dengan spread operator
let dataBaru = { ...data, name: 'Muhamad Iqbal Aprido', email: 'iqbalapreedo@gmail.com', hobby: 'Programming' };

console.log(dataBaru);
