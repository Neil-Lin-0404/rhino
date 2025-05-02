function playAudio(song) {
    const player = document.getElementById("player");
    const buttons = document.querySelectorAll("button");

    player.pause();
    player.src = song;
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
