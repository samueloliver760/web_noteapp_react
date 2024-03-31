import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailNote from '../notes/DetailNote';
import { getNote, getUserLogged } from '../../utils/network-data';

const DetailPage = () => {
    const [note, setNote] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getDataUser = async () => {
            const { error } = await getUserLogged();

            if (error) {
                navigate('/login');
            } else {
                setIsLogin(true);
                const { data } = await getNote(id);
                setNote(data);
            }
        };
        getDataUser();
    });

    if (!isLogin) {
        return null;
    } else {
        if (!note) {
            return <p>Notes is not found!</p>;
        }
        return (
            <section>
                <DetailNote {...note} />
            </section>
        );
    }
};

export default DetailPage;
