//Из-за библиотеки seamless-scroll-polyfill работает на всех браузерах включая сафари

const links = document.querySelectorAll('.header-menu__item a');

seamless.polyfill();//метод нужен(Библиотечный)!!!!!!!!

links.forEach((element) => {
    element.addEventListener('click',(event)=>{
        event.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        
        if (section) {
            seamless.elementScrollIntoView( section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
           })
        } else {
            console.log("Nitu")

        }
    })
    })


//Доп задание 
const links2 = document.querySelector('.card-details__link-characteristics');

    links2.addEventListener('click', (event)=>{
        
        const id = links2.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        seamless.elementScrollIntoView( section, {
            behavior: "smooth",
            block: "center"
       })



    })




