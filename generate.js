module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");
  return {
      posts: _.times(100, function(n){
          return{
              userId: 1,
              id: n,
              title: faker.lorem.sentence(),
              body: faker.lorem.paragraph()
              // dealershipName: faker.name.findName() + "'s Flying Cars",
              // address: faker.address.streetAddress("####"),
              // city: faker.address.city(),
              // state: faker.address.state(),
              // zip: faker.address.zipCode(),
              // phone: faker.phone.phoneNumber()
          }
      })
  }
}
