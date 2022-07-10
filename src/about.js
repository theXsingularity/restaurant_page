const about = () => {
    console.log('connected to about.js');

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('aboutContainer')

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = 'OUR PLACE';   

    const aboutContentContainer = document.createElement('div');
    aboutContentContainer.classList.add('aboutContentContainer');

    const aboutTopContainer = document.createElement('div');
    aboutTopContainer.classList.add('aboutTopContainer');

    const aboutTopLeft = document.createElement('div');
    aboutTopLeft.classList.add('aboutTopLeft');
    aboutTopLeft.innerHTML = 'Picture 1';

    const aboutTopRight = document.createElement('div');
    aboutTopRight.classList.add('aboutTopRight');
    aboutTopRight.innerHTML = 'Picture 2';

    const aboutBottomContainer = document.createElement('div');
    aboutBottomContainer.classList.add('aboutBottomContainer');


    const bottomContent = document.createElement('div');
    bottomContent.classList.add('bottomContent');
    bottomContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

   

    

    aboutContainer.appendChild(title)
    aboutContainer.appendChild(aboutContentContainer)
    aboutContentContainer.appendChild(aboutTopContainer)
    aboutTopContainer.appendChild(aboutTopLeft)
    aboutTopContainer.appendChild(aboutTopRight)
    aboutContentContainer.appendChild(aboutBottomContainer)
    aboutBottomContainer.appendChild(bottomContent)
    


    return aboutContainer
}

export { about }

