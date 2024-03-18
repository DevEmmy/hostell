import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET || "SNOSD9SDD"



const validateAuth =  (req:Request, res: Response, next: NextFunction)=>{
    const userRepository = new UserRepository()
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: "You must Be authorized"})
    }
    const token = authorization.replace("Bearer ", "")
    
    jwt.verify(token, jwt_secret,  async (err, payload)=>{
        if(err){
            return res.status(401).json({error: "you must be logged in"})
        }
            let userId: any = payload
            let user = await userRepository.findOneById(userId.userId)
            if(!user){
                return res.status(404).json({error: "User not Found"})
            }
            req.body.user = user;
            
    })
    next()  
    
}


export default validateAuth