class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, id, callback) {
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
        const date = new Date;
        return String(date.getHours()) + ':' + String(date.getMinutes());
    }

    start() {
        function checkClock(id) {
            if (this.getCurrentFormattedTime() == this.alarmCollection.find(el => el.id == id).time) {
                callback();
            }
        }
        if (!this.timerId) {
            setInterval(() => {
                this.alarmCollection.forEach(checkClock)
            }, 1000)
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval()
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(el => console.log(el.id + ', ' + el.time))
    }

    clearAlarms() {
        this.stop();

    }
}

const myAlarm = new AlarmClock;
myAlarm.addClock('20:00', 1, alarm);
myAlarm.addClock('21:00', 3, alarm);
myAlarm.addClock('23:00', 2, alarm);

function alarm() {
    console.log('Алярм!')
}