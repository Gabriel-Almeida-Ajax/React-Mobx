import { makeObservable, observable, action } from 'mobx'

export class TimerStore {
    currentTime: number;
    updateRate: number;
    interval: NodeJS.Timer | undefined;
    history: number[];

    constructor(updateRate: number) {
        this.currentTime = 0;
        this.updateRate = updateRate;
        this.interval = undefined;
        this.history = [];

        makeObservable(this, {
            updateRate: observable,
            interval: observable,
            currentTime: observable,
            restart: action,
            stop: action,
            start: action
        });
    }

    _increment() {
        this.currentTime += this.updateRate / 1000;
    }
    _update(){
        this.interval = setInterval(() => {
            this._increment();
        }, this.updateRate);
    }
    restart() {
        this.stop();
        this.start();
    }
    stop() {
        if (!!this.interval) {
            this.history.push(this.currentTime);
            clearInterval(this.interval);
        }
    }
    start() {
        // Caso esteja rodando algum intervalo, ele é parado
        if (!!this?.interval)
            this.stop();

        // Inicia o intervalo zerado
        this.currentTime = 0;

        // Atualiza o tempo
        this._update();
    }
    
}

export default new TimerStore(1000);