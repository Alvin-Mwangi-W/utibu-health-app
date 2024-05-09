import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import authRoutes from "./routes/auth.routes";
import { PrismaClient } from "@prisma/client";

const app: Express = express();

app.use(express.json());

app.use('/api', authRoutes)

export const prismaClient = new PrismaClient({
    log: ['query']
});

app.listen(PORT, () => {
    console.log(`Server Working on ${PORT}`);
});
