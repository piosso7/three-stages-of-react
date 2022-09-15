import React from 'react';
import StickyNotesList from '@pages/notes-list.page';
import NewNotePage from '@pages/new-note.page';
import {Switch, Route, useRouteMatch} from 'react-router';
import {Redirect} from 'react-router-dom';

const StickyNotesRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}/new-note`} />
            </Route>
            <Route path={`${path}/new-note`}>
                <NewNotePage />
            </Route>
            <Route path={`${path}/notes-list`}>
                <StickyNotesList />
            </Route>
        </Switch>
    );
};

export default StickyNotesRouter;
