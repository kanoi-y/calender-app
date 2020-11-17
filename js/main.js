{
  // 変数定義
  const title = document.getElementById("title");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const today = document.getElementById("today");
  const body = document.getElementById("calender-body");
  const oneWeek = document.querySelectorAll("#oneWeek th");

  const now = new Date();
  const realYear = now.getFullYear();
  const realMonth = now.getMonth();
  const realDay = now.getDate();

  let calenderHtml = [];
  let pageYear = realYear;
  let pageMonth = realMonth;

  //月の最終日を求める関数
  const getLastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // 引数にいれた都市と月から、その月のカレンダーを表示する関数
  const getCalenderHtml = (year, month) => {
    //   今月の最終日
    const thisLastDay = getLastDay(year, month + 1);

    // 先月の最終日
    const beforeLastDay =
      month === 0 ? getLastDay(year - 1, 12) : getLastDay(year, month);

    //  一日の曜日
    const weekDay = new Date(year, month, 1).getDay();

    // 週の数
    const week = Math.ceil((thisLastDay + weekDay) / 7);

    // 要素の初期化
    calenderHtml = [];

    // 今月のカレンダーを表示
    for (let i = 0; i < week; i++) {
      calenderHtml.push(`<tr>`);

      for (let j = 1; j < 8; j++) {
        const calenderDay = j + 7 * i;
        if (calenderDay < weekDay + 1) {
          calenderHtml.push(
            `<td class="disabled" data-date="${
              beforeLastDay - (weekDay - j)
            }">${beforeLastDay - (weekDay - j)}</td>`
          );
        } else if (calenderDay > thisLastDay + weekDay) {
          calenderHtml.push(
            `<td class="disabled" data-date="${
              calenderDay - thisLastDay - weekDay
            }">${calenderDay - thisLastDay - weekDay}</td>`
          );
        } else {
          if (
            calenderDay === weekDay + realDay &&
            year === realYear &&
            month === realMonth
          ) {
            calenderHtml.push(
              `<td class="today calender_td" data-date="${
                calenderDay - weekDay
              }">${calenderDay - weekDay}</td>`
            );
          } else {
            calenderHtml.push(
              `<td class="calender_td" data-date="${calenderDay - weekDay}">${
                calenderDay - weekDay
              }</td>`
            );
          }
        }
      }
      calenderHtml.push(`</tr>`);
    }
    body.innerHTML = calenderHtml.join("");
    //  カレンダーのタイトルを設定
    title.textContent = `${year}/${month + 1}`;
  };

  // 関数を実行
  getCalenderHtml(realYear, realMonth);

  // nextをclickした時の処理
  const nextMove = () => {
    if (pageMonth + 1 === 12) {
      pageMonth = 0;
      pageYear++;
    } else {
      pageMonth++;
    }
    getCalenderHtml(pageYear, pageMonth);
  };

  // prevをclickした時の処理
  const prevMove = () => {
    if (pageMonth === 0) {
      pageMonth = 11;
      pageYear--;
    } else {
      pageMonth = pageMonth - 1;
    }
    getCalenderHtml(pageYear, pageMonth);
  };

  // todayをclickした時の処理
  const todayMove = () => {
    getCalenderHtml(realYear, realMonth);
  };

  const dateEvent = (e) => {
    if (e.target.classList.contains("calender_td")) {
      alert("クリックした日付は" + e.target.dataset.date + "です");
    }
  };

  // イベント設定
  next.addEventListener("click", nextMove);
  prev.addEventListener("click", prevMove);
  today.addEventListener("click", todayMove);
  document.addEventListener("click", dateEvent);
}
