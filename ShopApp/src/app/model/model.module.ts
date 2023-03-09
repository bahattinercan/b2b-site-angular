import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RestService } from "./rest.service";
import { CategoryRepository } from "./category.repository";
import { ProductRepository } from "./product.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { AuthService } from "./auth.service";

@NgModule({
    imports:[HttpClientModule],
    // Servisleri buraya ekliyoruz
    providers:[RestService,CategoryRepository,ProductRepository,Cart,Order,OrderRepository,AuthService]
})
export class ModelModule{

}