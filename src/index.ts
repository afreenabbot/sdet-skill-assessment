import { getHighestRatedHotel } from "./bookingScraper";
import { getAgodaPrice } from "./agodaScraper";

async function main() {
  const city = "Mumbai";

  const bookingData = await getHighestRatedHotel(city);
  const agodaData = await getAgodaPrice(
    bookingData.hotelName
  );

  const prices = [
    {
      website: bookingData.website,
      price: bookingData.price
    },
    {
      website: agodaData.website,
      price: agodaData.price
    }
  ];

  const lowestPrice = prices.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );

  const result = {
    city,
    hotel: bookingData.hotelName,
    rating: bookingData.rating,
    stayDetails: {
      nights: 5,
      adults: 2,
      infants: 1
    },
    prices,
    lowestPriceWebsite: lowestPrice.website,
    lowestPrice: lowestPrice.price,
    currency: "INR"
  };

  console.log(JSON.stringify(result, null, 2));
}

main();