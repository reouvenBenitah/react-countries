import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images importer depuis la balise img sont accesse dans "punlic" */}
            <img src="./img/logo192.png" alt="logo react" />
            <h3>React word</h3>
        </div>
    );
};

export default Logo;