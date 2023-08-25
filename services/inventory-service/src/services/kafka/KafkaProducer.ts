import { Kafka, Message, Producer, KafkaConfig } from 'kafkajs';
import { IKafkaProducer } from './IKafkaProducer';

const clientId = "inventoryservicep";
const brokers = ["127.0.0.1:9092"];

export class KafkaProducer implements IKafkaProducer{
    private producer: Producer | undefined;
    constructor(){
        this.init();
    }

    private async init(){
        const config: KafkaConfig =  { clientId, brokers };
        const kafka = new Kafka(config);
        this.producer = kafka.producer();
    }

    public async sendMessages(topic: string, messages: Message[]){
        if(!this.producer){
            throw new Error("Kafka producer not initialized");
        }
        await this.producer.connect()
        await this.producer.send({ topic, messages });
        console.log('Messages sent successfully')
    }
}