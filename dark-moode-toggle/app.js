const dark = document.querySelector('input');


dark.addEventListener('change',function(e){
      document.body.classList.toggle('dark',e.target.checked);
});