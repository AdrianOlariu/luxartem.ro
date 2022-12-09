const girlPic = document.querySelector('.girl');
const lightbulb = document.querySelector('.lightbulb');


var rootCss = document.querySelector(':root');//get the variables created in the css file
var root = getComputedStyle(rootCss);//process those variables

lightbulb.addEventListener('click', (e) =>{

    if(lightbulb.src.includes('off')){
        girlPic.style.content='url(./src/lithophane_girl_front_on4.png)';
        
        lightbulb.src='./src/Light_on_768x768.png';
        document.body.style.backgroundColor = root.getPropertyValue('--bgLight');
    }else{
        girlPic.style.content='url(./src/lithophane_girl_front_off.png)';

        lightbulb.src='./src/Light_off_768x768.png';
        document.body.style.backgroundColor = root.getPropertyValue('--bgDark');
    }
})

console.log('ceva');