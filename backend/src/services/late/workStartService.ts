import { lateWorkStartRepository } from "../../repository/late/workStartRepository.js";

export const lateWorkStartService = async (lateReason: string) => {
  await lateWorkStartRepository(lateReason);
};