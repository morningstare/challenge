function create(){
   const heart = document.createElement('span');
   document.body.appendChild(heart);
   heart.innerText = '🎃';
   heart.className = 'heart';



   heart.style.left = Math.random()*100+'vw';

   heart.style.naim


   setTimeout(() => {
      heart.remove();
   }, 3000);
}

setInterval(create,50)