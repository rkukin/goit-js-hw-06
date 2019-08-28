"use strict";

import { users } from "../users.js";

const getInactiveUsers = users => {
  return users.filter(users => !users.isActive);
};

console.log(getInactiveUsers(users));
