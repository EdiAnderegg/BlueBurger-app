

//Activating function for the home Navigation Bar
highlightActiveNav('h6 a');







/*Home View Navigation bar*/
function highlightActiveNav(element){

    const activePage = window.location.href;
    const navLinks = document.querySelectorAll(`${element}`);

    navLinks.forEach(link => {
        
        if(link.href === activePage){
            link.classList.add('active');
        }
    });
}




