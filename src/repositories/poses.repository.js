import axios from "axios";


export class PosesRepository {


    async getAllPoses() {
        return await (
            await axios.get("https://lightning-yoga-api.herokuapp.com/yoga_poses")
        ).data;

    }
   
}
