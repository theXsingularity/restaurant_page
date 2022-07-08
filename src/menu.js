const menu = () => {
    console.log('connected to menu.js');

    const menuContainer = document.createElement('button')
    menuContainer.classList.add('menuContainer')

    const breakfast = document.createElement('div');
    breakfast.classList.add('breakfast');
    breakfast.classList.add('menu');
    breakfast.innerHTML = 'breakfast';   

    const lunch = document.createElement('div');
    lunch.classList.add('lunch');
    lunch.classList.add('menu');
    lunch.innerHTML = 'lunch';   

    const dinner = document.createElement('div');
    dinner.classList.add('dinner');
    dinner.classList.add('menu');
    dinner.innerHTML = 'dinner';   

  


    menuContainer.appendChild(breakfast)
    menuContainer.appendChild(lunch)
    menuContainer.appendChild(dinner)


    return menuContainer
}

export { menu }

