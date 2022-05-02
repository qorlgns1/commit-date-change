const getDayOfWeek = (date) => {
  var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayOfWeek = week[date.getDay()];
  return dayOfWeek;
};

const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};

const copyBtn = document.getElementById("btn-copy");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

copyBtn.addEventListener("click", () => {
  const dateInfo = new Date(`${dateInput.value} ${timeInput.value}`);

  const year = dateInfo.getFullYear();
  const month = dateInfo.toLocaleString("en-US", { month: "short" });
  const day = dateInfo.getDate();
  const dayOfWeek = getDayOfWeek(dateInfo);

  const dateStr = `${dayOfWeek} ${day} ${month} ${year} ${time.value}:00 KST`;
  const message = `GIT_COMMITTER_DATE="${dateStr}" git commit --amend --no-edit --date "${dateStr}"`;

  let messagebox = document.querySelector(".messagebox");
  if (!dateInput.value || !timeInput.value) {
    messagebox.style.color = "red";
    messagebox.innerHTML = `날짜 또는 시간을 선택해주세요!`;
    return;
  } else {
    copyToClipboard(message);
    console.log(message);
    messagebox.style.color = "black";
    messagebox.innerHTML = `<b>복사되었습니다!</b>
    <br>
    <br> 
    만약 복사가 되지 않았다면 콘솔창에서 메시지를 확인해주세요!
    `;
  }
});
