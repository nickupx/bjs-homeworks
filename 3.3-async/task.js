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

    getCurrentFormattedTime(addMin) {
        let now = new Date();
        if (addMin) {
            return now.toLocaleTimeString(now.setMinutes(now.getMinutes() + addMin)).slice(0, -3);
        }
        return now.toLocaleTimeString().slice(0, -3);
    }

    start() {
        const checkClock = alarm => {
            if (this.getCurrentFormattedTime() == alarm.time) {
                alarm.callback();
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

function alarm() {
    console.log('Алярм!')
}

function testCase() {

    const myAlarm = new AlarmClock;
    myAlarm.addClock(myAlarm.getCurrentFormattedTime(), alarm, 1);

    myAlarm.addClock(myAlarm.getCurrentFormattedTime(1), () => {
        console.log('+ 1 мин и удаляем');
        myAlarm.removeClock(2)
    }, 2);

    myAlarm.addClock(myAlarm.getCurrentFormattedTime(2), () => {
        console.log('+2 мин, останавливаем, очищаем');
        myAlarm.stop();
        myAlarm.clearAlarms();
        myAlarm.printAlarms();
    }, 3);

    myAlarm.addClock(myAlarm.getCurrentFormattedTime(10), alarm, 4);

    myAlarm.addClock('19:00', () => { 'Существующий ID' }, 1);

    myAlarm.printAlarms();
    myAlarm.start();

    console.log(myAlarm);
}