let products = [
    {name:'lampa',price:'200', desc:'lampa ambientala lumina calda', 
    pic:'https://manubim.cdn.shoprenter.hu/custom/manubim/image/cache/w500h500wt1/product/3D-photo-lithophane/3d-f%C3%A9nyk%C3%A9p-litof%C3%A1n-l%C3%A1mpa.jpg', cat:'lampi'},
    {name:'tablou',price:'860', desc:'tablou printat 3d cu rama din lemn', 
    pic:'https://i.pinimg.com/736x/ce/df/c2/cedfc248f4aecc8724f6c6c1d033bcd1.jpg', cat:'tablouri'},
    {name:'statuieta cezar', price:'150', desc:'statuieta printata 3d   -   cezar  <br>', 
    pic:'https://i.etsystatic.com/34802561/r/il/352025/3875074443/il_570xN.3875074443_glgf.jpg', cat:'statuiete'},
    {name:'statuieta decebal', price:'170', desc:'statuieta printata 3d   -   decebal  <br>', 
    pic:'https://www.marveii.ro/wp-content/uploads/2017/01/Statuet%C4%83-Bust-Decebal.jpg', cat:'statuiete'}
]

let productsDiv = document.querySelector('#products');


function createProductElement(product){
    let productElement = document.createElement('div');
    productElement.innerHTML = `
    <div class="product">
    <div class="picture">
        <div>
            <h3>${product.name}</h3>
            <img src="${product.pic}">
        </div>
    </div>
    <div class="details">
        <div class="description">
        ${product.desc}
            
            <div class="category">
                <span>categorie: <a>${product.cat}</a></span>
            </div>
        </div>
        <div class="actions">
                <span>Pret: ${product.price} lei</span>
                <button>Adauga in cos</button>
        </div>
    </div>
    </div>
    `;

    return productElement;
}

products.forEach(product => {
    productsDiv.appendChild(createProductElement(product));    
});

// productsDiv.appendChild(createProductElement(products[0]));

