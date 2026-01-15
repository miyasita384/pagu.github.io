const introWrapper = document.getElementById("intro-wrapper");
const mainContent = document.getElementById("main-content"); 
// 2秒後にフェードアウト開始 
setTimeout(() => { introWrapper.style.opacity = 0; }, 2000); 

// 6秒後に動画を消してトップページ表示 
setTimeout(() => { introWrapper.style.display = "none"; document.body.style.overflow = "auto"; 

// スクロール解禁 
mainContent.style.opacity = 1; }, 6000);
