let X = 225
let Y = 975
let maxthrust = 10000
let efficiency = 1
let fuel = 850
let fuelconsum = 0.1
let v = 0
let s = 0
let prevS = 0

function setup() {
    createCanvas(500, 1000)
}

function draw() {
    background(0)
    mass = 150+fuel
    Rocket(X,Y)
    a = acc(mass,maxthrust,efficiency)
    console.log(a)
    s = v + 0.5*a
    v = v + a
    Y -= s - prevS
    fuel -= fuelconsum
    prevS = s
}

function Rocket(X,Y){
    triangle(X,Y,X+25,Y,X+12.5,Y-25)
    rect(X,Y,25,25)
}