import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Media from "react-bootstrap/Media";

export default function InfoUsuario() {
    const { loggedUser } = useSelector((state) => state);

    return (
        <div>
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://promolab.netlify.app/Imag/User.png"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{loggedUser.name}</h5>
                    <p>{loggedUser.email}</p>

                    {loggedUser.createdAt}
                </Media.Body>
            </Media>
        </div>
    );
}
