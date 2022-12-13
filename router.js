//ROUTER FUNCTIONALITY:
////INFO: For the router to work properly, a div with the id corresponding to the nav link has to be
//added in the index page. ex. <div id="shop"> </div> as well as its selector from the ul navigation
// header: <li><a href="#">shop</a></li>.
//This router is dinamically generated based on the -links- from the -navigation header-.
//The -value- of the -links- is being used to generate -query selector- and to -add event listener-
//for each link.
//The -event listener- calls the -show page function- that will show the section with its name from
//which was clicked.
//The -show page function - goes through all the -sections- and -adds the hide class- to every
//page and -removes the hide class- from the page that matches the name from which the function
//was clicked.


let pages = [];
const navLinks = document.querySelector('.nav');

generateNavLinksSectionIDs(
    () => {
            //dupa ce am generat pentru fiecare link un event listener corespunzator
            //sectiunii pe care o afiseaza, apelam printr-un callback functia showPage.
            //Daca exista vreoun cookie in care e salvat ultima pagina, il deschidem pe acela
            showPage(cookieGetValue('page') ? cookieGetValue('page') : 'home');
    }
)();

function generateNavLinksSectionIDs(callback){

    // const home = document.querySelector('#home');
    // const collaboration = document.querySelector('#collaboration');
    // const shop = document.querySelector('#shop');
    // const contact = document.querySelector('#contact');
    // pages.push(home,shop,contact);

    let pagesName = ['home'];//because this link does not exists in navlinks
    navLinks.childNodes.forEach(val =>{
        if(val.lastChild != null){
            console.log(val.lastChild);
            val.lastChild.classList.add('section')
            val.lastChild.addEventListener('click', (e)=>{
                e.preventDefault();
                console.log('clicked',val.lastChild.textContent);
                cookieSet('page', val.lastChild.textContent, 15);
                showPage(val.lastChild.textContent);
            })
            pagesName.push(val.lastChild.textContent);
        }
    });

    for(id in pagesName){
        pages.push(document.querySelector(`#${pagesName[id]}`))

        //add general style for each section.
        pages[id].classList.add('section');
    }
    return callback;
    
}

function showPage(pageName){
    pages.forEach((pg) => {
        pg.classList.add('hide');
        if(pg.id === pageName){
            pg.classList.remove('hide');
            console.log(pg);
        }
    });
}
