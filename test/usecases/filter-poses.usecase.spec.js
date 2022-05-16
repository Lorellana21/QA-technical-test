import { FilterPosesUseCase } from "../../src/usecases/filter-poses.usecase";
import POSES from "./../../fixtures/poses.json";

describe("filter poses by name", () => {

it("filter when text exists", () => {

    const searchText = "Warrior";
    const poses = POSES;

    const useCase = new FilterPosesUseCase();
    const filteredPoses = useCase.execute(poses, searchText);

    expect(filteredPoses).toHaveLength(4);

})

it("filter when text not exists", () => {

    const searchText = "pepino";
    const poses = POSES;

    const useCase = new FilterPosesUseCase();
    const filteredPoses = useCase.execute(poses, searchText);

    expect(filteredPoses).toHaveLength(0);

})

    
})