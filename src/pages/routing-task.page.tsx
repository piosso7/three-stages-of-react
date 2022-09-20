import StickyNotesRouter from '@router/sticky-notes.router';
import React from 'react';
import {useHistory, useRouteMatch} from 'react-router';
import './home.page.scss';
import './routing-task.page.scss';

const RoutingTaskPage = () => {
    const history = useHistory();
    const {path} = useRouteMatch();
    return (
        <div className="routing-container">
            <div className="routing-buttons">
                <button onClick={() => history.push(`${path}/new-note`)} className="routing-button">
                    Add new note page
                </button>
                <button
                    onClick={() => history.push(`${path}/notes-list`)}
                    className="routing-button">
                    Sticky notes list
                </button>
            </div>
            <StickyNotesRouter />
        </div>
    );
};

export default RoutingTaskPage;
