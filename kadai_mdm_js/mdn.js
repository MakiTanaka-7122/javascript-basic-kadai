// プログラムを実行した日付を取得できるnew Dateを格納
const today = new Date();

// 年・月・日・曜日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
console.log(`${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`);