import InfoMoney from "./services/Scrappings/InfoMoney";
import CoinGecko from "./services/Scrappings/CoinGecko";

const App = () => {

    InfoMoney(price => { console.log(price)});

}

App();

