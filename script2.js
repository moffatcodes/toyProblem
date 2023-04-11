function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPerKmOverLimit = 1;
    const maxDemeritPoints = 12;
    
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const kmOverLimit = speed - speedLimit;
      const demeritPoints = Math.floor(kmOverLimit / 5) * demeritPointsPerKmOverLimit;
      
      if (demeritPoints >= maxDemeritPoints) {
        return "License suspended";
      } else {
        return "Points: " + demeritPoints;
      }
    }
  }

