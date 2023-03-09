import React, { useState } from 'react';
import './LikeButton.css'

function LikeButton(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.count);

  async function handleLike() {
    // const response = await fetch('/api/like', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     item_id: props.itemId,
    //   }),
    // });
    // if (response.ok) {
    //   setIsLiked(true);
    //   setLikeCount(likeCount + 1);
    // }

    if(!isLiked) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }
  }

  return (
    <div>
      <button className='like-btn' onClick={handleLike}>
        {isLiked ? <img src='../../../assets/heart-filled-icon.svg' alt='heart' /> : <img src='../../../assets/heart-icon.svg' alt='heart' />}
        <span>{likeCount}</span>
      </button>
      
    </div>
  );
}

export default LikeButton;
