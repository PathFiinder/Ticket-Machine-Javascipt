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
        let alertPay1 = "Musisz zapłacić "
        let alertPay2 = "Dziękujemy za skorzystanie z naszych usług :)"
        let alertPay3 = "Reszta: "
        let alertPay4 = "Najpierw wybierz bilet"
        let alertPay5 = "Najpierw dodaj pieniądze"
        let alertRefund1 = "Zwrócone pieniądze: "
        let alertRefund2 = "Najpierw dodaj pieniądze"
        let alertClear = "Brak elementów do usunięcia"
        let alertShowStatus = "Status (ilość) dodaych pieniędzy: "

        return [mainTitle, ticketsTitle, machineStatusTitle, chartLabel1Text, chartLabel2Text, chartLabel3Text, chartLabel4Text, chartLabel5Text, chartLabel6Text, machineStatusText, statusButtonAdded, machineTitle, deleteButton, clearButton, payButton, refundButton, ticketValueName, addedMoneyName, moneyTitle, moneyPlaceholder, depositButton, alertPay1, alertPay2, alertPay3, alertPay4, alertPay5, alertRefund1, alertRefund2, alertClear, alertShowStatus]
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
        let alertPay1 = "You have to pay "
        let alertPay2 = "Thanks for using the servies :) "
        let alertPay3 = "Change: "
        let alertPay4 = "Choose ticket first"
        let alertPay5 = "Add money at first"
        let alertRefund1 = "Refunded money: "
        let alertRefund2 = "At first add money"
        let alertClear = "No items to clear"
        let alertShowStatus = "Status added money: "

        return [mainTitle, ticketsTitle, machineStatusTitle, chartLabel1Text, chartLabel2Text, chartLabel3Text, chartLabel4Text, chartLabel5Text, chartLabel6Text, machineStatusText, statusButtonAdded, machineTitle, deleteButton, clearButton, payButton, refundButton, ticketValueName, addedMoneyName, moneyTitle, moneyPlaceholder, depositButton, alertPay1, alertPay2, alertPay3, alertPay4, alertPay5, alertRefund1, alertRefund2, alertClear, alertShowStatus]

    }
}

export default Language