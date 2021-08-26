
const Manager = require('../library/Manager');

test('createAnManagerObject', () => {
    const manager = new Manager('Mel', 69, 'Mel@gmail.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getPositionOfEmployee', () => {
    const manager = new Manager('Mel', 69, 'Mel@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 