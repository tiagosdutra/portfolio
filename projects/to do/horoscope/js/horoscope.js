//create a horoscope
//have them give us a month and day
//spit out bs



// if ((month && day) || (month && day))

document.querySelector('button').addEventListener('click', horoscope)

function horoscope(){
    const month = document.querySelector('.month').value.toLowerCase()
    const day = document.querySelector('.day').value

    if ((month === 'march' && day >= 21 && day<= 31) || (month === 'april' && day <= 19)){
        document.querySelector('h2').innerText = 'Aries'
    } else if ((month === 'april' && day >= 20 && day<= 30) || (month === 'may' && day <= 20)){
        document.querySelector('h2').innerText = 'Taurus'
    } else if ((month === 'may' && day >= 21 && day<= 31) || (month === 'june' && day <= 20)){
        document.querySelector('h2').innerText = 'Gemini'
    } else if ((month === 'june' && day >= 21 && day<= 30) || (month === 'july' && day <= 22)){
        document.querySelector('h2').innerText = 'Cancer'
    } else if ((month === 'july' && day >= 23 && day<= 30) || (month === 'august' && day <= 22)){
        document.querySelector('h2').innerText = 'Leo'
    } else if ((month === 'august' && day >= 23 && day<= 31) || (month === 'september' && day <= 22)){
        document.querySelector('h2').innerText = 'Virgo'
    } else if ((month === 'september' && day >= 23 && day<= 30) || (month === 'october' && day <= 22)){
        document.querySelector('h2').innerText = 'Libra'
    } else if ((month === 'october' && day >= 23 && day<= 31) || (month === 'november' && day <= 21)){
        document.querySelector('h2').innerText = 'Scorpio'
    } else if ((month === 'november' && day >= 22 && day<= 30) || (month === 'december' && day <= 21)){
        document.querySelector('h2').innerText = 'Sagitarrius'
    } else if ((month === 'december' && day >= 22 && day<= 31) || (month === 'january' && day <= 19)){
        document.querySelector('h2').innerText = 'Capricorn'
    } else if ((month === 'january' && day >= 20 && day<= 31) || (month === 'february' && day <= 18)){
        document.querySelector('h2').innerText = 'Aquarius'
    } else if ((month === 'february' && day >= 19 && day<= 29) || (month === 'march' && day <= 20)){
        document.querySelector('h2').innerText = 'Pisces'
    } else {
        document.querySelector('h2').innerText = 'TRY AGAIN'
    }





}
