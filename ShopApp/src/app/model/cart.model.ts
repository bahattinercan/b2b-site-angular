import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public items: CartItem[] = []; // ürünler
    public itemCount: number = 0; // ürün sayısı
    public total: number = 0; // toplam fiyat

    addItem(product: Product, quantity: number = 1) {
        let item = this.items.find(i => i.product.id == product.id);
        // Eğer bu ürün önceden eklenmişse sayısı arttırılır
        if (item != undefined) {
            item.quantity += quantity;
        }
        // Eğer önceden eklenmemişse ürün sepete eklenir
        else {
            this.items.push(new CartItem(product, quantity));
        }
        this.calculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let item = this.items.find(i => i.product.id == product.id);
        if (item != undefined) {
                item.quantity = quantity;
        }
        this.calculate();
    }

    // Ürün sayısı ve toplam fiyat hesaplanır
    calculate() {
        this.itemCount = 0;
        this.total = 0;

        this.items.forEach(item => {
            this.itemCount += item.quantity;
            this.total += (item.quantity * item.product.price!);
        });
    }

    //  Sepetteki seçili id'deki ürün silinir
    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id == id);
        this.items.splice(index, 1);
        this.calculate();
    }

    // Sepetteki bütün ürünler silinir
    clear() {
        this.items = [];
        this.itemCount = 0;
        this.total = 0;
    }
}

export class CartItem {
    constructor(public product: Product,
        public quantity: number) { }
}