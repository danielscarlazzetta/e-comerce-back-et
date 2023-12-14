import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Producto {

    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    image: string;

    @Prop({
        required: true,
    })
    price: number;

    @Prop({
        required: true,
    })
    amount: number;
}

export const ProductoSchema = SchemaFactory.createForClass( Producto );