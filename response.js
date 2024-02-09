const image = document.getElementById('image');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');

yesBtn.addEventListener('click', function() {
    // Change image source when Yes button is clicked
    image.src = 'hug-love.gif';
    question.textContent = "She Loves Me";
    // Remove the buttons
    yesBtn.remove();
    noBtn.remove();
});

let noBtnClickCount = 0;
noBtn.addEventListener('click', function() {
    // Increase the size of the Yes button each time the No button is clicked
    noBtnClickCount++;
    if(noBtnClickCount==1){
        yesBtn.style.fontSize = (20 + noBtnClickCount * 10) + 'px';
    } if(noBtnClickCount==2){
        yesBtn.style.fontSize = (20 + noBtnClickCount * 10) + 'px';
        image.src = 'sad1.gif';
        question.textContent = "ouch your breaking my heart :(";
    } if(noBtnClickCount==3){
        image.src = 'sad2.gif';
        question.textContent = "how you feel clicking NO.... took away ur NO";
        noBtn.remove();
    }
    
});
