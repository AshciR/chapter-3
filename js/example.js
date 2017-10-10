// Part 1: Create the hotel object and write out the offer details

const hotel = {
    name: "Park",
    roomRate: 240, // amount in dollars
    discount: 15,  // percentage amount
    offerPrice: (roomRate, discount) => roomRate * ((100 - discount) / 100)
};

// Part 2: Calculate and Write out the expiry details.
offerExpires = (today) => {
    // Add 7 days time (added in milliseconds)
    let weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    let parsedWeekFromToday = parseWeekFromToday(weekFromToday);
    let expireMessage = createExpireMessage(parsedWeekFromToday);
}

parseWeekFromToday = (weekFromToday) => {
     // Create arrays to hold the names of days / months
     dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     monthNames = ['January', 'February', 'March', 'April', 
                   'May', 'June', 'July', 'August', 
                   'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    let day = dayNames[weekFromToday.getDay()];
    let date = weekFromToday.getDate();
    let month = monthNames[weekFromToday.getMonth()];
    let year = weekFromToday.getFullYear();

    // Return the parts of the date as an array which can be destructed
    return[day, date, month, year];
}

createExpireMessage = (parsedWeekFromToday) => {
    let day = parsedWeekFromToday[0];
    let date = parsedWeekFromToday[1];
    let month = parsedWeekFromToday[2];
    let year = parsedWeekFromToday[3];

    return "Offer expires next" + day + '<br />(' + date + ' ' + month + ' ' + year + ')';
} 

const hotelName = document.getElementById("hotelName");
hotelName.textContent = hotel.name;

const roomRate = document.getElementById("roomRate");
roomRate.textContent = "$" + hotel.roomRate.toFixed(2);

const specialRate = document.getElementById("specialRate");
specialRate.textContent = "$" + hotel.offerPrice(hotel.roomRate, hotel.discount);

let today = new Date();
let elEnds = document.getElementById("offerEnds");
elEnds.innerHTML = offerExpires(today);