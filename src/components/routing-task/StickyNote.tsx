import {IStickyNote} from '@shared/interfaces/stickynote.interface';
import * as React from 'react';

interface INoteComponent {
    note: IStickyNote;
    removeNote: (note: IStickyNote) => void;
}

const Stickynote = ({note, removeNote}: INoteComponent) => {
    return (
        <div className="sticky-note">
            <div>
                <p>{note.text}</p>
            </div>
            <button onClick={() => removeNote(note)}>Delete</button>
        </div>
    );
};
export default Stickynote;
