import { createJupiterApiClient } from '@jup-ag/api';
import * as dotenv from 'dotenv';
dotenv.config();

const ENDPOINT = process.env.JUP_ENDPOINT;
const CONFIG = {
    basePath: ENDPOINT
};
const jupiterApi = createJupiterApiClient(CONFIG);