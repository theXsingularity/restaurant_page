const about = () => {
    console.log('connected to about.js');

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('aboutContainer')

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = 'This is a Restaurant';   

    const mid = document.createElement('div');
    mid.classList.add('mid');

    const midTopContainer = document.createElement('div');
    midTopContainer.classList.add('midTopContainer');

    const midTopLeft = document.createElement('div');
    midTopLeft.classList.add('midTopLeft');
    midTopLeft.innerHTML = 'Picture 1';

    const midTopRight = document.createElement('div');
    midTopRight.classList.add('midTopRight');
    midTopRight.innerHTML = 'Picture 2';

    const midBottomContainer = document.createElement('div');
    midBottomContainer.classList.add('midBottomContainer');


    const bottomContent = document.createElement('div');
    bottomContent.classList.add('bottomContent');
    bottomContent.innerHTML = 'HERE IS ABOUT US';

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'FOOT';

    

    aboutContainer.appendChild(title)
    aboutContainer.appendChild(mid)
    mid.appendChild(midTopContainer)
    midTopContainer.appendChild(midTopLeft)
    midTopContainer.appendChild(midTopRight)
    mid.appendChild(midBottomContainer)
    midBottomContainer.appendChild(bottomContent)
    aboutContainer.appendChild(footer)


    return aboutContainer
}

export { about }

