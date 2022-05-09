import { PosesRepository } from "../repositories/poses.repository";
import { UtilsService } from "../services/utils.services";

export class OddPosesUseCase {

    async execute() {
        const repository = new PosesRepository();
        const poses = await repository.getAllPoses();
        const oddPoses = poses.filter((pose) => UtilsService.isOdd(pose.id));
        return oddPoses;
    }

}