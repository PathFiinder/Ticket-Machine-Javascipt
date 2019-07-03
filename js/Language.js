class Language {

    constructor() {

    }

    polishLang() {
        let mainTitle = "Automat biletowy używany w transporcie miejskim w Krakowie";
        let ticketsTitle = "Wybierz bilety: ";
        let machineStatusTitle = "Status automaty biletowego";
        let chartLabel1Text = "Ilość monet 10-cio groszowych"
        let chartLabel2Text = "Ilość monet 20-sto groszowych"
        let chartLabel3Text = "Ilość monet 50-cio groszowych"
        let chartLabel4Text = "Ilość monet 1 zlotowkowych"
        let chartLabel5Text = "Ilość monet 2 zlotowkowych"
        let chartLabel6Text = "Ilość monet 5 zlotowkowych"
        let machineStatusText = "Status automatu biletowego: "
        let statusButtonAdded = "Pokaż stan (ilość) dodanych monet"
        let machineTitle = "Wybierz opcje:"
        let deleteButton = "Usuń"
        let clearButton = "Wyczyść"
        let payButton = "Zapłać"
        let refundButton = "Zwróć"
        let ticketValueName = "Wartość biletów: "
        let addedMoneyName = "Dodane pieniądze: "
        let moneyTitle = 'Jakie monety checesz dodać: '
        let moneyPlaceholder = 'Ilośc monet'
        let depositButton = 'Wpłać'

        return [mainTitle, ticketsTitle, machineStatusTitle, chartLabel1Text, chartLabel2Text, chartLabel3Text, chartLabel4Text, chartLabel5Text, chartLabel6Text, machineStatusText, statusButtonAdded, machineTitle, deleteButton, clearButton, payButton, refundButton, ticketValueName, addedMoneyName, moneyTitle, moneyPlaceholder, depositButton]
    }

    englishLang() {
        let mainTitle = "Ticket Machine used in public transport in Cracow"
        let ticketsTitle = "Choose tickets: ";
        let machineStatusTitle = "Tickset Machine status";
        let chartLabel1Text = "Number of 10 gr"
        let chartLabel2Text = "Number of 20 gr"
        let chartLabel3Text = "Number of 50 gr"
        let chartLabel4Text = "Number of 1 zł"
        let chartLabel5Text = "Number of 2 zł"
        let chartLabel6Text = "Number of 5 zł"
        let machineStatusText = "Machine status"
        let statusButtonAdded = "Show status added"
        let machineTitle = "Choose option: "
        let deleteButton = "Delete"
        let clearButton = "Clear"
        let payButton = "Pay"
        let refundButton = "Refund"
        let ticketValueName = "Tickets value "
        let addedMoneyName = "Added money "
        let moneyTitle = 'What coins do you want to add: '
        let moneyPlaceholder = 'Amount of coins'
        let depositButton = 'Deposit'

        return [mainTitle, ticketsTitle, machineStatusTitle, chartLabel1Text, chartLabel2Text, chartLabel3Text, chartLabel4Text, chartLabel5Text, chartLabel6Text, machineStatusText, statusButtonAdded, machineTitle, deleteButton, clearButton, payButton, refundButton, ticketValueName, addedMoneyName, moneyTitle, moneyPlaceholder, depositButton]
    
    }
}

export default Language