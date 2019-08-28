"use strict";

import { users } from "../users.js";

const getUserWithEmail = (users, email) => {
  return users.find(users => users.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
