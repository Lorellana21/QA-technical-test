import { PosesRepository } from "../../src/repositories/poses.repository"
import { AllPosesUseCase } from "../../src/usecases/all-poses.usecase"
import POSES from './../../fixtures/poses.json';

jest.mock('../../src/repositories/poses.repository');

describe('All poses Use Case', () => {

    beforeEach(() => {
        PosesRepository.mockClear();
    })

    it('should execute correct', async () => {

        PosesRepository.mockImplementation(() => {
            return {
                getAllPoses: () => {
                    return POSES;
                }
            }
        })

        const useCase = new AllPosesUseCase();
        const poses = await useCase.execute();

        expect(poses).toHaveLength(48);

    })

})