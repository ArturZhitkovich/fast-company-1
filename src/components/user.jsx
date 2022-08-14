import { React, useState, useEffect } from "react";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";
import Loader from "./loader";

const User = ({ id }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    const handleBack = () => {
        history.push("/users");
    };

    return user ? (
        <div className="d-flex justify-content-center">
            <div>
                <h2>{user.name}</h2>
                <p>{`Профессия: ${user.profession.name}`}</p>
                <p>
                    <QualitiesList qualities={user.qualities} />
                </p>
                <p>{`Встретился раз: ${user.completedMeetings}`}</p>
                <p>{`Оценка: ${user.rate}`}</p>
                <button
                    onClick={() => handleBack()}
                    className="btn btn-primary"
                >
                    Все пользователи
                </button>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default User;
