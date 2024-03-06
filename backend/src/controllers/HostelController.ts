import { Request, Response } from "express";
import HostelService from "../services/Hostel.service";
import { IResult, error, success } from "../utils/returnResponses";

class HostelController{
    constructor(private readonly service : HostelService){}

    async getAll(request: Request, response: Response){
        try{
            let result: IResult = await this.service.getAll()
            success(result, response)
        }
        catch(err : any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getOne(request: Request, response: Response){
        try{
            let {id} = request.params;
            let result : IResult = await this.service.getHostelById(id)
            success(result, response)
        }
        catch(err : any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }
}