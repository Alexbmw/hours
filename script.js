const hour = document.querySelector(' .hours'),
    min = document.querySelector(' .minutes'),
    sec = document.querySelector(' .seconds');

function clock() {
    
    let time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    
    hour.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();

    setTimeout(() => clock(), 1000);
}



clock()

