import React from 'react';

const Comments = ({ data }) => {
  const snippet = data?.snippet?.topLevelComment?.snippet;

  return (
    <div className='w-2/3 '>
      <h2 className='p-2 mt-2 bg-gray-100 w-1/4 rounded-full font-bold'>
        {snippet?.authorDisplayName}
      </h2>
      <h3 className='px-4 py-2'>{snippet?.textOriginal}</h3>
    </div>
  );
};

export default Comments;
