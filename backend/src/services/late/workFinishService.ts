import { lateWorkFinishRepository } from "../../repository/late/workFinishRepository.js"

export const lateWorkFinishService = async (lateReason: string) => {
  await lateWorkFinishRepository(lateReason);
};