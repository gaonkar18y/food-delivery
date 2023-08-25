import DependencyContainer from './DependencyContainer';

import { IKafkaProducer } from '../services/kafka/IKafkaProducer';
import { KAFKA_PRODUCER_SERVICE } from './constants';

export const getKafkaProducer = (): IKafkaProducer=>{
    return DependencyContainer.getContainer().resolve(KAFKA_PRODUCER_SERVICE);
}