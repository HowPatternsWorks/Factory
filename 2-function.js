// Function factory
// Created by enclosure

const colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m'
};

const loggerFactory = (level = 'log') => {
  const color = colors[level];

  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
} 

const info = loggerFactory('info');
info('Hello')

const error = loggerFactory('error');
error('Hello')

// ################################################################ //

function Developer(name)
{
  this.name = name
  this.type = "Developer"
}

function Tester(name)
{
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function say()
{
  console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const data = [
  {name: "Patrick", type: 1},
  {name: "John", type: 2},
  {name: "Jamie", type: 1},
  {name: "Taylor", type: 1},
  {name: "Tim", type: 2}
]

const employees = data.map(({name, type}) => employeeFactory.create(name, type))

// employees.push(employeeFactory.create("John", 2))
// employees.push(employeeFactory.create("Jamie", 1))
// employees.push(employeeFactory.create("Taylor", 1))
// employees.push(employeeFactory.create("Tim", 2))

employees.forEach( emp => {
  say.call(emp)
})