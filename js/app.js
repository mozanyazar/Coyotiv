const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    document.querySelector('.responsive-nav').classList.add('active-for-nav');
    document.querySelector('body').style.zIndex = 0

    document.querySelector('.fa-x').addEventListener('click', () => {
        document.querySelector('.responsive-nav').classList.remove('active-for-nav');
    })

})