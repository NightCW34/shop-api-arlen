import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class ShopDto {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsNumber()
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  gender?: string;
}
