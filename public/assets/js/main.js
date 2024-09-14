
const dropDownShow = document.getElementById('dropdown_show')
const dropDown = document.getElementById('drop-down')
const productMenuDown = document.getElementById('product_menu_icon_down')
const productMenuUp = document.getElementById('product_menu_icon_up')

dropDownShow.addEventListener('click', () => {

    if (dropDown.className.search('lg:hidden') == -1) {
        dropDown.classList.add('lg:hidden')
        productMenuDown.classList.remove('lg:hidden')
        productMenuUp.classList.add('lg:hidden')
    } else {
        dropDown.classList.remove('lg:hidden')
        productMenuDown.classList.add('lg:hidden')
        productMenuUp.classList.remove('lg:hidden')
    }
})



