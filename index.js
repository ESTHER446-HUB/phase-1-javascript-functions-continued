// code your solution here
// 1. Define SaturdayFun as a function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Define MondayWork as a function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Define wrapAdjective function
function wrapAdjective(highlight = "*") {
  return function(objective = "special") {
    return `You are ${highlight}${objective}${highlight}!`;
  };
}
