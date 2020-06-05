const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/timeClock", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

const companySeed = [{
    firstName: "Sundar",
    lastName: "Pichai",
    companyName: "Google.com",
    address: "1600 Amphitheatre Parkway",
    city: "Mountain View",
    state: "CA",
    postalCode: "94043",
    email: "spichai@google.com",
    username: "admin545",
    password: "1234567",
    locations: [{
            locationName: "Location 1",
            address: "123 google prkwy",
            city: "Atherton",
            state: "CA",
            postalCode: "12345",
            phone: "(650) 123 - 5955",
            employees: [{
                    firstName: "Vernon",
                    lastName: "Bishop",
                    address: "251 W Cherokee Ln Apt 123",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "12345",
                    phone: "(650) 123 - 5955",
                    email: "vernonbishop@email.com",
                    roles: [{
                            description: "Front End Developer",
                            payRate: "$60.00"
                        },
                        {
                            description: "Backend Developer",
                            payRate: "$55.00"
                        }
                    ],
                    active: false,
                    pin: "1234"
                },
                {
                    firstName: "Maxine",
                    lastName: "Morgan",
                    address: "111 S San Marcas Way",
                    city: "San Jose",
                    state: "CA",
                    postalCode: "12345",
                    phone: "(408) 123 - 5955",
                    email: "maxinemorgan@email.com",
                    roles: [{
                            description: "Front End Developer",
                            payRate: "$60.00"
                        },
                        {
                            description: "Back End Developer",
                            payRate: "$57.00"
                        }
                    ],
                    active: true,
                    pin: "1234",
                }
            ]
        },
        {
            locationName: "Location 2",
            address: "231 google dr.",
            city: "Palo Alto",
            state: "CA",
            postalCode: "12345",
            phone: "(650) 123 - 5955",
            employees: [{
                    firstName: "John",
                    lastName: "Doe",
                    address: "255 W Lane Apt 123",
                    city: "Palo Alto",
                    state: "CA",
                    postalCode: "12345",
                    phone: "(650) 123 - 5955",
                    email: "johndoe@email.com",
                    roles: [{
                            description: "Product Sales",
                            payRate: "$29.00"
                        },
                        {
                            description: "Support",
                            payRate: "$40.00"
                        }
                    ],
                    active: true,
                    pin: "1234"
                },
                {
                    firstName: "Ken",
                    lastName: "Homes",
                    address: "111 S St Apt 333",
                    city: "San Jose",
                    state: "CA",
                    postalCode: "12345",
                    phone: "(408) 123 - 5955",
                    email: "kenhomes@email.com",
                    roles: [{
                            description: "Product Sales",
                            payRate: "$29.00"
                        },
                        {
                            description: "Support",
                            payRate: "$40.00"
                        }
                    ],
                    active: false,
                    pin: "1234"
                }
            ]
        }
    ]
}
]

db.Company
  .deleteMany({})
  .then(() => db.Company.collection.insertMany(companySeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });