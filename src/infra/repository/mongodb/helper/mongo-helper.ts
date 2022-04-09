import { MongoClient, Collection } from 'mongodb';

export const MongoHelper = {
  client: null as MongoClient,
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri);
  },
  async disconnect(): Promise<void> {
    await this.client.close();
  },
  async getCollection(cases: string): Promise<Collection> {
    const returnCollection = await this.client.db().collection(cases);
    return returnCollection;
  },
  async clearCollection(cases: string): Promise<void> {
    await this.client.db().collection(cases).deleteMany({});
  },
};
