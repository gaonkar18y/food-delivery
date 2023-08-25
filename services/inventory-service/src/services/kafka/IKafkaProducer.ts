import { Message } from "kafkajs";

export interface IKafkaProducer {
    sendMessages(topic: string, messages: Message[]) : Promise<void>
}