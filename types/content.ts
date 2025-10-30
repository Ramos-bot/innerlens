export type Phrase = {
    id: string;
    text: string;
    pack?: string;
    tags?: string[];
    level?: string;
};

export type Lesson = {
    id: string;
    title: string;
    category?: string;
    level?: string;
    description?: string;
};

export type Routine = {
    id: string;
    title: string;
    steps: string[];
    durationMinutes?: number;
    tags?: string[];
};