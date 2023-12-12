const unique_names = [
  'Mark', 'Peter',
  'Bee', 'Jack',
  'Patrick', 'John',
  'T', 'Pop',
  'Lisa', 'Alex',
  'Bank', 'P'
];

let sampleObj = {
  id: "1",
  transactionDate: "2021-08-01",
  total: 20000,
  location: "Chonburi",
  paymentType: "Cash",
  member: {
    name: "Mark",
    age: "26",
  },
  pointRate: 0.01,
}

const getRandomData = () => {
  // Generate random data here
  // Example: return Math.random() * 100;
  return Math.random() * 100;
};

const arrayOfObjects = [];
for (let i = 0; i < 100000; i++) {
  const name = unique_names[i % unique_names.length];
  const newObj = {
    ...sampleObj,
    member: {
      ...sampleObj.member,
      name
    },
    randomData: getRandomData()
  };
  arrayOfObjects.push(newObj);
}


