import InfoMoney from "./services/Scrappings/InfoMoney";
import CoinGecko from "./services/Scrappings/CoinGecko";

const App = () => {

    CoinGecko(price => { console.log(price)});

}

App();

