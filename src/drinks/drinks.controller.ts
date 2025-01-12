import { Controller, Get, Query } from '@nestjs/common';
import { DrinksService } from './drinks.service';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get('by-name')
  async getDrinksByName(@Query('name') name: string) {
    return this.drinksService.getDrinksByName(name);
  }

  @Get('by-category')
async getDrinksByCategory(@Query('category') category: string) {
  return this.drinksService.getDrinksByCategory(category);
}

}
