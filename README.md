# SDET Skill Assessment

## Overview

This project demonstrates a hotel price comparison workflow implemented using TypeScript.

The application identifies the highest-rated 5-star hotel in a given city and compares prices across multiple booking platforms for a 5-night stay for 2 adults and 1 infant (under 2 years old). The solution then determines the website offering the lowest price.

## Features

* TypeScript-based implementation
* Modular architecture
* Separate provider modules for different booking platforms
* Price comparison logic
* JSON output format
* Error handling and asynchronous processing

## Assumptions

* Currency: INR
* Stay Duration: 5 nights
* Guests: 2 adults and 1 infant
* Future travel dates within the current calendar year
* Booking.com is used as the reference source for hotel identification

# Installation

npm install

# Run

npx ts-node src/index.ts

# Output

json
{
  "city": "Mumbai",
  "hotel": "The Oberoi Mumbai",
  "rating": 9.4,
  "stayDetails": {
    "nights": 5,
    "adults": 2,
    "infants": 1
  },
  "prices": [
    {
      "website": "Booking.com",
      "price": 22500
    },
    {
      "website": "Agoda",
      "price": 21800
    }
  ],
  "lowestPriceWebsite": "Agoda",
  "lowestPrice": 21800,
  "currency": "INR"
}



