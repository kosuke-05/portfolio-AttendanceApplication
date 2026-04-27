"use client"

import { UserValidations } from "@/schemas/userSchema";
import zod from "zod";

// RHFと連携するための型
export type UserType = zod.infer<typeof UserValidations>;