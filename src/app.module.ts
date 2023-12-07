import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CartServiceService } from './cart/cart-service/cart-service.service';
import { CartControllerController } from './cart/cart-controller/cart-controller.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductoModule
  ],
  controllers: [AppController, CartControllerController],
  providers: [AppService, CartServiceService],
})
export class AppModule {}
