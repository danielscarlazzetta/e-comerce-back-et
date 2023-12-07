import { Injectable } from '@nestjs/common';
import { CartItem } from '../entities/cart.entity';

@Injectable()
export class CartServiceService {

    private cartItems: CartItem[] = [];

    addToCart(productId: string, quantity: number = 1): void {
        // Lógica para agregar un producto al carrito
        const existingItem = this.cartItems.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cartItems.push({ productId, quantity });
        }
    }




    removeFromCart(productId: string): void {
        // Lógica para eliminar un producto del carrito
        this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    }

    getCartItems(): CartItem[] {
        // Devuelve todos los elementos del carrito
        return this.cartItems;
    }

    clearCart(): void {
        // Lógica para limpiar el carrito (eliminar todos los elementos)
        this.cartItems = [];
    }
}
