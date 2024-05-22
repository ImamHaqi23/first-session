/*
Gunakan npm dayjs (https://www.npmjs.com/package/dayjs) untuk menyelesaikan tugas ini.
Convert Unix timestamp menjadi tanggal dengan format DD/MM/YYYY
*/

const dayjs = require('dayjs');

function convertUnixToDate(unixTimestamp) {
  // Code here
  const date = dayjs.unix(unixTimestamp).format('DD/MM/YYYY');
  console.log(date);
}

convertUnixToDate(1710867600); // Output: 20/03/2024
convertUnixToDate(1714150800); // Output: 27/04/2024
