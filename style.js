const girlPic = document.querySelector('.girl');
const lightbulb = document.querySelector('.lightbulb');
const luxartem = document.querySelector('.luxartem');
const video = document.querySelector('.video-container');

const rootCss = document.querySelector(':root');//get the variables created in the css file
const root = getComputedStyle(rootCss);//process those variables


initWebsite();

luxartem.addEventListener('click', (e)=>{
    lights();
});

lightbulb.addEventListener('click', (e) =>{
    lights();
});

function lights(){
    if(lightbulb.src.includes('off')){
        
        lightTheme();
        cookieSet('luxartemTheme', 'light', 60*24*7);
    }else{
        
        darkTheme();
        cookieSet('luxartemTheme', 'dark', 60*24*7);
    
    }
}

function darkTheme(){
    
    girlPic.style.content='url(./src/lithophane_girl_front_off.png)';
    lightbulb.src='./src/Light_off_768x768.png';
    document.body.style.backgroundColor = root.getPropertyValue('--bgDark');
    document.documentElement.style.setProperty('--textDark', 'rgb(186,187,189)');
    document.documentElement.style.setProperty('--textLight', 'rgb(186,187,189)');
    document.documentElement.style.setProperty('--sepiaValue', '70%');
    document.documentElement.style.setProperty('--picture-scale-hover', '80%');
    video.style.animation = 'to-gray 2s';
    video.style.filter = 'grayscale(100%)';
}

function lightTheme(){
    girlPic.style.content='url(./src/lithophane_girl_front_on4.png)';
    lightbulb.src='./src/Light_on_768x768.png';
    document.body.style.backgroundColor = root.getPropertyValue('--bgLight');
    document.documentElement.style.setProperty('--textDark', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--textLight', 'rgb(0,0,0)');
    document.documentElement.style.setProperty('--sepiaValue', '0%');
    document.documentElement.style.setProperty('--picture-scale-hover', '85%');
    video.style.animation = 'to-color 2s';
    video.style.filter = 'grayscale(0%)';

}
//Setam un cookie in care afisam de cate ori a rulat animatia cu breathing text logo.
//Dupa ce animatia a rulat de X ori, nu mai rulam animatia
//La Y minute, cookie-ul expira si animatia ruleaza din nou.


//de cate ori va rula animatia la intrare pe site
//dupa cate minute se va reseta rularea animatiei
function breathingLUXARTEM(times, minutes){
    if(parseInt(cookieGetValue('breathingText')) > times){
        document.documentElement.style.setProperty('--logoTextAnimationType', '0');
    }else{
        if(cookieFind('breathingText')){
            cookieSet('breathingText',parseInt(cookieGetValue('breathingText')) + 1);
        }else{
            cookieSet('breathingText',0,minutes);
        }
    }
}

//cat dureaza pana expira cookie-ul
function initWebsite(){
    luxartemTheme();
    breathingLUXARTEM(3,30);
    onScroll();
}

//salvam state-ul site-ului: on or off

function luxartemTheme(){
    if(cookieGetValue('luxartemTheme') === 'light'){
        lightTheme();
    }else{
        darkTheme();
    }
}
let scroolValue = parseInt(root.getPropertyValue('--scrollVideo'));
let scroolPicture = parseInt(root.getPropertyValue('--scrollPicture'));
console.log(scroolValue);
function onScroll(){
    
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        console.log('scroll');
        onwheel = (event) => {
            if(event.deltaY < 0){
                for(let i = scroolValue; i < 51; i+=0.5){
                    document.documentElement.style.setProperty('--scrollVideo', `${i}%`);
                    console.log('smaller');
                }

                document.documentElement.style.setProperty('--scrollImage', `${0}%`);


                // if(scroolValue < 51){
                //     document.documentElement.style.setProperty('--scroll', `${scroolValue=50}%`);
                //     console.log('bigger');
                // }
            }else{

                for(let i = scroolValue; i > -85; i-=1){
                    document.documentElement.style.setProperty('--scrollVideo', `${i}%`);

                    console.log('smaller');
                }

                document.documentElement.style.setProperty('--scrollImage', `${45}%`);

                // if(scroolValue > -85){
                //     document.documentElement.style.setProperty('--scroll', `${scroolValue=-84}%`);
                //     console.log('bigger');
                // }
                
            }
            console.log(event.deltaY); 
        };
    });

}
