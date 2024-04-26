// Article.js

import React from 'react';

function Article({ title, date, preview }) {
  const calculateReadTime = () => {
    const wordsPerMinute = 200;
    const wordCount = preview.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

  const renderReadTime = () => {
    const minutes = calculateReadTime();
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return '☕️'.repeat(cups) + ` ${minutes} min read`;
    } else {
      const boxes = Math.ceil(minutes / 10);
      return '🍱'.repeat(boxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{renderReadTime()}</small>
    </article>
  );
}

export default Article;
