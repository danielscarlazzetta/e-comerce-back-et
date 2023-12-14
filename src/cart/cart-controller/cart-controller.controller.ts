import { CartServiceService } from '../cart-service/cart-service.service';

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

@Controller('cart')
export class CartControllerController {
  constructor(private readonly cartService: CartServiceService) { }

  @Post('add/:productId')
  addToCart(
    @Param('productId') productId: string,
    @Body('quantity') quantity: number,
    //@Body('productName') productName: string
    ) {

    this.cartService.addToCart(productId,  quantity);
    return { message: 'Producto agregado al carrito' };
  }

  @Delete('remove/:productId')
  removeFromCart(@Param('productId') productId: string) {
    this.cartService.removeFromCart(productId);
    return { message: 'Producto eliminado del carrito' };
  }

  @Get('contents')
  getCartContents() {
    const cartItems = this.cartService.getCartItems();
    return { cartItems };
  }
}
