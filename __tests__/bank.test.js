// Nice work testing the Bank function, you can check if you hit the right number of tests by running jest with the --collect-coverage option on,
// which in this case it shows 100% coverage

// Something to take into account though: 3 out of 4 tests are skipped. We try not to commit and push skipped tests as this will induce 
// a false sense of security and it's a situation that is difficult to rectify when working in a large codebase.


const { CurrentAccount } = require ('../src/bank.js');

describe('Bank account testing', () => {

xit('create a new bank account', () => {
    expect(new CurrentAccount()).toBeInstanceOf(Object);
});

xit('create a new account holder with starting balance 0 and no transaction history', () => {
    const steveAccount = new CurrentAccount('Steve');
    expect(steveAccount.holder).toBe('Steve');
    expect(steveAccount.balance).toEqual(0);
    expect(steveAccount.transactions).toEqual([]);
});

xit('add deposit to the account and record in bank deposit property and transaction property arrays', () => {
    const steveAccount = new CurrentAccount('Steve');
    steveAccount.deposit(100);
    expect(steveAccount.balance).toEqual(100);
    expect(steveAccount.deposits).toEqual([100]);
    expect(steveAccount.withdrawals).toEqual([]);
    expect(steveAccount.transactions).toEqual([100]);
});

it ('withdraw money and record in bank withdrawals and transactions, check balance', () => {
    const steveAccount = new CurrentAccount('Steve');
    steveAccount.deposit(100);
    steveAccount.withdraw(90);
    expect(steveAccount.balance).toEqual(10);
    expect(steveAccount.deposits).toEqual([100]);
    expect(steveAccount.withdrawals).toEqual([90]);
    expect(steveAccount.transactions).toEqual([100, -90]);
})


});