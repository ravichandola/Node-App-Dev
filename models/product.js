// Model file

const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        products.push(this);
    }

    //Retrieve all products from an array
    static fetchAll(){
        return products;
    }
}

