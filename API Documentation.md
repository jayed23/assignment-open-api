# Starbucks Drinks API Documentation

## **Introduction**
The Starbucks Drinks API allows users to retrieve information about Starbucks drinks by name or category. This API integrates with the Starbucks Coffee Database on RapidAPI to fetch data.

---

## **Base URL**

http://localhost:3000



---

## **Endpoints**

### **1. Get Drinks by Name**
Retrieve information about a specific drink by its name.

- **Endpoint:**  
  `GET /drinks/by-name`

- **Query Parameters:**
  | Parameter | Type   | Required | Description           |
  |-----------|--------|----------|-----------------------|
  | `name`    | string | Yes      | Name of the drink to search for. |

- **Request Headers:**
  | Header              | Required | Description                        |
  |---------------------|----------|------------------------------------|
  | `X-Rapidapi-Key`    | Yes      | API key for accessing RapidAPI.    |
  | `X-Rapidapi-Host`   | Yes      | Host header for the RapidAPI.      |

- **Sample Request:**

http://localhost:3000/drinks/by-name?name=Caramel Macchiato


{
    "message": "🌸 Here’s your delicious drink recipe, crafted with love! 🌸",
    "recipes": [
        {
            "name": "✨ Caramel Macchiato ✨",
            "description": "💡 Debuted by Starbucks in 1996, the Caramel Macchiato has been a café favorite for over two decades. Learn how to craft this coffee classic at home with this simple recipe. Make it frothy with a mix of smooth vanilla and velvety caramel for the perfect amount of sweetness. Top it off with a drizzle of caramel for a coffee that tastes as delicious as it looks.",
            "image": "🌟 Here's how it looks: https://athome.starbucks.com/sites/default/files/2022-05/CAH_Header_Caramel_macch_2880x1660_0.jpg",
            "category": "📂 Category: HOT BEVERAGES",
            "ingredients": "🛍️ Ingredients: 1  Starbucks® Espresso Roast by Nespresso® capsule​, 0.75 cup milk of choice, 1 Tbsp homemade Vanilla Syrup (or storebought), homemade Caramel Sauce (or storebought) for garnish",
            "instructions": [
                "👉 Step 01: Pour vanilla syrup into the bottom of your mug.",
                "👉 Step 02: In a separate container, froth the milk and then pour into mug.",
                "👉 Step 03: Prepare 1 shot of Starbucks® Espresso Roast by Nespresso® and pour through the foam.",
                "👉 Step 04: Drizzle caramel sauce on top. Enjoy!"
            ],
            "prepTime": "⏱️ Prep Time: PT7M",
            "totalTime": "⏳ Total Time: PT7M",
            "serves": "🍴 Serves: 1 serving",
            "published": "📅 Published on: Thu, 05/27/2021 - 13:23"
        },
        {
            "name": "✨ Iced Caramel Macchiato ✨",
            "description": "💡 Sweet. Creamy. And chilled to perfection. Rich espresso, milk and vanilla syrup are topped with caramel for a delightfully refreshing start to your day.",
            "image": "🌟 Here's how it looks: https://athome.starbucks.com/sites/default/files/2021-07/IcedCaramelMacchiato_Header_0.jpg",
            "category": "📂 Category: ICED BEVERAGES",
            "ingredients": "🛍️ Ingredients: 1 oz homemade Vanilla Syrup (or storebought), 0.75 cup 2% milk, 2 shots Starbucks® Espresso Roast​, , homemade Caramel Sauce (or storebought) for garnish",
            "instructions": [
                "👉 Step 01: Place vanilla syrup in a glass.",
                "👉 Step 02: Add cold 2% milk.",
                "👉 Step 03: Fill glass with ice to ½ inch below rim.",
                "👉 Step 04: Pour in Starbucks® espresso shots.",
                "👉 Step 05: Top with caramel sauce."
            ],
            "prepTime": "⏱️ Prep Time: PT5M",
            "totalTime": "⏳ Total Time: PT5M",
            "serves": "🍴 Serves: 1 serving",
            "published": "📅 Published on: Mon, 07/05/2021 - 12:06"
        }
    ]
}
Error Response:

{
  "statusCode": 400,
  "message": "Failed to fetch drinks by name"
}



### **2. Get Drinks by Category**
Retrieve a list of drinks filtered by their category.

- **Endpoint:**  
  `GET /drinks/by-category`

- **Query Parameters:**
  | Parameter | Type   | Required | Description           |
  |-----------|--------|----------|-----------------------|
  | `category`    | string | Yes      | The category to search for.. |

- **Request Headers:**
  | Header              | Required | Description                        |
  |---------------------|----------|------------------------------------|
  | `X-Rapidapi-Key`    | Yes      | API key for accessing RapidAPI.    |
  | `X-Rapidapi-Host`   | Yes      | Host header for the RapidAPI.      |

- **Sample Request:**
  ```http
 GET /drinks/by-category?category=HOT%20BEVERAGES HTTP/1.1
Host: localhost:3000

Sample Response:

    {
        "id": "6681b8d94507f78afe801839",
        "name": "🍹 Caramel Macchiato 🌟",
        "description": "✨ Debuted by Starbucks in 1996, the Caramel Macchiato has been a café favorite for over two decades. Learn how to craft this coffee classic at home with this simple recipe. Make it frothy with a mix of smooth vanilla and velvety caramel for the perfect amount of sweetness. Top it off with a drizzle of caramel for a coffee that tastes as delicious as it looks. ✨",
        "image": "https://athome.starbucks.com/sites/default/files/2022-05/CAH_Header_Caramel_macch_2880x1660_0.jpg",
        "category": "🍭 HOT BEVERAGES 🍭"
    },
    {
        "id": "6681b8d94507f78afe801855",
        "name": "🍹 Peppermint White Chocolate Coffee 🌟",
        "description": "✨ Time to cozy up by the fire. Celebrate the season with this delicious peppermint and white chocolaty recipe featuring new Starbucks® Holiday Blend for Nespresso® Vertuo and Starbucks® White Chocolate Flavored Creamer. ✨",
        "image": "https://athome.starbucks.com/sites/default/files/2023-11/CAH_Recipe_Header_2880x1660_0.jpg",
        "category": "🍭 HOT BEVERAGES 🍭"
    },


Error Response:

{
  "statusCode": 400,
  "message": "Failed to fetch drinks by category"
}

