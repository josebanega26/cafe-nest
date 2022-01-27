import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDTO, UpdateCoffeeDto } from './dto/create-coffees.dto';
import { Coffee } from '../coffees/entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffess: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      price: 10,
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffess;
  }

  findOne(id: string) {
    const coffee = this.coffess.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDTO) {
    this.coffess.push(createCoffeeDto as Coffee);
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffess.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffess.splice(coffeeIndex, 1);
    }
  }
}
