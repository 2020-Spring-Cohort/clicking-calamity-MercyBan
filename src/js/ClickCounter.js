let macaroncount = 0;
let companionPrice = 100;
let multiplierPrice = 10;
let autoClick = 0;
let amountOfMultipliers = 0;
let multiplier = 1.0;
let companionPriceChangeRate = 1.1;
let multiplierPriceChangeRate = 1.1;

function addMacaron() {
    macaroncount += multiplier;

    document.querySelector('#count').innerText = macaroncount.toFixed(0);

}

function getCount() {
    return macaroncount;
}

function timer() {
    for (let i = 0; i < autoClick; i++) {
        addMacaron();
    }
}

setInterval(timer, 1000)

function reset() {
    macaroncount = 0;
    companionPrice = 100;
    multiplierPrice = 10;
    autoClick = 0;
    amountOfMultipliers = 0;
    multiplier = 1.0;
    companionPriceChangeRate = 1.1;
    multiplierPriceChangeRate = 1.1;
    document.querySelector('#count').innerHTML = macaroncount.toFixed(0);
    document.querySelector('#multiplier').innerText = multiplier.toFixed(2) + 'x';
    document.querySelector('#numberOfClickingCompanions').innerText = 'You have ' + autoClick + ' Clicking Companions';
    document.querySelector('#costOfClickingCompanion').innerText = 'Cost: ' + companionPrice.toFixed(0) + ' Macarons';
    document.querySelector('#costOfCollectiveCulminationCompounder').innerText = 'Cost: ' + multiplierPrice.toFixed(0) + ' Macarons';
    document.querySelector('#numberOfCollectiveCulminationCompounders').innerText = 'You own ' + amountOfMultipliers + ' Collective Collective Culmination Compounders';
};

function purchaseClickingCompanion() {
    if (macaroncount >= companionPrice) {
        macaroncount -= companionPrice;
        autoClick++;
        companionPrice *= companionPriceChangeRate;
        companionPriceChangeRate += 0.1;
        document.querySelector('#numberOfClickingCompanions').innerText = 'You have ' + autoClick + ' Clicking Companions';
        document.querySelector('#costOfClickingCompanion').innerText = 'Cost: ' + companionPrice.toFixed(0) + ' Macarons';
    }
}

function purchaseCollectiveCulminationCompounder() {
    if (macaroncount >= multiplierPrice) {
        macaroncount -= multiplierPrice;
        if (multiplier === 1.0) {
            multiplier += 0.2;
        } else {
            multiplier = Math.pow(1.2, amountOfMultipliers)
        }
        amountOfMultipliers++;

        multiplierPrice *= multiplierPriceChangeRate;

        multiplierPriceChangeRate += 0.1;

        document.querySelector('#multiplier').innerText = multiplier.toFixed(2) + 'x';

        document.querySelector('#costOfCollectiveCulminationCompounder').innerText = 'Cost: ' + multiplierPrice.toFixed(0) + ' Macarons';

        document.querySelector('#numberOfCollectiveCulminationCompounders').innerText = 'You own ' + amountOfMultipliers + ' Collective Collective Culmination Compounders'
    }
}