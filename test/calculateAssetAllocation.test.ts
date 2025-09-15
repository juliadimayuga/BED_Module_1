import { calculateAssetAllocation } from "../src/portfolio/portfolioPerformance";

describe("calculateAssetAllocation", () => {
    it("should calculate even distributions", () =>{
        //Arrange
        const assets = [
            {name: "House", value: 50},
            {name: "Car", value: 50}
        ];

        //Act
        const actualResult = calculateAssetAllocation(assets);

        //Arrange
        expect(actualResult).toEqual("House: 50.00%\nCar: 50.00%");
    });

    it("should calculate uneven distributions", () =>{
        //Arrange
        const assets = [
            {name: "House", value: 75},
            {name: "Car", value: 25}
        ];

        //Act
        const actualResult = calculateAssetAllocation(assets);

        //Arrange
        expect(actualResult).toEqual("House: 75.00%\nCar: 25.00%");
    });

    it("should return an empty string", () =>{
        //Arrange
        const assets: {name: string, value: number}[] = [];

        //Act
        const actualResult = calculateAssetAllocation(assets);

        //Arrange
        expect(actualResult).toBe("");
    });
});