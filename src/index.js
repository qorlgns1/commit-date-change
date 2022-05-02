const dateBtn = document.getElementById("create-date");
const dateinput = document.getElementById("date");
const timeinput = document.getElementById("time");

function getDayOfWeek(date) {
  var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayOfWeek = week[date.getDay()];
  return dayOfWeek;
}

dateBtn.addEventListener("click", () => {
  const dateInfo = new Date(`${dateinput.value} ${timeinput.value}`);

  const year = dateInfo.getFullYear();
  const month = dateInfo.toLocaleString("en-US", { month: "short" });
  const day = dateInfo.getDay() + 1;
  const dayOfWeek = getDayOfWeek(dateInfo);

  if (!dateinput.value || !timeinput.value) {
    alert("연도 또는 시간을 선택해주세요.");
    return;
  } else {
    const dateStr = `${dayOfWeek} ${day} ${month} ${year} ${time.value}:00 KST`;

    console.log(
      `GIT_COMMITTER_DATE="${dateStr}" git commit --amend --no-edit --date "${dateStr}"`
    );

    alert(
      `GIT_COMMITTER_DATE="${dateStr}" git commit --amend --no-edit --date "${dateStr}"`
    );
  }
});
