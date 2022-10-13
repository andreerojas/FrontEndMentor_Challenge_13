const themeOptions = document.querySelectorAll('input[type="radio"]');
function applyTheme(){
    const main = document.querySelector('main');
    const value = document.querySelector('input[type="radio"]:checked').value;
    for(let idx = 1 ; idx <=3; idx++){
        if(parseInt(value)=== idx){
            main.classList.add(`theme-${idx}`);
        }
        else{
            main.classList.remove(`theme-${idx}`);
        }
    }    
}


for(let option of themeOptions){
    option.addEventListener('input',applyTheme);
}

applyTheme();