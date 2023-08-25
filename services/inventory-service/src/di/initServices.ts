import { asClass, Lifetime } from 'awilix';

import { KafkaProducer } from '../services/kafka/KafkaProducer';
import DependencyContainer from './DependencyContainer';
import { KAFKA_PRODUCER_SERVICE } from './constants';

export const initServices = ()=>{
    DependencyContainer.getContainer().register(KAFKA_PRODUCER_SERVICE,
        asClass(KafkaProducer, {lifetime: Lifetime.SINGLETON}))
}