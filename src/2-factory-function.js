const bankAccountFactory = (balance = 0) => {
  let myBalance = balance;
  return {
    checkBalance() {
      return myBalance;
    },
    add(amount) {
      const newBalance = myBalance + amount;
      myBalance = newBalance;
      console.log(`$${amount} added.`);
    },
    subtract(amount) {
      const newBalance = myBalance - amount;
      myBalance = newBalance;
      console.log(`$${amount} subtracted.`);
    },
  };
};

module.exports = {
  bankAccountFactory,
};
