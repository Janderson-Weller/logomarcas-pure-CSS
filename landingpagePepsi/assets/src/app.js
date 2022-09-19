
const getImage = document.querySelectorAll('.show');


const SearchListColor = (color) => {

    let colors = ['img1', 'img2', 'img3'];
    return colors.indexOf(color); 

}


const selectColor = (color) => {
    if(SearchListColor(color) === 0) {
        return ['#3675b4', 'rgba(71, 153, 235, 0.2)'];
    }

    else if(SearchListColor(color) === 1) {
        return ['#A7A6AB', 'rgba(138, 133, 160, 0.2)'];
    }

    else {
        return ['#515356', 'rgba(72, 73, 75, 0.2)']
    }
}

let windowWidth = window.screen.width

const option = () => {

    getImage.forEach(getId => {
        getId.addEventListener('click', ()=> {

            const removeClassPrincipal = document.querySelector('.show-img');
            const removeClassBottom = document.querySelector('.img');
        
            removeClassPrincipal.classList.remove('show-img');
            removeClassBottom.classList.remove('img')

            const ide = getId.attributes.id.value

            const insereClasseBotton = document.getElementById(getId.attributes.id.value);
            insereClasseBotton.classList.add('img');
            
            const color = document.getElementById(getId.attributes.id.value);
            const boxShadowColor = selectColor(color.attributes.id.value);

            document.querySelector('.header-menu').style.boxShadow = ' 0 1rem 1rem '+boxShadowColor[1]
            document.querySelector('.header-menu').style.setProperty('background-color', boxShadowColor[0])
            
            if(windowWidth < 1000 ) {
                // let bgColorHeader = document.querySelector('.header-menu')
                // if(getComputedStyle(bgColorHeader).backgroundColor !== boxShadowColor[2]) {
                    let bgNavUl = document.getElementById('ul-menu-principal')
                    bgNavUl.style.backgroundColor = boxShadowColor[0];
                    bgNavUl.style.borderTop = '1px inset';
                    
                    
                // }
                // console.log("nav bg escolhido - ", getComputedStyle(bgColorUl).backgroundColor);
                // document.getElementById('ul-menu-principal').style.setProperty('background-color', boxShadowColor[0])
            }


            document.querySelector('.section-principal').style.backgroundColor = boxShadowColor[0]

            const insereClassePrincipal = document.getElementById('show-' + getId.attributes.id.value);
            insereClassePrincipal.classList.add('show-img');
            // menuAmburguer();

        });
    });
};


const menuAmburguer = () => {
    // let bgColorUl = document.querySelector('.header-menu')
    // getComputedStyle(header-menu).backgroundColor
    // getComputedStyle.backgroundColor
    // if(getComputedStyle(bgColorUl).backgroundColor !)
                // console.log("nav bg - ", getComputedStyle(bgColorUl).backgroundColor);
                // console.log(getComputedStyle(bgColorUl).backgroundColor)
    
    const menuShow = document.getElementById('span-amburguer');

    const toggleMenu = () => {
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active')
    }

    menuShow.addEventListener('click', (toggleMenu));
}


menuAmburguer();
option();