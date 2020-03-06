describe('Clicking Calamity Tests:', () => {
    describe('addMacaron() records clicks and getCounter can give the click count', () => {
        beforeEach(()=>{
            i=0;
        });
        it('addMacaron() 1 time should result in a clickCount of 1.', () => {
            addMacaron();
            expect(i).toBe(1);
        });
        it('addMacaron() 2 times should result in a clickCount of 2.', () => {
            addMacaron();
            addMacaron();
            expect(i).toBe(2);
        });
    });
});