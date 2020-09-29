const statuses = {
  junior: "child",
  teen: "teenager",
  adult: "adult",
  senior: "senior",
};

const state = {
  sk: "slovakia",
  cz: "czech",
  us: "usa",
};

const users = [
  {
    name: "Maria",
    age: "27",
    nationality: state.sk,
  },
  {
    name: "Edward",
    age: "17",
    nationality: state.us,
  },
  {
    name: "Alphonse",
    age: "35",
    nationality: state.cz,
  },
  {
    name: "Winry",
    age: "66",
    nationality: state.sk,
  },
  {
    name: "May",
    age: "10",
    nationality: state.cz,
  },
];

let status = function (age) {
  if (age >= 0 && age <= 12) {
    return statuses.junior;
  } else if (age >= 13 && age <= 19) {
    return statuses.teen;
  } else if (age >= 20 && age <= 64) {
    return statuses.adult;
  } else if (age >= 65 && age <= 110) {
    return statuses.senior;
  } else {
    return "vek je neplatny, zadaj este raz";
  }
};

let mapStatus = function (users) {
  return {
    name: users.name,
    age: users.age,
    nationality: users.nationality,
    status: status(users.age),
  };
};
console.log(users.map(mapStatus));

let mapIfForeigner = function (users) {
  return {
    name: users.name,
    age: users.age,
    nationality: users.nationality,
    foreigner: users.nationality !== state.sk,
  };
};

console.log(users.map(mapIfForeigner));

let cisla = [1, 2, 3, 5, 4, 8, 9];

let sumNum = function (cisla) {
  return cisla + 1;
};

console.log(cisla.map(sumNum));

let filterIfForeigner = function (users) {
  return users.nationality === state.sk;
};

console.log(users.filter(filterIfForeigner));
