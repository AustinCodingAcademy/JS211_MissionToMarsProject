'use strict'

class Ship {
  crew = [];
  constructor(name, type, ablility) {
    this.name = name;
    this.type = type;
    this.ablility = ablility;
  };
  missionStatement() {
    let msg;
    if (this.crew.length > 0) {
      msg = `We have ${this.crew.length} crew member(s). Ready to ${this.ablility}`
    }
    else {
      msg = "No Crew.  Can't do mission!"
    }
    console.log(msg)
  }
};

class CrewMember {
  constructor(name, job, skill) {
    this.name = name;
    this.job = job;
    this.skill = skill;
  }
  enterShip(ship) {
    this.ship = ship;
    ship.crew.push(this);
  };
};

let s1 = new Ship('Heremes', 'Cargo', 'Time Travel')
let u1 = new CrewMember('David', 'Pilot', 'Chemist')
let u2 = new CrewMember('Maria', 'Tech', 'Barber')


console.log(s1)
/*Ship {crew: [],  name: 'Heremes',  type: 'Cargo',  ablility: 'Time Travel'}*/

u1.enterShip(s1)
console.log(u1)
/*CrewMember {
  name: 'David',  job: 'Pilot',  skill: 'Chemist',
  ship: Ship { crew: [ [Circular] ], name: 'Heremes', type: 'Cargo', ablility: 'Time Travel'}
}*/

u2.enterShip(s1)
console.log(u2)
/*CrewMember {
  name: 'Maria',  job: 'Tech',  skill: 'Barber',
  ship: Ship {crew: [ [CrewMember], [Circular] ], name: 'Heremes', type: 'Cargo', ablility: 'Time Travel'}
}*/


console.log(s1)
/*Ship {
  crew: [ 
    CrewMember {name: 'David', job: 'Pilot', skill: 'Chemist', ship: [Circular]},
    CrewMember {name: 'Maria', job: 'Tech', skill: 'Barber', ship: [Circular]}
  ],
  name: 'Heremes', type: 'Cargo', ablility: 'Time Travel'
}*/

s1.missionStatement()
//We have 2 crew member(s). Ready to Time Travel




