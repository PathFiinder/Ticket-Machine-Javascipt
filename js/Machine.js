import Ticket from './Ticket.js'
import Money from './Money.js'
import ChartClass from './Chart.js'
class Machine {

    constructor() {
        this.ticketItem = document.querySelector('.tickets__items');
        this.inputTickets = document.querySelector('.machine__input')
        this.clearAllButton = document.querySelector('[data-name = "clear"');
        this.deleteTicketButton = document.querySelector('[data-name = "delete"');
        this.moneyInput = document.querySelector('.money__wrapper');
        this.moneyInputButton = document.querySelector('.money__button')
        this.addedMoneyInput = document.querySelector('.machine__money-added');
        this.ticketsValue = document.querySelector('.machine__ticket-value');

        this.id = 0;
        this.chosenTickets = [];
        this.startMoney = [];
        this.NumberTab = [];
        this.singleTicket;

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
        this.chartPie();
    }

    addTicket() {
        this.ticketItem.addEventListener('click', (event) => {
            const ticketName = event.target.dataset.ticketid;
            const ticketValue = event.target.dataset.value;

            const ticket = new Ticket(this.id, this.ticketValue);
            ticket.addChosenTickets(this.chosenTickets, this.id, ticketName, ticketValue);

            this.inputTicket(ticketName, ticketValue);
            this.totalMoneyToPay += Number(ticketValue);
            this.ticketsValue.textContent = `Tickets value: ${this.totalMoneyToPay} zł`
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
        itemSpanName.textContent = `${ticketName} ${ticketValue} zl `;
        document.querySelector(`[data-input = "${this.id}"]`).appendChild(itemSpanName)




    }

    singleTickets() {
        this.inputTickets.addEventListener('click', (event) => {

            if (event.target.dataset.input) {
                document.querySelector(`[data-input = "${event.target.dataset.input}"]`).classList.add('machine__input__item--active');
                this.singleTicket = event.target.dataset.input;
            }
        })
    }

    deleteTicket() {
        this.singleTickets();
        this.counter = 0;
        this.deleteTicketButton.addEventListener('click', () => {

            let counterActive = 0;
            [...document.querySelectorAll('[data-input]')].forEach((element) => {
                if (element.classList.contains('machine__input__item--active')) {
                    counterActive++;
                }
            })

            if (counterActive == 1) {
                if (this.singleTicket != undefined && this.singleTicket != null) {
                    this.chosenTickets.forEach((element) => {
                        if (this.chosenTickets.length != 0 && element != "deleted") {
                            if (element.id == this.singleTicket) {
                                this.counter++;
                                this.chosenTickets.splice(this.singleTicket, 1, "deleted");
                                document.querySelector(`[data-aside_id = "${this.singleTicket}"]`).remove();
                                this.totalMoneyToPay -= Number(element.value);
                                this.ticketsValue.textContent = `Tickets value: ${this.totalMoneyToPay} zł`
                            }

                            if (this.counter == this.chosenTickets.length) {
                                this.chosenTickets = [];
                                this.counter = 0;
                                this.id = 0;
                            }
                        }
                    })
                } else {
                    alert("Choose ticket to remove");
                }
            } else {
                alert("Choose one ticket to delete")
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
            } else if (this.chosenTickets.length == 0) {
                alert("No items to clear")
            }

        })
    }

    chartPie() {
        
        const PieChart = new ChartClass();
        
        this.startMoney.forEach(element => {
            this.NumberTab.push(element.number);
        })
        PieChart.drawChart(this.NumberTab[0],this.NumberTab[1],this.NumberTab[2],this.NumberTab[3],this.NumberTab[4],this.NumberTab[5])
        console.log(this.NumberTab)
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
            this.addedMoneyInput.textContent = `Added money: ${this.addedMoneyValue} zł`;

            for(let i=0;i<this.moneyAdded.length;i++){
                document.getElementById(`${this.moneyAdded[i].name}`).value = ""
            }
            
            this.NumberTab = [];
            this.chartPie();
            

        })


    }
}


const ticketMachine = new Machine()