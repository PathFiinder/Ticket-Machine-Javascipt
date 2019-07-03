import Ticket from './Ticket.js'
import Money from './Money.js'
import ChartClass from './Chart.js'
import Language from './Language.js'

class Machine {

    constructor() {
        this.ticketItem = document.querySelector('.tickets__items');
        this.inputTickets = document.querySelector('.machine__input')
        this.clearAllButton = document.querySelector('[data-name = "clear"');
        this.deleteTicketButton = document.querySelector('[data-name = "delete"]');
        this.moneyInput = document.querySelector('.money__wrapper');
        this.moneyInputButton = document.querySelector('.money__button')
        this.addedMoneyInput = document.querySelector('.machine__money-added');
        this.ticketsValue = document.querySelector('.machine__ticket-value');
        this.payButton = document.querySelector('[data-name = "pay"]')
        this.refundButton = document.querySelector('[data-name = "refund"]')
        this.showStatusButton = document.querySelector('.status__button--added');
        this.statusOfMachine = document.querySelector('.status__added-money');
        this.plButton = document.querySelector('.main__translation--pl');
        this.engButton = document.querySelector('.main__translation--eng');
        this.mainTitleText = document.querySelector('.main__title');
        this.ticketTitleText = document.querySelector('.tickets__title');
        this.statusTitleText = document.querySelector('.status__title');
        this.machineTitleText = document.querySelector('.machine__title');
        this.moneyTitleText = document.querySelector('.money__title');
        this.moneyPlaceholderText = document.querySelectorAll('.money__item__input');


        this.id = 0;
        this.ifAdded = false
        this.chosenTickets = [];
        this.startMoney = [];
        this.NumberTab = [];
        this.singleTicket;
        this.counterActive = 0;


        this.addTicket();
        this.deleteTicket();
        this.clearAll();


        const money = new Money();
        money.addMoney(this.startMoney, 10, 10, 10, 10, 10, 10);
        this.totalMoney = money.computeValue(this.startMoney);

        this.addMoney();
        this.moneyAdded = [{
            name: "10gr",
            worth: 0.10,
            number: 0
        }, {
            name: "20gr",
            worth: 0.20,
            number: 0
        }, {
            name: "50gr",
            worth: 0.50,
            number: 0
        }, {
            name: "1zl",
            worth: 1,
            number: 0
        }, {
            name: "2zl",
            worth: 2,
            number: 0
        }, {
            name: "5zl",
            worth: 5,
            number: 0
        }];
        this.totalMoneyToPay = 0;
        this.alertPay1 = "You have to pay "
        this.alertPay2 = "Thanks for using the servies :) "
        this.alertPay3 = "Change: "
        this.alertPay4 = "Choose ticket first"
        this.alertPay5 = "Add money at first"
        this.payMoney();
        this.alertRefund1 = "Refunded money: "
        this.alertRefund2 = "At first add money"
        this.refundMoney();

        this.ChartLabelsText1 = 'Number of 10 gr';
        this.ChartLabelsText2 = 'Number of 20 gr';
        this.ChartLabelsText3 = 'Number of 50 gr';
        this.ChartLabelsText4 = 'Number of 1 zł';
        this.ChartLabelsText5 = 'Number of 2 zł';
        this.ChartLabelsText6 = 'Number of 5 zł';


        this.chartPie();


        this.statusMachineText = "Machine status: "
        this.statusMachine();
        this.machineTicketsValueText = "Tickets value: "
        this.ticketsValue.textContent = `${this.machineTicketsValueText} 0 zł`
        this.machineAddedMoneyText = "Added money";
        this.alertTicketDelete1 = ""
        this.alertClear = "No items to clear"
        this.alertShowStatus = "Status added money: "

        this.showStatus();
        this.Lang = new Language();
        this.polishTranslation();
        this.englishTranslation();

    }

    addTicket() {
        this.ticketItem.addEventListener('click', (event) => {
            const ticketName = event.target.dataset.ticketid;
            const ticketValue = event.target.dataset.value;

            const ticket = new Ticket(this.id, this.ticketValue);
            ticket.addChosenTickets(this.chosenTickets, this.id, ticketName, ticketValue);

            this.inputTicket(ticketName, ticketValue);
            this.totalMoneyToPay += Number(Number(ticketValue).toFixed(2));
            this.ticketsValue.textContent = `${this.machineTicketsValueText} ${(this.totalMoneyToPay).toFixed(2)} zł`
            this.id++;
        })
    }

    inputTicket(ticketName, ticketValue) {
        const singleAside = document.createElement('aside');
        singleAside.classList.add('machine__input__item');
        singleAside.dataset.aside_id = this.id;
        this.inputTickets.appendChild(singleAside);

        const inputItem = document.createElement('p');
        inputItem.classList.add('input__item__content');
        inputItem.dataset.input = this.id;
        inputItem.textContent = 'Ticket: ';
        document.querySelector(`[data-aside_id = "${this.id}"]`).appendChild(inputItem);

        const itemSpanName = document.createElement('span');
        itemSpanName.classList.add('input__item__content--bold');
        itemSpanName.textContent = `${ticketName} ${ticketValue} zł `;
        document.querySelector(`[data-input = "${this.id}"]`).appendChild(itemSpanName)




    }

    singleTickets() {
        this.inputTickets.addEventListener('click', (event) => {

            if (event.target.dataset.input) {
                document.querySelector(`[data-input = "${event.target.dataset.input}"]`).classList.toggle('machine__input__item--active');
                this.singleTicket = event.target.dataset.input;

            }
        })
    }

    deleteTicket() {
        this.singleTickets();
        this.counter = 0;
        this.deleteTicketButton.addEventListener('click', () => {


            [...document.querySelectorAll('[data-input]')].forEach((element) => {
                if (element.classList.contains('machine__input__item--active')) {
                    this.counterActive++;
                    console.log(this.counterActive)
                }
            })


            if (this.counterActive == 1) {
                if (this.singleTicket != undefined && this.singleTicket != null) {
                    this.chosenTickets.forEach((element) => {
                        if (this.chosenTickets.length != 0 && element != "deleted") {
                            if (element.id == this.singleTicket) {
                                this.counter++;
                                this.chosenTickets.splice(this.singleTicket, 1, "deleted");
                                document.querySelector(`[data-aside_id = "${this.singleTicket}"]`).remove();
                                this.totalMoneyToPay -= Number(Number(element.value)).toFixed(2);
                                if (this.totalMoneyToPay == 0) {
                                    this.totalMoneyToPay = 0;
                                }
                                this.ticketsValue.textContent = `${this.machineTicketsValueText} ${(this.totalMoneyToPay).toFixed(2)} zł`
                            }

                            if (this.counter == this.chosenTickets.length) {
                                this.chosenTickets = [];
                                this.counter = 0;
                                this.id = 0;
                            }
                            this.counterActive = 0
                        }
                    })
                } else {
                    alert("Choose ticket to remove");
                }
            } else {
                alert("Choose one ticket to delete")
                this.counterActive = 0
                Array.from(document.querySelectorAll("[data-input")).forEach((element) => {
                    if (element.classList.contains('machine__input__item--active')) {
                        element.classList.remove('machine__input__item--active');
                    }
                })
            }



            console.log(this.chosenTickets);




        });

    }

    clearAll() {
        this.clearAllButton.addEventListener('click', () => {
            if (this.chosenTickets.length > 0) {
                this.chosenTickets = [];
                this.id = 0;
                console.log(this.chosenTickets);
                var child = this.inputTickets.lastElementChild;
                while (child) {
                    this.inputTickets.removeChild(child)
                    child = this.inputTickets.lastElementChild;
                }
                this.totalMoneyToPay = 0;
                this.ticketsValue.textContent = `${this.machineTicketsValueText} ${this.totalMoneyToPay} zł`
            } else if (this.chosenTickets.length == 0) {
                alert(this.alertClear)
            }

        })
    }

    chartPie() {

        const PieChart = new ChartClass();

        this.startMoney.forEach(element => {
            this.NumberTab.push(element.number);
        })

        PieChart.drawChart(this.NumberTab[0], this.NumberTab[1], this.NumberTab[2], this.NumberTab[3], this.NumberTab[4], this.NumberTab[5], this.ChartLabelsText1, this.ChartLabelsText2, this.ChartLabelsText3, this.ChartLabelsText4, this.ChartLabelsText5, this.ChartLabelsText6);

        const money = new Money();
        this.totalMoney = money.computeValue(this.startMoney);
        this.statusMachine();
    }

    addMoney() {
        this.moneyInputButton.addEventListener('click', () => {

            this.moneyAdded.forEach((element, index) => {
                let value = document.getElementById(`${element.name}`).value;
                if (value == '') {
                    value = 0
                }
                this.startMoney[index].number += Number(value);
                element.number += Number(value);

            })
            const depositMoney = new Money();
            this.addedMoneyValue = depositMoney.computeValue(this.moneyAdded);
            console.log(this.startMoney)
            console.log(this.moneyAdded)
            this.addedMoneyInput.textContent = `${this.machineAddedMoneyText} ${this.addedMoneyValue} zł`;

            for (let i = 0; i < this.moneyAdded.length; i++) {
                document.getElementById(`${this.moneyAdded[i].name}`).value = ""
            }

            this.NumberTab = [];
            this.chartPie();
            this.ifAdded = true;

        })


    }

    showStatus() {
        this.showStatusButton.addEventListener('click', () => {
            let txt = `${this.alertShowStatus}
            0.10gr:  ${this.moneyAdded[0].number},
            0.20gr:  ${this.moneyAdded[1].number},
            0.50gr:  ${this.moneyAdded[2].number},
            1.00zł:  ${this.moneyAdded[3].number},
            2.00zł:  ${this.moneyAdded[4].number},
            5.00zł:  ${this.moneyAdded[5].number}`
            alert(txt)
        })
    }

    statusMachine() {
        this.statusOfMachine.textContent = `${this.statusMachineText} ${this.totalMoney} zł`;
    }

    payMoney() {
        this.payButton.addEventListener('click', () => {
            if (this.ifAdded == true) {
                if (this.chosenTickets.length != 0) {
                    if (this.totalMoneyToPay > this.addedMoneyValue) {
                        alert(`${this.alertPay1} ${(this.totalMoneyToPay - this.addedMoneyValue).toFixed(2)} zł`)
                    } else if (this.totalMoneyToPay == this.addedMoneyValue) {
                        alert(`${this.alertPay2}`);
                        this.ifAdded = false;
                        this.moneyAdded.forEach((element) => {
                            element.number = 0
                        })
                        this.addedMoneyValue = "0";
                        this.addedMoneyInput.textContent = `${this.machineAddedMoneyText} ${this.addedMoneyValue} zł`;
                        this.chartPie();
                        this.chosenTickets = [];
                        this.id = 0;
                        var child = this.inputTickets.lastElementChild;
                        while (child) {
                            this.inputTickets.removeChild(child)
                            child = this.inputTickets.lastElementChild;
                        }
                        this.totalMoneyToPay = 0;
                        this.ticketsValue.textContent = `${this.machineTicketsValueText} ${this.totalMoneyToPay} zł`

                    } else if (this.totalMoneyToPay < this.addedMoneyValue) {
                        let change = (this.addedMoneyValue - this.totalMoneyToPay).toFixed(2);
                        console.log(change)
                        alert(`${this.alertPay3} ${change}`);
                        const arrayToCheck = this.startMoney.reverse()


                        let i = 0;
                        while (change != 0) {
                            if (i >= 0 && i < arrayToCheck.length) {
                                if (arrayToCheck[i].worth <= change) {
                                    //console.log(arrayToCheck[i].worth)
                                    change = (change - arrayToCheck[i].worth).toFixed(2);
                                    arrayToCheck[i].number--;
                                } else {
                                    i++;
                                }

                            }
                        }

                        this.ifAdded = false;
                        this.moneyAdded.forEach((element) => {
                            element.number = 0
                        })
                        this.addedMoneyValue = "0";
                        this.addedMoneyInput.textContent = `${this.machineAddedMoneyText} ${this.addedMoneyValue} zł`;

                        this.chosenTickets = [];
                        this.id = 0;
                        var child = this.inputTickets.lastElementChild;

                        while (child) {
                            this.inputTickets.removeChild(child)
                            child = this.inputTickets.lastElementChild;
                        }
                        this.totalMoneyToPay = 0;
                        this.ticketsValue.textContent = `${this.machineTicketsValueText} ${this.totalMoneyToPay} zł`

                        console.log(this.startMoney)
                        console.log(arrayToCheck)

                        this.startMoney.reverse();
                        this.NumberTab = [];
                        this.chartPie();

                    }





                    //this.ifAdded = false;
                } else {
                    alert(`${this.alertPay4}`)
                }
            } else {
                alert(`${this.alertPay5}`)
            }
        })
    }

    refundMoney() {
        this.refundButton.addEventListener('click', () => {
            if (this.ifAdded == true) {
                this.startMoney.forEach((element, index) => {
                    element.number -= this.moneyAdded[index].number
                    this.moneyAdded[index].number = 0;
                })
                alert(`${this.alertRefund1} ${this.addedMoneyValue} zł`)
                this.addedMoneyValue = "0";
                this.addedMoneyInput.textContent = `${this.machineAddedMoneyText} ${this.addedMoneyValue} zł`;
                this.ifAdded = false;
                this.NumberTab = [];
                this.chartPie();

            } else {
                alert(`${this.alertRefund2}`)
            }
        })
    }

    polishTranslation() {
        this.plButton.addEventListener('click', () => {
            this.plButton.classList.add('main__translation__item--active');
            this.engButton.classList.remove('main__translation__item--active');
            this.mainTitleText.textContent = this.Lang.polishLang()[0];
            this.ticketTitleText.textContent = this.Lang.polishLang()[1];
            this.statusTitleText.textContent = this.Lang.polishLang()[2];
            this.ChartLabelsText1 = this.Lang.polishLang()[3];
            this.ChartLabelsText2 = this.Lang.polishLang()[4];
            this.ChartLabelsText3 = this.Lang.polishLang()[5];
            this.ChartLabelsText4 = this.Lang.polishLang()[6];
            this.ChartLabelsText5 = this.Lang.polishLang()[7];
            this.ChartLabelsText6 = this.Lang.polishLang()[8];
            this.statusMachineText = this.Lang.polishLang()[9];
            this.showStatusButton.textContent = this.Lang.polishLang()[10];
            this.machineTitleText.textContent = this.Lang.polishLang()[11];
            this.deleteTicketButton.textContent = this.Lang.polishLang()[12];
            this.clearAllButton.textContent = this.Lang.polishLang()[13];
            this.payButton.textContent = this.Lang.polishLang()[14];
            this.refundButton.textContent = this.Lang.polishLang()[15];
            this.ticketsValue.textContent = `${this.Lang.polishLang()[16]}: 0 zł `
            this.machineTicketsValueText = this.Lang.polishLang()[16];
            this.addedMoneyInput.textContent = `${this.Lang.polishLang()[17]}: 0 zł `
            this.machineAddedMoneyText = this.Lang.polishLang()[17];
            this.moneyTitleText.textContent = this.Lang.polishLang()[18];

            [...this.moneyPlaceholderText].forEach((element) => {
                element.placeholder = this.Lang.polishLang()[19];
            })

            this.moneyInputButton.textContent = this.Lang.polishLang()[20];
            this.alertPay1 = this.Lang.polishLang()[21];
            this.alertPay2 = this.Lang.polishLang()[22];
            this.alertPay3 = this.Lang.polishLang()[23];
            this.alertPay4 = this.Lang.polishLang()[24];
            this.alertPay5 = this.Lang.polishLang()[25];
            this.alertRefund1 = this.Lang.polishLang()[26];
            this.alertRefund2 = this.Lang.polishLang()[27];
            this.alertClear = this.Lang.polishLang()[28];
            this.alertShowStatus = this.Lang.polishLang()[29];
            this.chartPie();
        })

    }

    englishTranslation() {
        this.engButton.addEventListener('click', () => {
            this.engButton.classList.add('main__translation__item--active');
            this.plButton.classList.remove('main__translation__item--active');
            this.mainTitleText.textContent = this.Lang.englishLang()[0];
            this.ticketTitleText.textContent = this.Lang.englishLang()[1];
            this.statusTitleText.textContent = this.Lang.englishLang()[2];
            this.ChartLabelsText1 = this.Lang.englishLang()[3];
            this.ChartLabelsText2 = this.Lang.englishLang()[4];
            this.ChartLabelsText3 = this.Lang.englishLang()[5];
            this.ChartLabelsText4 = this.Lang.englishLang()[6];
            this.ChartLabelsText5 = this.Lang.englishLang()[7];
            this.ChartLabelsText6 = this.Lang.englishLang()[8];
            this.statusMachineText = this.Lang.englishLang(0)[9];
            this.showStatusButton.textContent = this.Lang.englishLang()[10];
            this.machineTitleText.textContent = this.Lang.englishLang()[11];
            this.deleteTicketButton.textContent = this.Lang.englishLang()[12];
            this.clearAllButton.textContent = this.Lang.englishLang()[13];
            this.payButton.textContent = this.Lang.englishLang()[14];
            this.refundButton.textContent = this.Lang.englishLang()[15];
            this.ticketsValue.textContent = `${this.Lang.englishLang()[16]}: 0 zł `
            this.machineTicketsValueText = this.Lang.englishLang()[16];
            this.addedMoneyInput.textContent = `${this.Lang.englishLang()[17]}: 0 zł `
            this.machineAddedMoneyText = this.Lang.englishLang()[17];
            this.moneyTitleText.textContent = this.Lang.englishLang()[18];

            [...this.moneyPlaceholderText].forEach((element) => {
                element.placeholder = this.Lang.englishLang()[19];
            })

            this.moneyInputButton.textContent = this.Lang.englishLang()[20];
            this.alertPay1 = this.Lang.englishLang()[21];
            this.alertPay2 = this.Lang.englishLang()[22];
            this.alertPay3 = this.Lang.englishLang()[23];
            this.alertPay4 = this.Lang.englishLang()[24];
            this.alertPay5 = this.Lang.englishLang()[25];
            this.alertRefund1 = this.Lang.englishLang()[26];
            this.alertRefund2 = this.Lang.englishLang()[27];
            this.alertClear = this.Lang.englishLang()[28];
            this.alertShowStatus = this.Lang.englishLang()[29];

            this.chartPie();
        })
    }
}



const ticketMachine = new Machine()