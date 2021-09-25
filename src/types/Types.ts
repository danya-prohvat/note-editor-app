export interface IInitialState {
    notes: INote[],
    activeNoteId:number,
}

export interface INote {
    title: string,
    date: number,
    id?:number,
}
export interface INoteProps extends INote{
    active?: boolean,
}