import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from './entities/producto.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Producto.name,
        schema: ProductoSchema,
      }
    ]),
    MulterModule.register({
      dest: './uploads', 
    }),
  ]
})
export class ProductoModule {}
