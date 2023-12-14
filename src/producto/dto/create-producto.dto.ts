import { IsString, IsNumber } from "class-validator";

export class CreateProductoDto {

    @IsString()
    name: string;

    @IsString()
    image?: string;

    @IsNumber()
    price: number;

    @IsNumber()
    amount: number;

    @IsString()
    description?: string;

    @IsString()
    review?: string;

    @IsString()
    technicalSpecifications?: string;
    
    @IsString()
    category?: string;
}
