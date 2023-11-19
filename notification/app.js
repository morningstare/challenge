
const div = document.createElement('div');

function notif() {
   

   const span = document.createElement('span');

   span.innerText = 'thi is a test text for notification';

   div.appendChild(span);
   document.body.appendChild(div);
   div.className = 'position';

   function remove(){
      span.style.display = 'none'
   }

   setInterval(remove,2000);

}

