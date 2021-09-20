export interface ProductsNewResponseModel{
    product : Product
}

export interface Products {
    products : Array<Product>
}

export interface Product {
    backgroundImg       : String;
    buttonText          : String;
    link                : string;
    productDescription  : String;
    productId           : String;
    productImg          : String;
    productName         : String;
    show                : Boolean;
    type                : String;
}