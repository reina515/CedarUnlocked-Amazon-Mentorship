export const SelectTravelersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    people: "1 Person",
    image: require("../assets/images/solo.jpg"),
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    people: "2 People",
    image: require("../assets/images/couple.jpg"),
  },
  {
    id: 3,
    title: "A Family",
    desc: "A group of fun adventures",
    people: "3 to 7 People",
    icon: "🌆",
    image: require("../assets/images/family.jpg"),
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    people: "5 to 10 People",
    image: require("../assets/images/friends.jpg"),
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: `Budget-friendly stays, public transport, local food, and free/low-cost sightseeing. Perfect for travelers who want a rich experience without overspending.`,
  },
  {
    id: 2,
    title: 'Moderate',
    desc: `Comfortable hotels, private taxis, mix of local and international dining, guided tours for main attractions. Ideal for travelers who want comfort without breaking the bank.`,
  },
  {
    id: 3,
    title: 'Luxury',
    desc: `5-star hotels, private transport, fine dining, exclusive tours and experiences. Designed for travelers who want to enjoy the best Lebanon has to offer.`,
  }
];


export const AI_PROMT='Generate Travel Plan for Location:{location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'