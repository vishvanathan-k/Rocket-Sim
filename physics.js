const g = 9.80665
function TWR(mass, maxthrust){
    return maxthrust/(mass*g)
}

function acc(mass, maxthrust, efficiency){
    w = mass*g
    thrust = maxthrust*efficiency
    return (thrust-w)/mass;
}