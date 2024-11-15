import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const prisma = new PrismaClient();

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
}