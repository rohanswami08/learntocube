var dropdownBtn = document.getElementById('dropdown-btn')
var dropdownContent = document.getElementById('dropdown-content')
var hidden = true

dropdownContent.style.display = 'none'

dropdownBtn.addEventListener('click', function() {
    if (hidden) {
        dropdownContent.style.display = 'flex'
    } else {
        dropdownContent.style.display = 'none'
    }
    hidden = !hidden
})