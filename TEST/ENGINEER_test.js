
const Engineer = require('../library/Engineer');

test('createAnEngineerObject', () => {
    const engineer = new Engineer('JamesBondie', 69, 'JamesBondie@gmail.com', 'JamesBondie');

    expect(engineer.github).toEqual(expect.any(String));
});

test('getEngineerGithub', () => {
    const engineer = new Engineer('JamesBondie', 69, 'JamesBondie@gmail.com', 'JamesBondie');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('getPositionOfEmployee', () => {
    const engineer = new Engineer('JamesBondie', 69, 'JamesBondie@gmail.com', 'JamesBondie');

    expect(engineer.getRole()).toEqual("Engineer");
});