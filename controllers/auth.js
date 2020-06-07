const Company = require('../models/company');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: (req, res) => {

        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({msg: "Please complete all required fields!"})
        }

        Company.findOne({ username })
            .then(user => {
                
                if(user) return res.status(400).json({msg: "That username already exsits!"});
                
                const newUser = new Company({
                    ...req.body,
                    username,
                    password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                jwt.sign(
                                    {id: user.id}, 
                                    config.get('jwtSecert'),
                                    (err, token) => {
                                        if(err) throw err;
                                        res.json({user:{id: user.id, email: user.email, token}})
                                    }
                                )
                            })
                    })
                })

        }).catch(err => res.status(400).json({msg: err}))
    },
    authenticateUser: (req, res) => {
        
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(403).json({msg: "A username & password is required!"})
        }

        Company.findOne({ username })
            .then(user => {
                
                if(!user) return res.status(403).json("User does not exist");

                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(403).json("Invalid credentials");

                        jwt.sign(
                            {id: user.id}, 
                            config.get('jwtSecert'),
                            (err, token) => {
                                if(err) throw err;
                                res.json({user:{id: user.id, pass: user.email, token}})
                            }
                        )   
                    })

        }).catch(err => res.status(400).json({msg: err}))
    },
    getUserData: (req, res) => {
        Company.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
    }
}