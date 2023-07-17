import { createProduct } from '../__utils__/product';
import { totalPrice } from './calculator';

describe("calculator tests",()=>{
    it("adds two numbers",()=>{
        const p1 = createProduct({price: 10});
        const p2 = createProduct({price: 30});
        expect(totalPrice([p1,p2])).toEqual(40);
    })
})