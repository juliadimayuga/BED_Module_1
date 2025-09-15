import { findLargestHolding } from "../src/portfolio/portfolioPerformance";

describe("findLargestHolding", () => {
    it("should return the largest holding", () =>{
        //Arrange
        const assets = [
            {name: "House", value: 80},
            {name: "Car", value: 20},
            {name: "Land", value: 50}
        ];

        //Act
        const actualResult = findLargestHolding(assets);

        //Assert
        expect(actualResult).toEqual({name: "House", value: 80});
    });

    it("should return an empty string", () =>{
        //Arrange
        const assets: {name: string, value: number}[] = [];

        //Act
        const actualResult = findLargestHolding(assets);

        //Assert
        expect(actualResult).toBe("");
    });

    it("should return the asset found first if values tie", () =>{
        //Arrange
        const assets = [
            {name: "House", value: 80},
            {name: "Car", value: 20},
            {name: "Land", value: 80}
        ];

        //Act
        const actualResult = findLargestHolding(assets);

        //Assert
        expect(actualResult).toEqual({name: "House", value: 80});
    });
});