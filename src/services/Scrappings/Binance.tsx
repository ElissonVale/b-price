
import httpClient from "../httpClient";
import * as Fonts from './base/fonts.json'

type callBack = (price: string) => void

const Binance = (callBack: callBack) => {

    httpClient.get(Fonts.coinGecko, null, (response) => {

        let lastIndexFilter = 50;
        let indexFilter = response.indexOf(`data-price-previous`);
        
        let headerPrice = response.substr(indexFilter, lastIndexFilter)

        // lastIndexFilter = 75;
        // indexFilter = headerPrice.indexOf(`<div class="value">`) + 20;

        // let priceLabel = headerPrice.replace(" ", "").substr(indexFilter, lastIndexFilter);

        // let price = `R$ ${priceLabel.replaceAll(" ", "").replace("<p>", "").replace("</p>", "")}`;

        callBack(headerPrice);
    });
}

export default Binance;