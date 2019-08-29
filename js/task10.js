"use strict";

import { users } from "../users.js";

const getSortedUniqueSkills = users => {
    return users.reduce((a,b) => {
        return [...a, ...b.skills];
     }, []).sort().filter((el, i, a) => i === a.indexOf(el))
};
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proide 