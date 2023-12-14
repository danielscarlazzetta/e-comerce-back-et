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

    @Prop({
        required: true,
    })
    description: string;
    
    @Prop({
        required: false,
    })
    review: string;
    
    @Prop({
        required: false,
    })
    technicalSpecifications: string;
    
    @Prop({
        required: false,
    })
    category: string;
}

export const ProductoSchema = SchemaFactory.createForClass( Producto );