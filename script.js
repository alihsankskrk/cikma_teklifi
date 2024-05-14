document.getElementById("yesButton").addEventListener("click", function() {
    var title = document.querySelector(".title");
    title.textContent = ""; // Videoyu eklemek için h1 içeriğini temizle
    
    var videoContainer = document.createElement("div");
    videoContainer.innerHTML = `
        <video id="myVideo" width="560" height="315" autoplay loop controls>
            <source src="Halay Çeken Köpek.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
        </video>
    `;
    title.appendChild(videoContainer);
    
    var emojis = ["❤️", "💖", "💗", "💕", "💓"];
    
    var interval = setInterval(function() {
        var emoji = document.createElement("span");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = "-50px";
        emoji.style.fontSize = Math.random() * 30 + 10 + "px";
        emoji.style.opacity = Math.random();
        document.body.appendChild(emoji);
        
        var animationDuration = Math.random() * 2000 + 1000;
        var startY = -50;
        var endY = window.innerHeight + 50;
        var startX = parseFloat(emoji.style.left);
        var endX = startX - 100 + Math.random() * 200;
        
        var startTime = null;
        
        function emojiFall(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var percent = Math.min(progress / animationDuration, 1);
            emoji.style.top = startY + percent * (endY - startY) + "px";
            emoji.style.left = startX + percent * (endX - startX) + "px";
            if (percent < 1) {
                requestAnimationFrame(emojiFall);
            } else {
                document.body.removeChild(emoji);
            }
        }
        
        requestAnimationFrame(emojiFall);
    }, 200);
    
    setTimeout(function() {
        clearInterval(interval);
    }, 5000);

    // "noButton"u gizle
    var noButton = document.getElementById("noButton");
    noButton.style.display = "none";
});
document.getElementById("yesButton").addEventListener("click", function() {
    var square = document.querySelector(".square");
    square.style.width = "29%"; // Yeni genişlik değeri
    square.style.height = "300px"; // Yeni yükseklik değeri
});
document.getElementById("noButton").addEventListener("mouseover", function() {
    var button = document.getElementById("noButton");
    var buttonRect = button.getBoundingClientRect();
    var maxX = window.innerWidth - buttonRect.width;
    var maxY = window.innerHeight - buttonRect.height;
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    // Yeni konumu kontrol ederek sayfanın içinde kalmasını sağlama
    newX = Math.max(0, Math.min(newX, window.innerWidth - buttonRect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - buttonRect.height));
    
    button.style.position = "fixed";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
});

document.getElementById("noButton").addEventListener("click", function() {
    var button = document.getElementById("noButton");
    var buttonRect = button.getBoundingClientRect();
    var maxX = window.innerWidth - buttonRect.width;
    var maxY = window.innerHeight - buttonRect.height;
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    // Yeni konumu kontrol ederek sayfanın içinde kalmasını sağlama
    newX = Math.max(0, Math.min(newX, window.innerWidth - buttonRect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - buttonRect.height));
    
    button.style.position = "fixed";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
});
