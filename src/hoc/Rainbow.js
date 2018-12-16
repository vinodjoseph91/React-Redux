import React from 'react';

const Rainbow = (WrappedContent) => {

    const colors = ['red', 'green', 'blue', 'purple', 'black', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + "-text";

    return (props) => {
        return (
            <div className={className}>
                <WrappedContent />
            </div>
        );
    }

}


export default Rainbow;