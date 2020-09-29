const shirts = [
  {
    id: 1,
    price: 39,
    size: "XS",
  },
  {
    id: 2,
    price: 39,
    size: "XL",
  },
  {
    id: 3,
    price: 91,
    size: "S",
  },
  {
    id: 4,
    price: 96,
    size: "M",
  },
  {
    id: 5,
    price: 74,
    size: "M",
  },
  {
    id: 6,
    price: 21,
    size: "2XL",
  },
  {
    id: 7,
    price: 32,
    size: "3XL",
  },
  {
    id: 8,
    price: 73,
    size: "2XL",
  },
  {
    id: 9,
    price: 72,
    size: "S",
  },
  {
    id: 10,
    price: 78,
    size: "M",
  },
  {
    id: 11,
    price: 63,
    size: "XL",
  },
  {
    id: 12,
    price: 27,
    size: "3XL",
  },
  {
    id: 13,
    price: 90,
    size: "XS",
  },
  {
    id: 14,
    price: 92,
    size: "S",
  },
  {
    id: 15,
    price: 26,
    size: "2XL",
  },
  {
    id: 16,
    price: 21,
    size: "M",
  },
  {
    id: 17,
    price: 67,
    size: "2XL",
  },
  {
    id: 18,
    price: 71,
    size: "L",
  },
  {
    id: 19,
    price: 24,
    size: "XS",
  },
  {
    id: 20,
    price: 73,
    size: "M",
  },
];

//==========================================================================================
// Mod. price
//==========================================================================================

const price = [
  {
    tenPercent: 0.1,
  },
];

//==========================================================================================
// Average price shirts
//==========================================================================================

// Average price shirts ======= forEach()
/*
const avgPriceComputing = function(shirts) {
    let sum=0;
    shirts.forEach(function(tricko) {
        sum+= tricko.price
    })
    return Math.round(sum/shirts.length)

}
*/
// Average price shirts ======= arrow function + for loop

const avgPriceComputing = (shirts) => {
  let sum = 0;
  for (let i = 0; i < shirts.length; i++) {
    sum += shirts[i].price;
  }
  return Math.round(sum / shirts.length);
};

// Average price shirts ======= for of

// const avgPriceComputing = shirts => {
//     let sum = 0;
//     for (tricko of shirts)
// }

//==========================================================================================
//Counting number of sizes available
//==========================================================================================
/*
let allSizesCount = [
  {
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    "2XL": 0,
    "3XL": 0,
  },
];



const sizeAvailability = (shirts) => {
  shirts.forEach((shirt) => {
    allSizesCount[shirt.size]++;
  });
  return allSizesCount;
};

*/
const sizeAvailability = (shirts) => {
  const sizes = {
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    "2XL": 0,
    "3XL": 0,
  };
  shirts.forEach((shirt) => {
    sizes[shirt.size]++;
  });

  console.log(sizes);
};

//==========================================================================================
//Rising prices of M and L size T-Shirts
//==========================================================================================
/*
const priceRiseCalc = shirts => {
    shirts.map(function(merch) {
        if(merch.size==='M' || merch.size==='L') {
            return {...shirts,
                    'price':(merch.price*price.tenPercent)+merch.price
                   }
        }
    })
}
*/
const priceRiseCalc = (shirts) => {
  if (shirts.size === "M" || shirts.size === "L") {
    return {
      ...shirts,
      price: shirts.price * price.tenPercent + shirts.price,
    };
  } else {
    return {
      ...shirts,
    };
  }
};

//==========================================================================================
// Console log
//==========================================================================================

console.log("priceRiseCalc", priceRiseCalc(shirts));
console.log("avgPriceComputing", avgPriceComputing(shirts));
console.log("sizeAvailability", sizeAvailability(shirts));
