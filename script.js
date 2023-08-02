const texts = ["HTML", "CSS", "Bootstrap", "JavaScrpt","Java"]; // Add as many texts as you want
let currentIndex = 0;

function changeText() {
    const changingWord = document.querySelector(".changing-word");
    changingWord.textContent = texts[currentIndex];
    
    // Increment the index and reset it if it goes beyond the array length
    currentIndex = (currentIndex + 1) % texts.length;
}

// Change the text every 2 seconds (adjust the time interval as desired)
setInterval(changeText, 2000);

