export interface IInitialState {
    notes: INote[],
    activeNoteId: number | null,
    creatingNewNoteNow: boolean,
}

export interface INote {
    title: string,
    description?: string,
    date: number,
    id: number,
}

export interface INoteProps extends INote {
    active?: boolean,

    noteOnClick(id: number | undefined): void;
}

export interface INoteEditorData {
    title: string,
    description: string | undefined
}

export interface INewNote extends INoteEditorData {
    editingNow: boolean
}
