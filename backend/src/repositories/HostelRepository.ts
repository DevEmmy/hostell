import { Service } from "typedi";
import Hostels from "../models/hostels";

@Service()
class HostelRepository{
    constructor(private model = Hostels){

    }

    async getAll(){
        let result = await this.model.find();
        return result;
    }

    async getOneById(id: string){
        let result = await this.model.findById(id);
        return result;
    }

    async save(data: any){
        let result = await new this.model(data).save()
        return result;
    }

    async getByLocation(location: string){
        let result = await this.model.find({location})
        return result;
    }

    async update(id: string, data: any){
        let result = await this.model.findByIdAndUpdate(id, data, {new: true});
        return result;
    }

    async delete(id: string){
        let result = await this.model.findByIdAndDelete(id)
        return result
    }

    
}

export default HostelRepository