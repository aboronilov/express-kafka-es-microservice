import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
    private _repository: ICatalogRepository

    constructor(repository: ICatalogRepository) {
        this._repository = repository
    }

    createProduct(input: any) {

    }

    updateProduct(id: number, data: any) {

    }

    getProducts(limit: number, offset: number) {

    }

    getProductById(id: number) {

    }

    deleteProduct(id: number) {

    }
}