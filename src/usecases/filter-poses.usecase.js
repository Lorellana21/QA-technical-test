import "../repositories/poses.repository";


export class FilterPosesUseCase {

     execute(poses, searchText) {
         
        return poses.filter((pose) => pose.english_name.toLowerCase().includes(searchText.toLowerCase()))
    }

}