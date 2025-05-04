if (!localStorage.getItem("alertShown")) {
    alert("Hi 我被 IG 禁言 7 天 所以目前沒辦法傳訊息 e \n如果你有傳訊息給我 我可能只能已讀不回 很想回但回不了 :< \n我會把話留在這裡 有看到的話可以看看 :D");
    localStorage.setItem("alertShown", "true");
}

function playAudio(song) {
    const player = document.getElementById("player");
    const buttons = document.querySelectorAll("button");

    player.pause();
    player.src = song;
    player.loop = true;
    player.play();

    buttons.forEach((btn) => btn.classList.remove("playing"));
    
    // 尋找觸發播放的按鈕
    const clickedButton = [...buttons].find(btn => btn.innerText.includes(song.split('.')[0]));
    if (clickedButton) clickedButton.classList.add("playing");
  }

  // 亮暗模式切換
  function toggleMode() {
    const body = document.body;
    const toggleBtn = document.querySelector(".toggle");
    const isDark = body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    if (isDark) {
      toggleBtn.style.backgroundColor = "black";
      toggleBtn.style.color = "white";
    } else {
      toggleBtn.style.backgroundColor = "#fff";
      toggleBtn.style.color = "black";
    }
  }

  // 初始主題設定（根據 localStorage）
  window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      const toggleBtn = document.querySelector(".toggle");
      toggleBtn.style.backgroundColor = "black";
      toggleBtn.style.color = "white";
    }
  };
