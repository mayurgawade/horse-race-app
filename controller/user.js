const User = require('../modules/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

signToken = id => {
    return jwt.sign({id}, 'Secret', {expiresIn: '0.83h'});
}

exports.verifyToken = async (req,res,next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];
        if(!token) {
            throw('Missing token in headers');
        }
        const tokenValidate = jwt.verify(token, 'Secret');
        const user = await User.findById(tokenValidate.id);
        if(!user) {
            throw(`User Doesn't available in database`);
        }
        next();
    } catch (error) {
        res.send({
        statusCode: 401,
        status: 'failure',
        errorMessage : error
        })
    }

}

exports.authentication = async (req,res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            throw('Username or password is missing in body');
        }
        const userRecord = await User.findOne({email})
        if(!userRecord || !(await bcrypt.compare(password, userRecord.password))){
            throw('Incorrect email or password')
        }
        const token = signToken(userRecord._id)
        res.send({
            statusCode: 200,
            status: 'success',
            token
        })
    } catch (error) {
        res.send({
        statusCode: 401,
        status: 'failure',
        errorMessage : error
    })
    }
}

exports.signup = async (req,res) => {
    try {
        let { email, password } = req.body;
        password = await bcrypt.hash(password, 10);
        const user1 = await new User({email, password}).save()
        if(user1) {
            const id = user1._id;
            res.send({
                statusCode: 201,
                status: 'success',
                id
            })
        }
    } catch (error) {
        res.send({
        statusCode: 401,
        status: 'failure',
        errorMessage : error
    })
    }
}