const h1 = document.querySelector('h1');
var index = 0

function writer(){
    var text = 'in khonaro ki sakhte ostaye bana sakhte:)'
    h1.innerText = text.slice(0,index);
    index++;
    if(index > text.length-1){
        index = 0;
    }
}

setInterval(writer,150);