"use strict";

import { users } from "../users.js";

const getUsersWithGender = (users, gender) => {
  return users
    .filter(users => users.gender === gender)
    .map(users => users.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
