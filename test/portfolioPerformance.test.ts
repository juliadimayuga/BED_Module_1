import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () =>{
    it("should return correct result for a profit", () =>{
        //Arrange
        const initialInvestment = 10000;
        const currentValue = 12000;

        //Act
        const actualResult = calculatePortfolioPerformance(initialInvestment, currentValue);

        //Assert
        expect(actualResult.initialInvestment).toBe(initialInvestment);
        expect(actualResult.currentValue).toBe(currentValue);
        expect(actualResult.profitOrLoss).toBe(2000);
        expect(actualResult.percentageChange).toBeCloseTo(20);
        expect(actualResult.performanceSummary).toMatch(/gained significantly/);
    });

    it("should return correct result for a loss", () =>{
        //Arrange
        const initialInvestment = 10000;
        const currentValue = 5000;

        //Act
        const actualResult = calculatePortfolioPerformance(initialInvestment, currentValue);

        //Assert
        expect(actualResult.initialInvestment).toBe(initialInvestment);
        expect(actualResult.currentValue).toBe(currentValue);
        expect(actualResult.profitOrLoss).toBe(-5000);
        expect(actualResult.percentageChange).toBeCloseTo(-50);
        expect(actualResult.performanceSummary).toMatch(/lost significantly/);
    });

    it("should return correct result for no change", () =>{
        //Arrange
        const initialInvestment = 10000;
        const currentValue = 10000;

        //Act
        const actualResult = calculatePortfolioPerformance(initialInvestment, currentValue);

        //Assert
        expect(actualResult.initialInvestment).toBe(initialInvestment);
        expect(actualResult.currentValue).toBe(currentValue);
        expect(actualResult.profitOrLoss).toBe(0);
        expect(actualResult.percentageChange).toBeCloseTo(0);
        expect(actualResult.performanceSummary).toMatch(/no change/);
    });
});