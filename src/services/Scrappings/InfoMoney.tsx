import httpClient from "../httpClient";
import * as Fonts from './base/fonts.json'

type callBack = (price: string) => void

const InfoMoney = (callBack: callBack) => {

    httpClient.get(Fonts.infoMoney, null, (response) => {

        let lastIndexFilter = 2000;
        let indexFilter = response.indexOf(`<div class="quotes-header-info">`);
        
        let headerPrice = response.substr(indexFilter, lastIndexFilter)

        lastIndexFilter = 75;
        indexFilter = headerPrice.indexOf(`<div class="value">`) + 20;

        let priceLabel = headerPrice.replace(" ", "").substr(indexFilter, lastIndexFilter);

        let price = `R$ ${priceLabel.replaceAll(" ", "").replace("<p>", "").replace("</p>", "")}`;

        callBack(price);
    });
}

export default InfoMoney;