function player(){

    let playerOne = 'Andres';
    let playerTwo = 'Haro';
    
    [playerOne, playerTwo] = [playerTwo, playerOne]
    
    return (`That ${playerOne} and ${playerTwo} won't pick a lane`)
    
    }
    
    player();