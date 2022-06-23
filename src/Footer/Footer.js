import React from 'react';
import Message from '../Message/Message';
import './Footer.scss';

function Footer({ dataArray }) {
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
    })
    return (
        <div className="Footer">
            {result}
        </div>
    );
}

export default Footer;
