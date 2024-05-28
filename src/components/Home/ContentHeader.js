import React from 'react';
import { BiSearch, BiNotification } from "react-icons/bi";
import "../../styles/Content.css";

function ContentHeader() {
    return (
        <div className="Content--header" >
            <h1 className="Content--title">Kilani-Entreprise</h1>
            <div className="header--activity">
                <div className="search--box">
                    <input type="text" placeholder="search anything here..." />
                    <BiSearch className="icon" />
                </div>
                <div className="notify">
                    <BiNotification className="icon" />
                </div>
            </div>
        </div>
    );
}

export default ContentHeader;
