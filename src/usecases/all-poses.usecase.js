import { PosesRepository } from "../repositories/poses.repository";

export class AllPosesUseCase {

    async execute() {
        const repository = new PosesRepository();
        const poses = await repository.getAllPoses();
        return poses;
    }


}