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
}
