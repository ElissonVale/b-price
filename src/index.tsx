import InfoMoney from "./services/Scrappings/InfoMoney";

const App = () => {

    InfoMoney(price => { console.log(price)});

}

App();

