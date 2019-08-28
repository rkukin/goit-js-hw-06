"use strict";

import { users } from "../users.js";

const calculateTotalBalance = users => {
  return users.reduce((balance, users) => balance + users.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
