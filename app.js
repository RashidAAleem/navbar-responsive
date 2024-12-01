var toggleBtn = document.querySelector('.toggle_btn')
var toggleBtnIcon = document.querySelector('.toggle_btn i')
var dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    var isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen?
    'fa-solid fa-xmark'
    :'fa-solid fa-bars'
    
}