import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
  Delete,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDTO, UpdateCoffeeDto } from './dto/create-coffees.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffessService: CoffeesService) {}
  @Get('')
  findAll(@Query() queryParams) {
    const { limit, offset } = queryParams;
    return this.coffessService.findAll();
  }

  @Get(':id')
  findOne(@Param(':id') id: string) {
    return this.coffessService.findOne(id);
  }

  @Post('')
  create(@Param(':id') id: string, @Body() body: CreateCoffeeDTO) {
    console.log('body', body);
    return this.coffessService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
    return this.coffessService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remove(id);
  }
}
