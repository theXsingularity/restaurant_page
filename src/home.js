const home = () => {
    console.log('connected to home.js');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer')

    const headerBox1 = document.createElement('div');
    headerBox1.classList.add('headerBox1')
    headerBox1.innerHTML = 'Home';   

    const headerBox2 = document.createElement('div');
    headerBox2.classList.add('headerBox2')
    headerBox2.innerHTML = 'Menu';   

    const headerBox3 = document.createElement('div');
    headerBox3.classList.add('headerBox3')
    headerBox3.innerHTML = 'About';   


    headerContainer.appendChild(headerBox1)
    headerContainer.appendChild(headerBox2)
    headerContainer.appendChild(headerBox3)

    return headerContainer
}

export { home }

