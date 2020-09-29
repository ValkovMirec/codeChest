const items = [
  {
    code: 12,
    title: "JBL reproduktor",
    price: 193.5,
  },
  {
    code: 15,
    title: "Zvukova karta",
    price: 421.5,
  },
  {
    code: 19,
    title: "Monitor",
    price: 80.5,
  },
  {
    code: 120,
    title: "Mikrofon",
    price: 122,
  },
  {
    code: 18,
    title: "LCD Monitor",
    price: 200,
  },
  {
    code: 999,
    title: "AirPods",
    price: 119.9,
  },
];

const users = [
  {
    first: "Jan",
    age: 24,
    purchases: [19, 120, 999, 18],
  },
  {
    first: "Michal",
    age: 42,
    purchases: [],
  },
  {
    first: "Kim",
    age: 29,
    purchases: [12],
  },
  {
    first: "David",
    age: 15,
    purchases: [15, 19, 999],
  },
  {
    first: "Roman",
    age: 37,
    purchases: [15, 19, 12, 120],
  },
  {
    first: "Lea",
    age: 17,
    purchases: [18, 12],
  },
];

const status = function (users) {
  if (users.age > 0 && users.age <= 18) {
    return "Child";
  } else if (users.age > 18) {
    return "Adult";
  } else "Invalid age";
};

const priority = function (users) {
  if (users.purchases.length >= 0 && users.purchases.length <= 1) {
    return 0;
  } else if (users.purchases.length <= 3) {
    return 5;
  } else {
    return 10;
  }
};

// Map

const mapPriority = function (users) {
  return { ...users, priority: priority(users) };
};

const mapStatus = function (users) {
  return { ...users, status: status(users) };
};

// Filter

const highPriorityFilter = function (users) {
  return users.priority >= 5;
};

const adultFilter = function (users) {
  return users.age >= 18;
};

// Average age // vanilla syntax

const displayAge = function (users) {
  return users.age;
};

const ageSum = eval(users.map(displayAge).join("+"));

const avgAge = function (users) {
  average = ageSum / users.length;
  return `(vanilla syntax)Average age of customer is ${average.toFixed(2)}`;
};

// Average age // ES6 syntax

const avgAgeComputing = (users) => {
  let suma = 0;
  for (let i = 0; i < users.length; i++) {
    suma += users[i].age;
  }

  return `(ES6 syntax)Average age of customer is ${Math.floor(
    suma / users.length
  )}`;
};

// Average count of purchases // standard syntax + .forEach

const avgPurchasesCountForEach = function (users) {
  let suma = 0;
  users.forEach(function (user) {
    suma += user.purchases.length;
    return suma;
  });

  return `(ES6 syntax + for cycle)Average count of purchases is ${Math.floor(
    suma / users.length
  )}`;
};
// Average count of purchases // ES6 syntax + for cycle

const avgPurchasesCountForCycle = (users) => {
  let suma = 0;
  for (let i = 0; i < users.length; i++) {
    suma += users[i].purchases.length;
  }
  return `(ES6 syntax + for cycle)Average count of purchases is ${Math.floor(
    suma / users.length
  )}`;
};

////////////////////////////////////////////////////////////////////////////////////////

console.log(avgPurchasesCountForEach(users));
console.log(avgPurchasesCountForCycle(users));
console.log(avgAge(users));
console.log(avgAgeComputing(users));

const output = users
  .map(mapPriority)
  .filter(highPriorityFilter)
  .filter(adultFilter);

console.log(output);
