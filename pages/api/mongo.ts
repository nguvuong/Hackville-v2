// mongo.js
import { MongoClient } from 'mongodb';
import process from 'process';
require('dotenv').config();
const mongodbUri: string = process.env.MONGODB_URI ?? '';

export async function connectToDatabase() {
    if (!mongodbUri) {
        throw new Error('MongoDB URI is not defined');
    }

    const client = await MongoClient.connect(mongodbUri, {

    });

    return client;
}