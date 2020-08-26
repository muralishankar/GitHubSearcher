import React from 'react';
import * as _ from "lodash";
import './userSearchResult.css';

export default function UserSearchResult(props) {
    let { items } = props;
    if (items.length === 0) {
        return <div className="not-found">No User Found</div>
    }
    return items.map((item) => {
        return <div key={_.get(item, "id")} className="user-item-container">
            <div className="profile-avatar"><img src={_.get(item, "avatar_url")} style={{ width: 100, height: 100 }} alt="logo" /></div>
            <div className="profile-details"><div title={_.get(item, "login")} className="profile-name">{_.get(item, "login")}</div>
                <div className="profile-link">
                    <form action={_.get(item, "html_url")}>
                        <input type="submit" style={{
                            height: "30px",
                            width: "80px"
                        }} value="Profile" />
                    </form>
                </div>
            </div>
        </div>
    })

}