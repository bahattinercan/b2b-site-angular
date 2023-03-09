import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public selectedCategory: Category | undefined;
  public productsPerPage = 3;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];

  constructor(
    private productRepository: ProductRepository) { }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage; // ürünlerin bilgilerinin alınacağı index numarası sayfa 1 ise 0 dan başlar

    this.selectedProducts = this.productRepository.getProducts(this.selectedCategory!);
    // Seçilen categoriye göre ürünleri getirir ve Sayfadaki gösterilecek ürün sayısını sayfa numbarasına göre ürün getirir
    return this.selectedProducts.slice(index, index + this.productsPerPage);
  }


  get pageNumbers(): number[] {
    const urunler = this.productRepository.getProducts(this.selectedCategory!);
    const buttonSayisi = Math.ceil(urunler.length / this.productsPerPage);
    return Array(buttonSayisi).fill(0).map((a, i) => i + 1);
  }

  changePage(p: number) {
    this.selectedPage = p;
  }

  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }

  getCategory(category:Category) {
    this.selectedCategory=category;
  }

}
