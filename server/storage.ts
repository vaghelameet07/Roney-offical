import { type Subscriber, type InsertSubscriber } from "@shared/schema";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscribers(): Promise<Subscriber[]>;
}

export class MemStorage implements IStorage {
  private subscribers: Map<number, Subscriber>;
  private currentId: number;

  constructor() {
    this.subscribers = new Map();
    this.currentId = 1;
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentId++;
    const subscriber: Subscriber = { ...insertSubscriber, id };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
}

export const storage = new MemStorage();
