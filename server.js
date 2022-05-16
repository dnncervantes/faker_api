const express = require('express');
const app = express();
const PORT = 8000;
const {faker} = require('@faker-js/faker');

// =====Class Attributes=====
class User {
    constructor () {
        this._id = faker.id;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor () {
        this._id = faker.random.numeric(9);
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip_code = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


//=====Routing=====
app.get("/api/users/new", (req, res) =>{
    res.json(new User);
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
});

app.get("/api/user/company", (req, res) => {
    res.json([new User, new Company]);
})

// THIS SHOULD ALWAYS BE AT THE END OF OUR SERVER.JS
const server = app.listen(PORT, () => {
    console.log(`Server is locked and loaded on port ${PORT}!`)
});