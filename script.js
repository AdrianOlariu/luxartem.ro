const girlPic = document.querySelector('.girl');
const lightbulb = document.querySelector('.lightbulb');
const luxartem = document.querySelector('.luxartem');

var rootCss = document.querySelector(':root');//get the variables created in the css file
var root = getComputedStyle(rootCss);//process those variables

luxartem.addEventListener('click', (e)=>{
    lights();
})

lightbulb.addEventListener('click', (e) =>{

    lights();
})

function lights(){
    if(lightbulb.src.includes('off')){
        girlPic.style.content='url(./src/lithophane_girl_front_on4.png)';

        lightbulb.src='./src/Light_on_768x768.png';
        document.body.style.backgroundColor = root.getPropertyValue('--bgLight');
        document.documentElement.style.setProperty('--textDark', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--textLight', 'rgb(0,0,0)');
        document.documentElement.style.setProperty('--sepiaValue', '0%');
        document.documentElement.style.setProperty('--picture-scale-hover', '85%');

    }else{
        girlPic.style.content='url(./src/lithophane_girl_front_off.png)';

        lightbulb.src='./src/Light_off_768x768.png';
        document.body.style.backgroundColor = root.getPropertyValue('--bgDark');
        document.documentElement.style.setProperty('--textDark', 'rgb(186,187,189)');
        document.documentElement.style.setProperty('--textLight', 'rgb(186,187,189)');
        document.documentElement.style.setProperty('--sepiaValue', '70%');
        document.documentElement.style.setProperty('--picture-scale-hover', '80%');
    }
}

// console.log(pages[1]);

// pages[1].addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('home clicked');
// })