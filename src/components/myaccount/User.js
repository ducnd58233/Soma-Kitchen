import React from 'react';

import '../../w3style.css';

const user = (props) => (
    <div className="w3-button w3-block w3-left-align">
        {props.name}
    </div>
)

export default user;