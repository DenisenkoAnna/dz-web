function getPrice(timeInHour, isUrgentProject) {
  let perHour = 1500;
  
  if (isUrgentProject) {
    timeInHour /= 2;
    perHour *= 2.5;
    }
    
  if (timeInHour > 150) perHour -= 250;
    
  return timeInHour * perHour; 
  }

console.log(getPrice(3, 7))
