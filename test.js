const{sum} = require('./app.js');

test("Sum function should return the correct result", function() {
    const result = sum(7, 3);
    expect(result).toBe(10);
});

test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07; 
    
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
