// Variables 
// set initial value 
let countValue = 0;
// select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            countValue --;
        } else if (styles.contains('increase')) {
            countValue ++;
        } else {
            countValue = 0;
        }
        value.textContent = countValue;
    })
});
