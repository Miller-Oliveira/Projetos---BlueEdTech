
var btn = document.getElementById('clicker');
var mudaHumor = document.getElementById('humor');

btn.onclick = function() {

    if(btn.value === 'primeiro'){
        mudaHumor.src = '/friends.jpg';
        btn.value = 'segundo';
        btn.innerHTML = 'JOEY ATENTO';

    } else if (btn.value === 'segundo') {
        mudaHumor.src='img/Joey_feliz.jpg';        
        btn.value = 'terceiro';
        btn.innerHTML = 'JOEY FELIZ';
        

    } else if (btn.value === 'terceiro') {
        mudaHumor.src = '/img/Joey_atento.jpg';
        btn.value = 'quarto';
        tn.innerHTML = 'JOEY ATENTO';
        
    
    } else {
        mudaHumor.src = '/img/images.jpg';
        btn.value = 'primeiro';
        btn.innerHTML = 'JOEY TRISTE';
        mudaHumor.src='img/Joey_feliz.jpg';
    }
        
    }

  