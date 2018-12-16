import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = (props) => {
    return (
        <div className="container">
            <h4 className="center">
                About
             </h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem laboriosam eveniet assumenda,
                reprehenderit quo numquam adipisci provident sed ad libero ea. Accusantium sit earum perferendis iusto
                quod rerum adipisci est.</p>
        </div>
    );
}

export default Rainbow(About);