import {IStickyNote} from '@shared/interfaces/stickynote.interface';
import * as React from 'react';

interface INoteComponent {
    note: IStickyNote;
    removeNote: (note: IStickyNote) => void;
}

const Stickynote = ({note, removeNote}: INoteComponent) => {
    return (
        <div>
            <div>
                <p>{note.text}</p>
            </div>
            <button onClick={() => removeNote(note)}>Usuń</button>
        </div>
    );
};
export default Stickynote;
