class Ticket {
    constructor(id,value){
        this.id = id;
        this.value = value;
    }

    addChosenTickets(arr,id,name,value,ifChecked){
        arr.push({id: id,name: name,value: value, ifChecked: ifChecked});
    }



}
export default Ticket;