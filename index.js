// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

const mondayWork= function(activity ="go to the office"){
    return `This Monday, I will ${activity}.`
}



let wrapAdjective = function(par="*") {
    return function(name="special") {
      return `You are ${par}${name}${par}!`
    }
  }