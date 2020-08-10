

const switchTop = document.getElementById('switch-top')
const basic = document.getElementById('basic-price')
const prof = document.getElementById('prof-price')
const master = document.getElementById('master-price')

let isMonth = true

const anual = ()=> {
    switchTop.style.marginLeft = '4px'
    basic.innerHTML = '&dollar;199.99'
    prof.innerHTML = '&dollar;249.99'
    master.innerHTML = '&dollar;399.99'
    isMonth = false
}

const month = ()=> {
    switchTop.style.marginLeft = '28px'
    basic.innerHTML = '&dollar;19.99'
    prof.innerHTML = '&dollar;24.99'
    master.innerHTML = '&dollar;39.99'
    isMonth = true
}

const togglePrice = ()=> {
    if (isMonth) {
        anual()
    } else {
        month()
    }
}

document.getElementById('switch-control').addEventListener('click', e => {
    e.preventDefault()
    togglePrice()
})
