import StickyNote from '@components/routing-task/StickyNote';
import {IStickyNote} from '@shared/interfaces/stickynote.interface';
import {removeNote} from '@store/actions/stickynote.action';
import {IAppState} from '@store/reducers';
import React, {Dispatch} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

const StickyNotesList = () => {
    const notes: readonly IStickyNote[] = useSelector(
        (state: IAppState) => state.note.note,
        shallowEqual,
    );

    const dispatch: Dispatch<any> = useDispatch();
    const deleteNote = (note: IStickyNote) => dispatch(removeNote(note));

    return notes.length ? (
        <ul className="notes-list">
            {notes.map((note: IStickyNote) => (
                <StickyNote key={note.id} note={note} removeNote={deleteNote} />
            ))}
        </ul>
    ) : (
        <h1>Add note!</h1>
    );
};

export default StickyNotesList;
