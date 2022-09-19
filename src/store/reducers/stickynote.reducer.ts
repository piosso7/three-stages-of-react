import {
    StickyNoteState,
    IStickyNote,
    StickyNoteAction,
} from '@shared/interfaces/stickynote.interface';
import {StickyNoteActions} from '@store/actions/stickynote.action';
const initialState: StickyNoteState = {
    note: [],
};

const stickynoteReducer = (
    state: StickyNoteState = initialState,
    action: StickyNoteAction,
): StickyNoteState => {
    switch (action.type) {
        case StickyNoteActions.ADD_NOTE:
            const newNote: IStickyNote = {
                id: Math.floor(Math.random() * 100000),
                text: action.note.text,
            };
            return {
                ...state,
                note: [...state.note, newNote],
            };
        case StickyNoteActions.DELETE_NOTE:
            const updatedNotes: IStickyNote[] = state.note.filter(
                (note) => note.id !== action.note.id,
            );
            return {
                ...state,
                note: updatedNotes,
            };
    }
    return state;
};

export default stickynoteReducer;
