// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

'use strict';
// Типов транзацкий всего два. Можно положить либо снять деньги со счета.
// Каждая транзакция это объект со свойствами: id, type и amount
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  // Метод отвечающий за добавление суммы к балансу. Создает объект транзакции и вызывает addTransaction
  deposit(amount) {
    this.balance += amount;

    const transaction = {
      id: this.transactions.length,
      type: Transaction.DEPOSIT,
      amount: amount,
    };

    this.addTransaction(transaction);
  },
  // Метод отвечающий за снятие суммы с баланса. Создает объект транзакции и вызывает addTransaction
  // Если amount больше чем текущий баланс, выводи сообщение о том, что снятие такой суммы невозможно, недостаточно средств.
  withdraw(amount) {
    if (amount > this.balance) {
      return 'Cнятие такой суммы невозможно, недостаточно средств.';
    }

    this.balance -= amount;

    const transaction = {
      id: this.transactions.length,
      type: Transaction.WITHDRAW,
      amount: amount,
    };

    this.addTransaction(transaction);
  },
  // Метод добавляющий транзакцию в свойство transactions. Принимает объект транзакции
  addTransaction(transaction) {
    this.transactions.push(transaction);
    console.log(account);
  },
  // Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },
  //Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        console.log(this.transactions[i]);
      }
    }
  },
  // Метод возвращает количество средств определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let totalSum = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type.toLowerCase()) {
        totalSum += this.transactions[i].amount;
      }
    }
    console.log('Total sum:', totalSum);
  },
};

// Вызовы функции для проверки работоспособности реализации
console.log(account.deposit(300));
console.log(account.deposit(200));
console.log(account.withdraw(100));
console.log(account.withdraw(10));
console.log(account.getBalance());
account.getTransactionDetails(1);
account.getTransactionTotal('deposit');
account.getTransactionTotal('Withdraw');
console.log(account.withdraw(600));
