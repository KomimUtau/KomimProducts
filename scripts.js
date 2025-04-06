document.getElementById('startBtn').addEventListener('click', function() {
    // Başlangıç ekranını gizle
    document.querySelector('.start-screen').style.display = 'none';
    
    // Oyun ekranını göster
    document.getElementById('gameContainer').style.display = 'block';
  });
  