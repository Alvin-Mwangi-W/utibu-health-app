import { Request, Response } from "express";
import { hashSync } from 'bcrypt'
import { prismaClient } from "..";

export const signUp = async (req: Request, res: Response) => {
    const {email, password, name} = req.body;

    let user = await prismaClient.user.findFirst({where: {email}});
    if(user) {
        throw Error('User Already Exists');
    }
    user = await prismaClient.user.create({
        data:{
            name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.json(user);
}

export const login = async (req: Request, res: Response) => {
    res.send("Login works"); 
    // const {email, password} = req.body;

    // let user = await prismaClient.user.findFirst({where: {email}});
    // if(!user) {
    //     throw Error('User Already Exists');
    // } else {
    //     res.send("User login");
    // }
}