const video = document.getElementById("intro-video");
const videoContainer = document.getElementById("video-container");
const mainContent = document.getElementById("main-content");
// 動画が終わったらフェードアウト
video.addEventListener("ended", () => {
  videoContainer.classList.add("fade-out");
  // フェードアウト後に動画を非表示
  setTimeout(() => {
    videoContainer.style.display = "none";
    document.body.style.overflow = "auto";
    // スクロール解禁
    mainContent.style.opacity = 1;
    // トップページ表示
  }, 1500);
});
