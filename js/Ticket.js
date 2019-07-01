class Ticket {
    constructor(id,value){
        this.id = id;
        this.value = value;
    }

    addChosenTickets(arr,id,name,value){
        arr.push({id: id,name: name,value: value});
    }



}
export default Ticket;