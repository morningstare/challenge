var cells = document.querySelectorAll('.cells > div');
var inner = document.querySelector('.inner');
var load = document.querySelector('span');


load.innerText = 0;

inner.style.height = '0';


const interval = setInterval(() => {


   
    var snum = parseInt(load.innerText);
    snum += 10;
    
    load.innerText = snum + '%';
    var d = load.innerText;


    var num = parseInt(inner.style.height);
    num += 50;
    inner.style.height = num + 'px';
    console.log(num);



if(snum >= 101){
inner.style.height = '0';
load.innerText = 0;
// clearInterval(interval)
}

if(snum <= 30){
inner.style.backgroundColor = 'lightgreen';
}
if(snum >= 30){
inner.style.backgroundColor = 'orange';
}
if(snum >= 60){
inner.style.backgroundColor = 'red';
}


}, 1000);
