import React from 'react';
import './Message.scss';

function Message({contentClassName, contentHtmlTag, contentText, contentHref, contentWidth, contentImage}) {
    const HtmlTag = `${contentHtmlTag}`;
  return (
    <div className="Message">
        {contentImage === undefined && <HtmlTag src={contentImage} href={contentHref} className={contentClassName} style={{width: contentWidth}}>{contentText}</HtmlTag>}
        {contentImage !== undefined && <HtmlTag src={contentImage} href={contentHref} className={contentClassName} style={{width: contentWidth}} alt={contentText}></HtmlTag>}
    </div>
  );
}

export default Message;
