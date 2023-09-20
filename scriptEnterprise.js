window.addEventListener('load', () =>{
    loader.startLoader();
    containerConfig.getContainer();
})

window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');

    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('scroll', windowPosition);
})



const startInteractive = () => {
    let getButtonNavbar = document.querySelectorAll('.navbar-link');
    getButtonNavbar.forEach(button => button.addEventListener('click', () => { NavbarConfig.changeButton(button) }))

    let hamburguerButton = document.querySelector('.navbar-hamburguer');
    hamburguerButton.addEventListener('click', () => { NavbarConfig.mobileOpen() })

    let closeButton = document.querySelector('.navbar-close');
    closeButton.addEventListener('click', () => { NavbarConfig.mobileClose() })

}

const NavbarConfig = {
    removeActive() {
        let activeButton = document.querySelector('.navbar-link.active');

        if (activeButton != null) {
            activeButton.classList.remove('active');
        }
        return;
    },
    changeButton(button) {

        this.removeActive();
        let buttonToActive = button;
        buttonToActive.classList.add('active');

    },
    mobileOpen() {
        let navbar = document.querySelector('.navbar');
        navbar.classList.add('show');
    },
    mobileClose() {
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('show');
    }
}

const loader = {
    startLoader(){
        let body = document.querySelector("body");
       
        setTimeout(()=>{
            body.classList.remove('body-loader');
        }, 1500)

    }
}

const containerConfig = {
    getContainer() {
        let containers = document.querySelectorAll('.container');
        containers.forEach(container => container.addEventListener('mouseover', () => { this.changeContainer(container) }));
    },
    changeContainer(container) {
        NavbarConfig.removeActive();
        let containerReceive = container.classList[1];
       
        switch(containerReceive){
            
            case "hero":{
                let aHref = document.querySelector('.navbar-link a[href="#home"]');
                let li = aHref.parentNode;
                NavbarConfig.changeButton(li);
                break;
            }

            case "enterprise":{
                let aHref = document.querySelector('a[href="#empreendimentos"]');
                let li = aHref.parentNode;
                NavbarConfig.changeButton(li);
                break;
            }


            case "contato":{
                let aHref = document.querySelector('a[href="#contact"]');
                let li = aHref.parentNode;
                NavbarConfig.changeButton(li);
                break;
            }

            case "imobiliaria":{
                let aHref = document.querySelector('a[href="#imobiliaria"]');
                let li = aHref.parentNode;
                NavbarConfig.changeButton(li);
                break;
            }
            
        }
    },
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoHeight: false,
       
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            780: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true

    });
})

startInteractive();