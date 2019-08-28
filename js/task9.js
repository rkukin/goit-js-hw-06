"use strict";

import { users } from "../users.js";

const getNamesSortedByFriendsCount = users => {
  return users.sort.map(users, users.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
