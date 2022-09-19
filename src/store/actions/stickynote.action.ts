import {IStickyNote} from '@shared/interfaces/stickynote.interface';

export const StickyNoteActions = {
    ADD_NOTE: 'ADD_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
};
export function addStickynote(note: IStickyNote) {
    return {
        type: StickyNoteActions.ADD_NOTE,
        note,
    };
}

export function removeNote(note: IStickyNote) {
    return {
        type: StickyNoteActions.DELETE_NOTE,
        note,
    };
}
