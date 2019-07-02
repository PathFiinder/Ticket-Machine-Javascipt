class Money {
    constructor() {

    }

    addMoney(arr, nr10 = 0, nr20 = 0, nr50 = 0, nr1 = 0, nr2 = 0, nr5 = 0) {
        arr.push({
            worth: 0.1,
            number: nr10
        }, {
            worth: 0.2,
            number: nr20
        }, {
            worth: 0.5,
            number: nr50
        }, {
            worth: 1,
            number: nr1
        }, {
            worth: 2,
            number: nr2
        }, {
            worth: 5,
            number: nr5
        })
    }

    computeValue(arr) {
        let totalValue = 0;
        arr.forEach(element => {
            totalValue += (element.worth * element.number)
        });
        return totalValue;
    }



}

export default Money;