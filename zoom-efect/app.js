

const div = document.querySelector('.container');


const img = document.querySelector('img');



window.onload = function(){
    div.addEventListener('mousemove',function(e){
        var pos_x = img.style.left = e.x - e.target.offsetLeft;

        var pos_y = img.style.top = e.y - e.target.offsetTop;

        img.style.transformOrigin = `${pos_x}px  ${pos_y}px`;

        img.style.transform = 'scale(2)';

        img.style.cursor = 'zoom-in'

        console.log('saman');
    });
    div.addEventListener('mouseleave',function(){
        img.style.transformOrigin = 'center center';
        img.style.transform = 'scale(1)';

    });
}