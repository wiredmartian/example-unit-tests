export interface CarService {
    getCar(id: string): Car
    logCarId(id: string): void
}

export class CarServiceImplementation implements CarService {
    logCarId(id: string): void {
        console.log(`the id: `, id)
    }

    getCar(id: string): Car {
        this.logCarId(id)
        throw new CarServiceException("function not implemented")
    }

}

// service exception
export class CarServiceException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CarServiceException"
    }
}


// types
export type Car = {
    id: string;
    name: string;
    make: string;
    model: string;
}