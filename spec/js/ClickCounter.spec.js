describe('Clicking Calamity Tests:', () => {
    beforeEach(() => {
        macaroncount = 0;
        companionPrice = 100;
        multiplierPrice = 100;
        autoClick = 0;
        amountOfMultipliers = 0;
        multiplier = 1.0;
        companionPriceChangeRate = 1.1;
        multiplierPriceChangeRate = 1.1;
        
    })
    describe('addMacaron() records clicks and ClickCounter can give the clickCount', () => {
        
        it('addMacaron() 1 time should result in a clickCount of 1.', () => {
            addMacaron();
            expect(macaroncount).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2.', () => {
            addMacaron();
            addMacaron();
            expect(macaroncount).toBe(2);
        });
    });
    describe('Clicking Companions:', () => {
        it("ClickCounter should have 0 when new.", () => {
            expect(autoClick).toBe(0);
        });
    });
});