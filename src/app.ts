import express, { Express, Request, Response } from "express";
import { calculateAssetAllocation, calculatePortfolioPerformance, findLargestHolding } from "./portfolio/portfolioPerformance";

const app: Express = express();

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/portfolio/performance", (req, res) =>{
    const initialInvestment = 10000;
    const currentValue = 12000;
    const portfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(portfolioPerformance);
});

app.get("/api/v1/portfolio/largest-holding", (req, res) =>{
    const assets = [
        {name: "House", value: 80},
        {name: "Car", value: 20},
        {name: "Land", value: 50}
    ];
    const largestHolding = findLargestHolding(assets);
    res.json(largestHolding);
});

app.get("/api/v1/portfolio/allocation", (req, res) =>{
    const assets = [
        {name: "House", value: 80},
        {name: "Car", value: 20},
        {name: "Land", value: 50}
    ];
    const assetAllocation = calculateAssetAllocation(assets);
    res.json(assetAllocation);
});

export default app;