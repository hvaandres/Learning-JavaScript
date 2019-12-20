function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    //Write your code here to make the cars switch lanes
    [rightLane, leftLane] = [leftLane, rightLane]
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();