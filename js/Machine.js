import Ticket from './Ticket.js'


class Machine {

    constructor() {
        this.ticketItem = document.querySelector('.tickets__items');
        this.inputTickets = document.querySelector('.machine__input')
        this.clearAllButton = document.querySelector('[data-name = "clear"');
        this.deleteTicketButton = document.querySelector('[data-name = "delete"');

        this.id = 0;

        this.chosenTickets = [];
        this.singleTicket;
        this.addTicket();
        this.deleteTicket();
        this.clearAll();
        //this.chartPie();
    }

    addTicket() {
        this.ticketItem.addEventListener('click', (event) => {
            const ticketName = event.target.dataset.ticketid;
            const ticketValue = event.target.dataset.value;

            const ticket = new Ticket(this.id, this.ticketValue);
            ticket.addChosenTickets(this.chosenTickets, this.id, ticketName, ticketValue,false);

            console.log(this.chosenTickets)
            this.inputTicket(ticketName, ticketValue);

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
                document.querySelector(`[data-input = "${event.target.dataset.input}"]`).classList.toggle('machine__input__item--active');
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
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(0, 0, 0)', 'rgb(123,123,123)'],
                    borderColor: 'rgb(255, 99, 132)',
                    data: [mm, 10, 5, 2, 20, 30, 45]
                }]
            },


            options: {}
        });
    }
}


const ticketMachine = new Machine()