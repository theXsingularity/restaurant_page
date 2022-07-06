const home = () => {
    console.log('connected to home.js');

    const container = document.createElement('div')
    container.classList.add('container')

    const header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = "this is the header"

    const middle = document.createElement('div')
    middle.classList.add('middle')
    middle.innerHTML = "this is the middle part"
    
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.innerHTML = "this is the footer"

    container.appendChild(header)
    container.appendChild(middle)
    container.appendChild(footer)

    console.log(container)



    return container
}

export { home }

