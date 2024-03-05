const bcrypt = require("bcrypt");

//const hashPassword = async (pw) => {
//    const salt = await bcrypt.genSalt(12);
//    const hash = await bcrypt.hash(pw, salt);
//    console.log(salt);
//    console.log(hash);
//}

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async(pw, hashedPw) => {
    const result = bcrypt.compare(pw, hashedPw);
    if(result) {
        console.log("LOGGED IN! SUCCESSFUL MATCH");
    } else {
        console.log("INCORRECT CREDENTIALS");
    }
} 

//hashPassword("monkey");
login("monkey", "$2b$12$K8d43BSfxGix0ZEofdphYO5l.2FXt9P0XZ8ypipfdYxZbg1mbTX16")