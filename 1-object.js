// Object factory
// To hide creation of keys

const user1 = {
  type: 'user',
  name: 'Name',
  group: 'Group1',
  email: 'Email1'
}

const user2 = {
  type: 'user',
  name: 'Name',
  group: 'Group1',
  email: 'Email1'
}

// function userFactory (name, group, email){
//   return { type: 'user', name, group, email };
// }

const userFactory = (name, group, email) => ({ type: 'user', name, group, email });

const user = userFactory('User1', 'Group1', 'Email1')

console.table(user)
console.log(JSON.stringify(user, null, 2))



// ################################################################ //



const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com"
});

console.log(user1);
console.log(user2);