class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('ID is missing')
        } else if (this.alarmCollection.some(clock => clock.id == id)) {
            console.error('Existing ID')
        } else {
            this.alarmCollection.push({ id, time, callback });
        }

    }

    removeClock(id) {
        if (this.alarmCollection.some(clock => clock.id == id)) {
            this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id)
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        const now = new Date;
        return now.toLocaleTimeString().slice(0, -3);
    }

    start() {
        const checkClock = alarm => {
            if (this.getCurrentFormattedTime() == this.alarm.time) {
                this.alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(it => checkClock(it))
            }, 1000)
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval()
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(el => console.log(el.id + ', ' + el.time))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];

    }
}

const myAlarm = new AlarmClock;
myAlarm.addClock('20:00', alarm, 1);
myAlarm.addClock('21:00', alarm, 3);
myAlarm.addClock('23:00', alarm, 2);

function alarm() {
    console.log('Алярм!')
}