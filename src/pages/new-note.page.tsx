import AddStickynote from '@components/routing-task/AddStickynote';
import {IStickyNote} from '@shared/interfaces/stickynote.interface';
import {addStickynote} from '@store/actions/stickynote.action';
import React, {Dispatch} from 'react';
import {useDispatch} from 'react-redux';

const NewNotePage = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const saveStickynote = (note: IStickyNote) => dispatch(addStickynote(note));

    return (
        <div>
            <h1>Add new sticky note:</h1>
            <AddStickynote saveStickynote={saveStickynote} note={undefined} />
        </div>
    );
};

export default NewNotePage;
