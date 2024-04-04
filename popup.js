// 監視ターゲットの取得
const moviePlayer = document.getElementById('movie_player')

// オブザーバーの作成
const observer = new MutationObserver(records => {
    // 広告が表示された場合
    if (records[0].target.classList.contains("ad-showing")) {
        var videos = document.querySelectorAll('video');
        videos.forEach(function (video) {
            video.playbackRate = 16;
            video.muted = true;
        });
    }
});

// 監視の開始
observer.observe(moviePlayer, {
    attributes: true,
    attributeFilter: ['class']
});
