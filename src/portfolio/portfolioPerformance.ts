import { assert } from "console";

/**
 * Represents the portfolio performance
 */
interface PortfolioPerformance{
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

/**
 * Represents investments/assets
 */
interface Asset{
    name: string;
    value: number;
}

/**
 * Finds the largest holding in a portfolio
 * @param assets - An array of the assets in the portfolio
 * @returns The investment that is worth the most
 */
export function findLargestHolding(
    assets: Asset[]
): Asset | null{
    if (assets.length === 0) return null;

    let largestHolding: Asset = assets[0];

    for (const asset of assets){
        if (asset.value > largestHolding.value){
            largestHolding = asset;
        }
    }
    return largestHolding;
}

/**
 * Calculates how much of the portfolio is invested in each asset
 * @param assets - An array of the assets in the portfolio
 * @returns A string of the assets and how much is invested in each of them
 */
export function calculateAssetAllocation(
    assets: Asset[]
): string{
    let totalPortfolio: number = 0;

    for (const asset of assets){
        totalPortfolio += asset.value;
    }

    let assetAllocation: string = "";

    if (totalPortfolio === 0){
        return assetAllocation;
    }

    for (const asset of assets){
        const percentage: number = (asset.value / totalPortfolio) * 100;
        assetAllocation += `${asset.name}: ${percentage.toFixed(2)}%\n`
    }

    return assetAllocation;
}