import bcrypt from 'bcryptjs';

const data = {
    users: [
        {	"email":"google@gmail.com",
            "password":bcrypt.hashSync('123456', 8),
            "userName":"gusto",
            "isAdmin": false,
            "passwordCheck":bcrypt.hashSync('123456', 8),
        },
        {
            "email":"marcelezenagu@gmail.com",
            "password":bcrypt.hashSync('testing', 8),
            "userName":"testGuy",
            "isAdmin": true,
            "passwordCheck":bcrypt.hashSync('testing', 8)
            
        },
    ]
}

export default data;