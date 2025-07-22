const autoSumInArray = (array, CashInOrOut) => {
    // const array = [1, 2, 3, 4, 5]; // Example array
    // const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // return sum;
    const filterCashInOut = array.filter(item => item.cash === CashInOrOut);
    const cashInOutTK = filterCashInOut.map(item => item.amount);
    const sum = cashInOutTK.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
};
export default autoSumInArray;