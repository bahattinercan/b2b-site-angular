import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public id: number | undefined;
    public name: string | undefined;
    public address: string | undefined;
    public city: string | undefined;
    public phone: string | undefined;
    public email: string | undefined;
    public isSent: boolean = false;

    constructor(public cart: Cart) {

    }

    clearOrder() {
        this.id = undefined;
        this.name = this.address = this.city = this.phone = this.email = undefined;
        this.isSent = false;
        this.cart.clear();
    }
}