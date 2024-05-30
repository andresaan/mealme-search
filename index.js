
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        // "Id-Token": ADD KEY HERE,
    },
};

async function search() {
    const response = await fetch(
        "https://api.mealme.ai/search/store/v3?latitude=30.2672&longitude=-97.7431&store_type=restaurant",
        options
    )

    const restaurants = await response.json();

    let restaurantNames = [];

    restaurants.stores.forEach(e => {
        restaurantNames.push(e.name);
    });

    console.log(restaurantNames);
}

search();

// Instructions

// Add api key to header

// Open Terminal

// Navigate to file

// node index.js 