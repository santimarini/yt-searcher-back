import * as dotenv from 'dotenv';
dotenv.config();

export const DB_PROVIDER = 'DbConnectionToken';
export const USER_MODEL_PROVIDER = 'UserModelProvider';
export const SERVICE = 'DB_MONGO_SERVICE';
export const APP_NAME = process.env.APP_NAME || 'clean.architecture';
export const DATABASE_SERVICE =
  process.env.DATABASE_SERVICE || 'DATABASE_SERVICE';
export const APP_PORT = process.env.PORT || 3000;
export const APP_HOST = process.env.APP_HOST || 'localhost';
export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
export const YOUTUBE_BASE_URL = process.env.YOUTUBE_BASE_URL || 'https://www.googleapis.com/youtube/v3';
