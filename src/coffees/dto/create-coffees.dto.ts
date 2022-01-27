import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class CreateCoffeeDTO {
  @IsString()
  brand: string;

  @IsNumber()
  price: number;

  @IsString()
  name: string;

  @IsString({ each: true })
  flavors: string[];
}

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDTO) {}
