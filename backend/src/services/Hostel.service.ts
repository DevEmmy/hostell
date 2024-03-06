import { Service } from "typedi";
import HostelRepository from "../repositories/HostelRepository";

@Service()
class  Hostel{
    constructor(
        private readonly repository : HostelRepository
    ){}

    async getAll(){
        let result = await this.repository.getAll()
        return {
            payload: result
        }
    }

    async getHostelById(id: string){
        let result = await this.repository.getOneById(id);
        return {
            payload: result
        }
    }

    async createHostel(data: any){
        let result = await this.repository.save(data)
        return {
            payload: result,
            message: "Hostel added successfully"
        }
    }

    async deleteHostel(id: string){
        let result = await this.repository.delete(id);
        return {
            payload: result,
            message: "Hostel Deleted Successfully"
        }
    }

    async updateHostel(id: string, data: any){
        let result = await this.repository.update(id, data);
        return {
            payload: result,
            message: "Hostel Updated Successfully"
        }
    }

    async switchAvailability(id: string){
        let result: any = await this.repository.getOneById(id);
        result.available = !result?.available
        result = await this.repository.update(id, result);
        return {
            payload: result,
            message: "Hostel Availability Updated"
        }
    }
}