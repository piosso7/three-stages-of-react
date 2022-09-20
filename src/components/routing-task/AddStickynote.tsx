import {IStickyNote} from '@shared/interfaces/stickynote.interface';
import * as React from 'react';

interface IStickyNoteSave {
    note: IStickyNote | any;
    saveStickynote: (note: IStickyNote | any) => void;
}
const AddStickynote = ({saveStickynote}: IStickyNoteSave) => {
    const [note, setNote] = React.useState<IStickyNote>({
        text: '',
        id: 0,
    });

    const handleStickynoteData = (e: React.FormEvent<HTMLInputElement>) => {
        setNote({
            ...note,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const addNewStickyNnote = (e: React.FormEvent) => {
        e.preventDefault();
        saveStickynote(note);
        setNote({id: 0, text: ''});
    };

    return (
        <form onSubmit={addNewStickyNnote}>
            <input
                value={note?.text}
                id="text"
                placeholder="Write note here"
                type="text"
                onChange={handleStickynoteData}
            />
            <button disabled={!note.text}>Add Sticky Note</button>
        </form>
    );
};

export default AddStickynote;
