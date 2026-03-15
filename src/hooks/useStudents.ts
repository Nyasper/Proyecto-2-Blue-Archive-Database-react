import { useFetch } from './useFetch';
import type { Student } from '../models/student.model';

export function useStudents() {
	const { data: students = [], error } =
		useFetch<Student[]>(`/data/data.json`);

	return { students, error };
}
