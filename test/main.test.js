const {Item, Shop} = require('../src/main')

describe("Gilded Rose", () => {
    it('Aged Brie', () => { 
        const item = new Item("Aged Brie", 0, 0); 

        const shop = new Shop([item]); 

        expect(shop.updateQuality()).toMatchObject([]);
    })
})