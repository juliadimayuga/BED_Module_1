/**
 * Represents the portfolio performance
 */
interface PortfolioPerformance {
 	    initialInvestment: number;
        currentValue: number;
        profitOrLoss: number;
        percentageChange: number;
        performanceSummary: string;
}

type Performance = "high" | "low";

/**
 * Calculates the portfolio performance
 * @param initialInvestment - The amount initially invested
 * @param currentValue - The current value of the investment
 * @returns The portfolio performance
 */
export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): PortfolioPerformance{
    const profitOrLoss: number = currentValue - initialInvestment;
    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    const performanceType: Performance = percentageChange > 20 ? "high" : "low";
    let performanceSummary: string;
    switch (performanceType){
        case "high":
            performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.`;
            break;
        case "low":
            performanceSummary = `The portfolio has performed poorly.`;
            break;
    }

    return{
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}