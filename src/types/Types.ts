export interface IInitialState {
    notes: INote[],
}

export interface INote {
    title: string,
    date: number,
    id?:number,
}