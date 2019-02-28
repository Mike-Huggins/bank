// Good job, this seems to work well. A couple of recommendations:
// 1 - use a linter as spacing is off in quite a few places 
// 2 - it is good practice to remove any commented code before commit or merge to master

const balance = 0

function CurrentAccount(holder) {
    this.holder = holder;
    this.balance = balance;
    this.transactions = [];
    this.deposits = [];
    this.withdrawals = [];
}

CurrentAccount.prototype.deposit = function(amount) {
    this.balance +=amount;
    this.deposits.push(amount);
    this.transactions.push(amount);
}

CurrentAccount.prototype.withdraw= function(amount){
    this.balance -=amount;
    this.withdrawals.push(amount);
    this.transactions.push(-amount);
}

module.exports = {
CurrentAccount
}

/*deposit withdraw checkBalance viewStatement You will likely need to keep track of the customer's balance and transactions on a currentAccount object.

Bonus Points (and more practice with arrays) A customer should be able to:

Filter their bank statement to see withdrawals or deposits only.*/