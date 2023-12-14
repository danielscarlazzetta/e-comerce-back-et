import { Injectable } from '@nestjs/common';
import { CartItem } from '../entities/cart.entity';
import { ProductoService } from 'src/producto/producto.service';

@Injectable()
export class CartServiceService {

    private cartItems: CartItem[] = [];
    constructor(private readonly productService: ProductoService) {}
    
    // addToCart2(productId: string, productName: string, quantity: number = 1): void {
    //     const existingItem = this.cartItems.find(item => item.productId === productId);
    
    //     if (existingItem) {
    //         existingItem.quantity += quantity;
    //     } else {
    //         this.cartItems.push({ productId, productName, quantity });
    //     }
    // }
    addToCart2(productId: string, productName: string, quantity: number = 1): void {
        if (!productName) {
            throw new Error('Falta el nombre del producto');
        }
    
        const existingItem = this.cartItems.find(item => item.productId === productId);
    
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cartItems.push({ productId, productName, quantity });
        }
    }

    // addToCart4(productId: string, quantity: number = 1): void {
    //     const productName = this.productService.getProductName(productId);

    //     if (!productName) {
    //         throw new Error('No se encontró el nombre del producto');
    //     }

    //     const existingItem = this.cartItems.find(item => item.productId === productId);

    //     if (existingItem) {
    //         existingItem.quantity += quantity;
    //     } else {
    //         this.cartItems.push({ productId, productName, quantity });
    //     }
    // }

    // async addToCart(productId: string, quantity: number = 1): Promise<void> {
    //     try {
    //       const productName = await this.productService.getProductName(productId);
    
    //       if (!productName) {
    //         throw new Error(`No se encontró el nombre del producto con ID '${productId}'`);
    //       }
    
    //       const existingItem = this.cartItems.find(item => item.productId === productId);
    
    //       if (existingItem) {
    //         existingItem.quantity += quantity;
    //       } else {
    //         this.cartItems.push({ productId, productName, quantity });
    //       }
    //     } catch (error) {
    //       throw new Error(`Error al agregar el producto al carrito: ${error.message}`);
    //     }
    //   }


    addToCart(productId: string, quantity: number = 1): void {
        this.productService.getProductName(productId) // Usa ProductService para obtener el nombre del producto
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
          })
          .catch(error => {
            // Manejo de errores al obtener el nombre del producto
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
