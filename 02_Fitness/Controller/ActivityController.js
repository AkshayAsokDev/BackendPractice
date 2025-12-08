const users = [
  {
    "id": 1,
    "firstName": "Ava",
    "lastName": "Thompson",
    "gender": "female",
    "age": 29,
    "email": "ava.thompson@example.com"
  },
  {
    "id": 2,
    "firstName": "Liam",
    "lastName": "Rodriguez",
    "gender": "male",
    "age": 34,
    "email": "liam.rodriguez@example.com"
  },
  {
    "id": 3,
    "firstName": "Mia",
    "lastName": "Chen",
    "gender": "female",
    "age": 22,
    "email": "mia.chen@example.com"
  },
  {
    "id": 4,
    "firstName": "Noah",
    "lastName": "Patel",
    "gender": "male",
    "age": 31,
    "email": "noah.patel@example.com"
  },
  {
    "id": 5,
    "firstName": "Sophia",
    "lastName": "Green",
    "gender": "female",
    "age": 27,
    "email": "sophia.green@example.com"
  },
  {
    "id": 6,
    "firstName": "Ethan",
    "lastName": "Wright",
    "gender": "male",
    "age": 40,
    "email": "ethan.wright@example.com"
  },
  {
    "id": 7,
    "firstName": "Isabella",
    "lastName": "Davis",
    "gender": "female",
    "age": 24,
    "email": "isabella.davis@example.com"
  },
  {
    "id": 8,
    "firstName": "Oliver",
    "lastName": "Martinez",
    "gender": "male",
    "age": 36,
    "email": "oliver.martinez@example.com"
  },
  {
    "id": 9,
    "firstName": "Harper",
    "lastName": "Wilson",
    "gender": "female",
    "age": 30,
    "email": "harper.wilson@example.com"
  },
  {
    "id": 10,
    "firstName": "James",
    "lastName": "Anderson",
    "gender": "male",
    "age": 28,
    "email": "james.anderson@example.com"
  }
]



function getAllUsers(req,res) {
    const payload = {
        "data" : users,
        "size" : users.length
    }
    res.status(200).json(payload);
}

// handling users by gender using query 
function getUsersByGender(req, res) {
    const query = req.query;
    const gender = query.gender;

    const filteredData = users.filter((user) => user.gender.toLowerCase() === gender.toLowerCase());
    const payload = {
        "data" : filteredData,
        "size" : filteredData.length
    }

    res.status(200).json(payload);
}

//  handling users by firtname using params
function getUsersByFirstName(req, res) {
    const params = req.params;
    const firstName = params.firstName;
    // console.log(firstName);

    const filteredData = users.filter(user => user.firstName.toLowerCase() === firstName.toLowerCase());
    const payload = {
        "data" : filteredData,
        "size" : filteredData.length
    }

    res.status(200).json(payload);
}


module.exports = {
    getAllUsers,
    getUsersByGender,
    getUsersByFirstName
}