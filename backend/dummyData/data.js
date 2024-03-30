const users = [
  {
    _id: "1",
    username: "john_doe",
    name: "John Doe",
    password: "password123",
    profilePicture: "https://example.com/john_doe.jpg",
    gender: "Male",
  },
  {
    _id: "2",
    username: "jane_smith",
    name: "Jane Smith",
    password: "qwerty123",
    profilePicture: "https://example.com/jane_smith.jpg",
    gender: "Female",
  },
  {
    _id: "3",
    username: "bob_johnson",
    name: "Bob Johnson",
    password: "letmein",
    profilePicture: "https://example.com/bob_johnson.jpg",
    gender: "Male",
  },
];

const transactions = [
  {
    _id: "1",
    userId: 1,
    description: "Grocery shopping",
    paymentType: "Credit Card",
    category: "Food",
    amount: -200,
    location: "Whole Foods Market",
    date: "2023-03-25T14:30:00Z",
  },
  {
    _id: "2",
    userId: 2,
    description: "Salary deposit",
    paymentType: "Bank Transfer",
    category: "Income",
    amount: 5000,
    location: "N/A",
    date: "2023-03-28T08:00:00Z",
  },
  {
    _id: "3",
    userId: 3,
    description: "Cable bill",
    paymentType: "Debit Card",
    category: "Utilities",
    amount: -100,
    location: "N/A",
    date: "2023-03-20T12:00:00Z",
  },
  {
    _id: "4",
    userId: 4,
    description: "Restaurant dinner",
    paymentType: "Cash",
    category: "Food",
    amount: -75,
    location: "La Trattoria",
    date: "2023-03-27T20:45:00Z",
  },
];

export { transactions, users };
