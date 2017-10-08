// Part 1: Create the hotel object and write out the offer details

const hotel = {
    name: "Park",
    roomRate: 240, // amount in dollars
    discount: 15,  // percentage amount
    offerPrice: (roomRate, discount) => roomRate * ((100 - discount) / 100)
};

const hotelName = document.getElementById("hotelName");
hotelName.textContent = hotel.name;

const roomRate = document.getElementById("roomRate");
roomRate.textContent = "$" + hotel.roomRate.toFixed(2);

const specialRate = document.getElementById("specialRate");
specialRate.textContent = "$" + hotel.offerPrice(hotel.roomRate, hotel.discount);