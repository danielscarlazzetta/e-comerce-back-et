import { Injectable } from '@nestjs/common';
import { CartItem } from '../entities/cart.entity';
import { ProductoService } from 'src/producto/producto.service';

@Injectable()
export class CartServiceService {

    private cartItems: CartItem[] = [];
    constructor(private readonly productService: ProductoService) { }


    addToCart(productId: string, quantity: number = 1): void {
        this.productService.getProductName(productId)
            .then(productName => {
                if (!productName) {
                    throw new Error('Nombre de producto no encontrado');
                }

                const existingItem = this.cartItems.find(item => item.productId === productId);

                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    this.cartItems.push({ productId, productName, quantity });
                }
                return this.productService.updateProductStock(productId);
            })
            .catch(error => {
                console.error(error);
            });
    }


    removeFromCart(productId: string): void {
        this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    }

    getCartItems(): CartItem[] {
        // return this.cartItems;
        return this.cartItems.map(item => ({
            productId: item.productId,
            productName: item.productName,
            quantity: item.quantity
        }));
    }

    clearCart(): void {
        this.cartItems = [];
    }
}
