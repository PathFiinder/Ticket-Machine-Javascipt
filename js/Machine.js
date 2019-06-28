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
    }

    addTicket() {
        this.ticketItem.addEventListener('click', (event) => {
            const ticketName = event.target.dataset.ticketid;
            const ticketValue = event.target.dataset.value;

            const ticket = new Ticket(this.id, this.ticketValue);
            ticket.addChosenTickets(this.chosenTickets, this.id, ticketName, ticketValue);

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

    singleTicket() {
        this.inputTickets.addEventListener('click', (event) => {
            if (event.target.dataset.input) {
                document.querySelector(`[data-input = "${event.target.dataset.input}"]`).classList.toggle('machine__input__item--active');
                this.singleTicket = event.target.dataset.input;
            }
        })
    }

    deleteTicket() {
        this.singleTicket();

        this.deleteTicketButton.addEventListener('click', () => {
                console.log(this.singleTicket);
                this.chosenTickets.forEach((element) => {
                    if(element.id == this.singleTicket){
                        for(let i=this.singleTicket;i<this.chosenTickets.length;i++){
                            this.chosenTickets[i].id--;
                        }
                        this.chosenTickets.splice(this.singleTicket,1);
                        document.querySelector(`[data-aside_id = "${this.singleTicket}"]`).remove();
                    }
                })
                
                console.log(this.chosenTickets);
            }
        );

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
        }

    })
}


}


const ticketMachine = new Machine()