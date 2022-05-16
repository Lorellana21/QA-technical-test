import "../repositories/poses.repository";


export class FilterPosesUseCase {

     execute(poses, searchText) {
        return poses.items.filter(pose => 
            pose.english_name.includes(searchText))
    }
    

    
    // async execute() {
    //     const repository = new PosesRepository();
    //     const poses = await repository.getAllPoses();
    //     const filteredPoses = poses.filter(pose => 
    //         pose.english_name.includes(searchText));
    //     return filteredPoses;
    // }

}