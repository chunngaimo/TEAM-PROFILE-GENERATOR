
const Employee = require('../library/Employee');

test('createAnEmployeeObject', () => {
    const employee = new Employee('NicolasCagie', 69, 'NicolasCagie@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('getEmployeeName', () => {
    const employee = new Employee('NicolasCagie', 69, 'NicolasCagie@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('getEmployeeId', () => {
    const employee = new Employee('NicolasCagie', 69, 'NicolasCagie@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('getEmployeeEmail', () => {
    const employee = new Employee('NicolasCagie', 69, 'NicolasCagie@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('getPositionOfEmployee', () => {
    const employee = new Employee('NicolasCagie', 69, 'NicolasCagie@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
