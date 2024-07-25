import React from 'react';
import Assign1 from './Assign1';

function Assignlist(props) {
    const name = "Sowji";
    const college = "svecw";
    const userobj = { name: "Sowji", college: "svecw", year: "4" };
    const users = ["sss", "ZZZZ"];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {users.map((user, index) => (
                <Assign1 
                    key={index}
                    program={name}
                    col={college}
                    user={userobj}
                    userFromArray={user}  
                />
            ))}
        </div>
    );
}

export default Assignlist;
