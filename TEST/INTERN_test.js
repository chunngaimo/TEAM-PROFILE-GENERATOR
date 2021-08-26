
const Intern = require('../library/Intern');

test('createAnInternObject', () => {
    const intern = new Intern('Ed', 69, 'Ed@gmail.com', 'TFS');

    expect(intern.school).toEqual(expect.any(String));
});

test('getEmployeeSchool', () => {
    const intern = new Intern('Ed', 69, 'Ed@gmail.com', 'TFS');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('getPositionOfEmployee', () => {
    const intern = new Intern('Ed', 69, 'Ed@gmail.com.com', 'TFS');

    expect(intern.getRole()).toEqual("Intern");
});