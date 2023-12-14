import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './entities/producto.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductoService {

  constructor(
    @InjectModel(Producto.name)
    private productoModel: Model<Producto>,
  ) { }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {

    try {
      const newProducto = new this.productoModel(createProductoDto);
      return await newProducto.save()

    } catch (err) {
      throw new InternalServerErrorException('Algo ha ocurrido');
    }
  }

  findAll() {
    return this.productoModel.find();
  }

  async findOne(id: string): Promise<Producto | null> {
    try {
      const product = await this.productoModel.findById(id).exec();
      return product;

    } catch (err) {
      throw new NotFoundException(`Producto con ID '${id}' no encontrado`);
    }
  }


  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto | null> {
    try {
      const updatedProduct = await this.productoModel.findByIdAndUpdate(id, updateProductoDto, { new: true }).exec();
      if (!updatedProduct) {
        throw new NotFoundException(`Producto con ID '${id}' no encontrado`);
      }
      return updatedProduct;
    } catch (error) {
      throw new NotFoundException(`Producto con ID '${id}' no encontrado`);
    }
  }

  async remove(id: string): Promise<void> {
    const deletedProduct = await this.productoModel.findByIdAndDelete(id).exec();
    if (!deletedProduct) {
      throw new NotFoundException(`Producto con ID '${id}' no encontrado`);
    }
  }

  async getProductName(productId: string): Promise<string | undefined> {
    try {
      const product = await this.productoModel.findById(productId).exec();
      return product ? product.name : undefined;
    } catch (error) {
      throw new NotFoundException(`Producto con ID '${productId}' no encontrado`);
    }
  }

  async updateProductStock(productId: string): Promise<void> {
    const product = await this.productoModel.findById(productId).exec();
    if (product) {
      if (product.amount > 0) {
        product.amount -= 1;
        await product.save();
      } else {
        throw new Error('No hay suficiente stock disponible');
      }
    } else {
      throw new Error('Producto no encontrado');
    }
  }

}
