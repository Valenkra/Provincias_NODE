import ProvinceRepository from "../repositories/province-repository.js";

export default class ProvinceService {
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const lReturnArray = await repo.getById(id);
        return lReturnArray;
    }

    deleteByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const checkExistance = await repo.getById(id);
        let response;
        if(checkExistance.length !== 0){
            response = await repo.deleteByIdAsync(id);
        }else{
            response = "BAD REQUEST: ID inexistente";
        }
        return response;
    }

    updateByIdAsync = async(data) => {
        const repo = new ProvinceRepository();
        const checkExistance = await repo.getById(data[data.length-1]);
        let response;
        if(checkExistance.length !== 0){
            response = await repo.updateByIdAsync(data);
        }else{
            response = "BAD REQUEST: ID inexistente";
        }
        return response;
    }

    createAsync = async(name, fName, latitude, longitude, dOrder) => {
        const repo = new ProvinceRepository();
        const lReturnArray = await repo.insertAsync(name, fName, latitude, longitude, dOrder);
        return lReturnArray;
    }
}