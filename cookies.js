//note to myself: cand mai implementez ceva precum cookie, ce necesita mai multe functii cu ajutorul carora
//sa fac operatiuni asupra datelor, creaza initial acele functii.

const cookies = document.cookie.replace(' ','');

function cookieFind(name){
    console.log(cookies);
    let cookiesArr, foundCookie;
    if(cookies){
        cookiesArr = cookies.split(';');
        console.log('cookiesArr',cookiesArr);
        foundCookie = cookiesArr.filter(cookie => 
            {   
                console.log('name',cookie.split("=")[0]);
                if(cookie.split("=")[0] === name){
                    return cookie;
                }
        });
        return foundCookie[0];
    }
}

function cookieGetValue(name){
    if(cookieFind(name)){
        console.log(cookies);
        return cookieFind(name).split('=')[1];
    }
}

function cookieSet(name, value, minutesUntilExpire){
        document.cookie = `${name}=${value};expires=${cookieAvailability(minutesUntilExpire)}`;
}

function cookieAvailability(minutes){
    let date = new Date(new Date().getTime() + minutes*60000);
    console.log(date);
    return date;
}
