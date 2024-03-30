import { transactions } from "../dummyData/data.js";

const transactionResolver = {
  Query: {
    transactions: () => {
      return transactions;
    },
    transaction: (_, { userId }) => {
      return transactions?.find((tran) => tran._id === userId);
    },
  },
  Mutation: {},
};

export default transactionResolver;
