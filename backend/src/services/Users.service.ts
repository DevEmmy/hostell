import UserRepository from "../repositories/UserRepository";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { Service } from "typedi";
import "reflect-metadata"
import generateOTP from "../utils/generateOTP";
require('dotenv').config();

const jwtSecret: string = process.env.JWT_SECRET || "SNOSD9SDD"

@Service()
class UserServices{
    constructor(private readonly userRepository : UserRepository,
        ){}

    async signUp(userInfo: any){
        try{
            let user: any = userInfo
            let hashedPassword = await bcrypt.hash(userInfo.password, 6)
            user.password = hashedPassword
            user = await this.userRepository.save(user)
            let token = jwt.sign({email:user.email, _id: user._id}, jwtSecret)
            return {
                message: "Signed Up Successfully",
                status:201,
                payload: {user, token}
            }
        }
        catch(err: any){
            return{
                ...err
            }
        }

    }

    async signIn(email: string, password: string){
        try{
            let user = {email, password};
            // change this any to an Interface
            let dbUser: any = await this.userRepository.findOneByEmail(email)
            if(!dbUser){
                return {
                    message:"User not found",
                    status: 400,
                    payload: null
                }
            }
            let hashedPassword = await bcrypt.compare(password, dbUser.password)

            
            if (hashedPassword){
                let token = jwt.sign({email:dbUser.email, _id: dbUser._id}, jwtSecret)
                
                return{
                    message: "Signed In Successfully",
                    status: "200",
                    payload: {
                        dbUser, token
                    }
                }
            }
            else{
                return {
                    message: "Incorrect Password",
                    status: 400,
                    payload: null
                }
            }
        }
        catch(err: any){
            console.log(err)
            return {
                ...err
            }
        }
    }

    async forgotPassword(email: string){
        try{
            let user: any = await this.userRepository.findOneByEmail(email)
            let resetCode =  generateOTP()
            user.resetCode = resetCode;
            user = await this.userRepository.update(user._id, user)
            // this.emailService.sendResetCode(email, resetCode)  

            return {
                payload: null,
                message: "Reset Code Sent"
            }
        } 
        catch(err: any){
            return {
                ...err
            }
        }
    }

    async resetPassword(email: string, resetCode: string){
        try{
            let user: any = await this.userRepository.findOneByEmail(email)
            if(user.email !== resetCode){
                return {
                    payload: null,
                    message: "Wrong Reset Code"
                }
            }

            user.resetCode = null;
            user = await this.userRepository.update(user._id, user)
            return {
                payload: user,
                message: "Confirmed Reset Code"
            }
        }   
        catch(err: any){
            return {
                ...err
            }
        }
    }

    async updateProfile(_id: string, userObject: object){
        try{
            let result = this.userRepository.update(_id, userObject)
            return {
                payload: result,
                message: "Updated!"
            }
        }
        catch(err: any){
            return {
                ...err
            }
        }
    }

    async getLoggedInUser(token: string){

    }

    async getUserById(id: string){
        let user = await this.userRepository.findOneById(id)
        return {
            payload: user,
            message: "Successful",
            status: 200
        }
    }

    async getUserByEmail(email:  string){

    }

}

export default UserServices