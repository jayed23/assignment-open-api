import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DrinksService {
  private readonly apiUrl = 'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes';
  private readonly headers = {
    'X-Rapidapi-Key': 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026',
    'X-Rapidapi-Host': 'starbucks-coffee-db2.p.rapidapi.com',
  };

  async getDrinksByName(name: string) {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: this.headers,
        params: { name },
      });

      // Transform the raw data into a "cutesy" format
      const transformedResponse = response.data.map((recipe: any) => ({
        name: `✨ ${recipe.name} ✨`,
        description: `💡 ${recipe.description}`,
        image: recipe.image ? `🌟 Here's how it looks: ${recipe.image}` : '🍹 No image available!',
        category: `📂 Category: ${recipe.category}`,
        ingredients: `🛍️ Ingredients: ${recipe.recipeIngredient.join(', ')}`,
        instructions: recipe.recipeInstructions.map(
          (step: any) => `👉 Step ${step.name}: ${step.text}`
        ),
        prepTime: `⏱️ Prep Time: ${recipe.prepTime}`,
        totalTime: `⏳ Total Time: ${recipe.totalTime}`,
        serves: `🍴 Serves: ${recipe.recipeYield}`,
        published: `📅 Published on: ${recipe.datePublished}`,
      }));

      return {
        message: '🌸 Here’s your delicious drink recipe, crafted with love! 🌸',
        recipes: transformedResponse,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to fetch drinks by name 🫤. Please try again later!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getDrinksByCategory(category: string) {
    try {
      // Fetch drinks from the API
      const response = await axios.get(this.apiUrl, {
        headers: this.headers,
        params: { category },
      });
  
      // Customize the response to be cute and fun ✨
      const customizedDrinks = response.data.map((drink: any) => ({
        id: drink._id,
        name: `🍹 ${drink.name} 🌟`, // Add emojis to the name
        description: drink.description
          ? `✨ ${drink.description} ✨` // Wrap the description with sparkles
          : "No description available, but it’s sure to be delicious! 😋",
        image: drink.image || "https://example.com/default-drink-image.png", // Fallback image
        category: `🍭 ${category.toUpperCase()} 🍭`, // Add fun emojis to the category
      }));
  
      return customizedDrinks;
    } catch (error) {
      // Handle errors with a fun message
      throw new HttpException(
        `😢 Oh no! We couldn’t fetch the drinks in the "${category}" category. But don’t worry—we’ll fix this faster than you can say “Caramel Macchiato!” ☕✨`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  
}
