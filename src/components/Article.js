import React from "react";

function Article({title, date = "January 1, 1970", preview, readingTime}){
    // const defaultDate = ;

    const getEmojis = (minutes, emoji) => {
        const emojiCount = Math.ceil(minutes / (emoji === '☕️' ? 5 : 10));
        return Array.from({ length: emojiCount }, () => emoji).join(' ');
      };
    
      const emojis =
        readingTime < 30 ? getEmojis(readingTime, '☕️') : getEmojis(readingTime, '🍱');

return (<article>
<h3>{title}</h3>
<small>{date}. {emojis} {readingTime} minutes of read</small>
<p>{preview}</p>


</article>)
}

export default Article;