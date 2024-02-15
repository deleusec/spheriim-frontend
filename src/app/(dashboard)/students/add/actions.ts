"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import getSupabase from "@/lib/supabase/client";
const studentTableName = 'spheriim_student';

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createStudent(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    const schema = z.object({
        student: z.string().min(1),
    });
    const parse = schema.safeParse({
        student: formData.get('student'),
    });

    if (!parse.success) {
        return { message: "Failed to create student" };
    }

    const data = parse.data;

    try {
        const res = await getSupabase()
            .from(studentTableName)
            .insert([{ name: data.student }]);
        return res.data;

        revalidatePath("/");
        return { message: `Added student ${data.student}` };
    } catch (e) {
        return { message: "Failed to create student" };
    }
}