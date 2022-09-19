export interface IStickyNote {
    id: number;
    text: string;
}

export type StickyNoteState = {
    note: IStickyNote[];
};

export type StickyNoteAction = {
    type: string;
    note: IStickyNote;
};

export type DispatchType = (args: StickyNoteAction) => StickyNoteAction;
