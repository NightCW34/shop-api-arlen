import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

@Entity()
export class ShopEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ unique: true })
  @IsString()
  title: string;

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  price?: number;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  @IsOptional()
  description?: string;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  slug?: string;

  @Column({ default: 0, nullable: true })
  @IsNumber()
  @IsOptional()
  stock?: number;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  gender?: string;
}
