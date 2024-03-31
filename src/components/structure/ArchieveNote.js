import React, { useEffect, useState } from 'react';
import { deleteNote, unarchiveNote, getArchivedNotes } from '../../utils/network-data';
import NoteListArchived from '../notes/NoteListArchived';
import SearchBar from './SearchBar';
import { useSearchParams } from 'react-router-dom';

const ArchivedNote = () => {
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
        await deleteNote(id);

        getData();
    };

    const onUnArchivedNoteHandler = async (id) => {
        await unarchiveNote(id);

        getData();
    };

    const getData = async () => {
        const {data} = await getArchivedNotes();
        setNotes(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="body">
            <SearchBar title={title} changeSearchParams={changeSearchParams}/>
            <NoteListArchived
                notes={notesResult}
                onDelete={onDeleteHandler}
                onArchived={onUnArchivedNoteHandler}
            />
        </div>
    );
};

export default ArchivedNote;