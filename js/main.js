{
  // 変数定義
  const title = document.getElementById("title");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const today = document.getElementById("today");
  const body = document.getElementById('calender-body');

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  //月の最終日を求める関数
  const getLastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

//   日数からhtmlを生成して、tbodyに入れる関数
  const getCalenderBody = (days, week) => {
   
}

//   今月の最終日
const thisMonthDays = getLastDay(year, month + 1);
const week = Math.ceil(thisMonthDays / 7);

  //  カレンダーのタイトルを設定
  title.textContent = `${year}/${month + 1}`;

  // イベント設定
}
