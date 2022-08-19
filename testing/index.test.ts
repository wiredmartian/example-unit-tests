import {mock, MockProxy} from "jest-mock-extended"
import { Car, CarService, CarServiceException, CarServiceImplementation } from "."

let carService: CarService

describe('UserServiceImplementation', () => {

    carService = new CarServiceImplementation()

    describe('getCar', () => {

        it('should throw an error when func is not implemented', () => {
            // Arrange
            let carId = "1"
            let error: any
            
            jest.spyOn(carService, "logCarId").mockImplementation(() => {
                console.log("hello")
            })

            // Act
            try {
                carService.getCar(carId)
            } catch (err) {
                error = err
            }
            // Assert
            expect(carService.logCarId).toHaveBeenCalled()
            expect(error).toBeInstanceOf(CarServiceException)
        })

        it('should return car object when successfully called', () => {
            // Arrange
            const expected: Car = {
                id: '2',
                name: 'FX-23 V',
                make: 'Ford',
                model: 'S3U'
            }
            jest.spyOn(carService, "getCar").mockReturnValueOnce({
                id: '2',
                name: 'FX-23 V',
                make: 'Ford',
                model: 'S3U'
            })

            // Act
            const actual = carService.getCar('2')

            // Assert
            expect(expected).toEqual(actual)
        })
    })
})