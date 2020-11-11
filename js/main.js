{
  // 変数定義
  const title = document.getElementById("title");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const today = document.getElementById("today");
  const body = document.getElementById("calender-body");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  let calenderHtml = [];
  let pageYear = year;
  let pageMonth = month;

  //月の最終日を求める関数
  const getLastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  //   日数からhtmlを生成して、tbodyに入れる関数
  const getCalenderBody = (days, week) => {};

  //   今月の最終日
  const thisMonthDays = getLastDay(year, month + 1);
  const week = Math.ceil(thisMonthDays / 7);

  // 今月のカレンダーを表示

  for (let i = 0; i < week; i++) {
    calenderHtml.push(`<tr>`);

    for (let j = 1; j < 8; j++) {
      const calenderNumber =
        j + 7 * i > thisMonthDays ? j + 7 * i - thisMonthDays : j + 7 * i;

      if (j + 7 * i > thisMonthDays) {
        calenderHtml.push(`<td class="disabled">${calenderNumber}</td>`);
      } else {
        calenderHtml.push(`<td>${calenderNumber}</td>`);
      }
    }
    calenderHtml.push(`</tr>`);
  }
  body.innerHTML = calenderHtml.join("");

  //  カレンダーのタイトルを設定
  title.textContent = `${year}/${month + 1}`;

  const nextMove = () => {

    if (pageMonth + 1 === 12) {
     pageMonth = 0;
     pageYear++;
    } else {
     pageMonth = pageMonth + 1;
    }
    title.textContent = `${pageYear}/${pageMonth + 1}`;
  };

  const prevMove = () => {
    if (pageMonth === 0) {
      pageMonth = 11;
      pageYear--;
     } else {
      pageMonth = pageMonth - 1;
     }
     title.textContent = `${pageYear}/${pageMonth + 1}`;
  };

  // イベント設定
  next.addEventListener('click', nextMove);
  prev.addEventListener('click', prevMove);
}
