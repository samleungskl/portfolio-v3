import React from 'react';
import Message from '../Message/Message';
import './Header.scss';

function Header({ dataArray }) {
    const result = dataArray.map((element) => {
        return <Message
            contentClassName={element.contentClassName}
            contentHtmlTag={element.contentHtmlTag}
            contentText={element.contentText}
            contentHref={element.contentHref}
            contentWidth={element.contentWidth}
            contentImage={element.contentImage}
            key={element.contentUid}
        />
    });
    return (
        <div className="Header">
            {result}
        </div>
    );
};

export default Header;
