import React, { useEffect, useState } from 'react';
import { deleteNote, archiveNote, getActiveNotes, addNote } from '../../utils/network-data';
import { useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import AddNote from '../notes/AddNote';
import NoteList from '../notes/NoteList';

const ActiveNote = () => {
    const [notes, setNotes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title') ?? '';
    const notesResult = notes.filter((notes) => {
        return notes.title.toLowerCase().includes(title.toLowerCase());
    });

    const changeSearchParams = (title) => {
        setSearchParams({ title });
    };

    const onDeleteHandler = async (id) => {
        await deleteNote(id)
        getData();
    };

    const onArchivedNoteHandler = async (id) => {
        await archiveNote(id);

        getData();
    };

    const onSubmitEventHandler = async ({ title, body }) => {
        await addNote({ title, body });
        getData();
    };

    const getData = async () => {
        const {data} = await getActiveNotes();

        if (data) {
            return setNotes(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="body">
                <SearchBar title={title} changeSearchParams={changeSearchParams} />
                <AddNote onSubmitEventHandler={onSubmitEventHandler} />
                <NoteList
                    notes={notesResult}
                    onDelete={onDeleteHandler}
                    onArchived={onArchivedNoteHandler}
                />
            </div>
        </>
    );
};

export default ActiveNote;
