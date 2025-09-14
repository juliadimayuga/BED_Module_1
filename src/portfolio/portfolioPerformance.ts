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

    let performanceSummary: string = "";
    switch (true){
        case percentageChange > 20:
            performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.`;
            break;
        case percentageChange > 10:
            performanceSummary = `The portfolio has gained moderately with a profit of $${profitOrLoss.toFixed(2)}.`;
            break;
        case percentageChange > 0.1:
            performanceSummary = `The portfolio has gained slightly with a profit of $${profitOrLoss.toFixed(2)}.`;
            break;
        case percentageChange > 0:
            performanceSummary = `The portfolio has no change.`;
            break;
        case percentageChange > -0.1:
            performanceSummary = `The portfolio has lost slightly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`;
            break;
        case percentageChange > -10:
            performanceSummary = `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`;
            break;
        case percentageChange > -20:
            performanceSummary = `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`;
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