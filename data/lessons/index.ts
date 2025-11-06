import { LessonData } from '../../types';
import { lessons_01_to_09 } from './lessons_01a09';
import { lessons_10_to_19 } from './lessons_10a19';
import { lessons_20_to_29 } from './lessons_20a29';
import { lessons_30_to_39 } from './lessons_30a39';

export const lessons: LessonData[] = [
    ...lessons_01_to_09,
    ...lessons_10_to_19,
    ...lessons_20_to_29,
    ...lessons_30_to_39,
];