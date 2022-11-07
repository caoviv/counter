// Variables 
// set initial value 
let countValue = 0;
// select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        // decrease countValue 
        if (styles.contains('decrease')) {
            countValue --;
        // increase countValue 
        } else if (styles.contains('increase')) {
            countValue ++;
        // reset countValue 
        } else {
            countValue = 0;
        }
        // change positive numbers to green
        if (countValue > 0) {
            value.style.color = 'green';
        }
        // change negative numbers to red
        if (countValue < 0) {
            value.style.color = 'red';
        }
        // change number 0 to black
        if (countValue === 0) {
            value.style.color = '#222';
        }
        value.textContent = countValue;
    })
});
