import { AwilixContainer, createContainer } from 'awilix';

export default class DependencyContainer{
    private static container: AwilixContainer;
    private static init(){
        this.container = createContainer();
    }

    static getContainer(){
        if(!this.container){
            this.init();
        }
        return this.container;
    }
}