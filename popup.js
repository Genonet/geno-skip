document.addEventListener('DOMContentLoaded', function() {
    var controlButton = document.getElementById('controlButton');
    controlButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: () => {
                    var videos = document.querySelectorAll('video');
                    videos.forEach(function(video) {
                        video.playbackRate = 16;
                        video.muted = true;
                    });
                }
            });
        });
    });
});