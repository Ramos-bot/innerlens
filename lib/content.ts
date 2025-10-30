import { Phrase, Lesson, Routine } from '../types/content';

// Using require so Metro bundler handles JSON without JSON module assertions
export function loadPhrases(): Phrase[] {
    const data = require('../content/phrases.json') as Phrase[];
    return data;
}

export function loadLessons(): Lesson[] {
    const data = require('../content/lessons.json') as Lesson[];
    return data;
}

export function loadRoutines(): Routine[] {
    const data = require('../content/routines.json') as Routine[];
    return data;
}