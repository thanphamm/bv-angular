import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '01', name: 'sp 1', price: 30000, photo: 'assets/images/laptopnew-asus--vivobook-a512-6_3.jpg' },
            { id: '02', name: 'sp 2', price: 54000, photo: 'assets/images/37434_laptop_asus_d409da_ek152t_1_1.png' },
            { id: '03', name: 'sp 3', price: 22000, photo: 'assets/images/surface-laptop-3-13-5-header.jpg' },
            { id: '04', name: 'sp 4', price: 1300, photo: 'assets/images/16601-laptop-dell-inspiron-n5593-70196703.jpg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}