import React, { useCallback } from 'react';
import { IPost } from '../types';
import { API_RANDOM_IMAGE } from '../../../constants';

type Props = {
    idx: number,
    post: IPost,
    onRemove(idx): void
}


const Post: React.FC<Props> = ({ idx, post, onRemove }) => {
    const onRemoveHandler = useCallback((idx) => onRemove(idx), [idx, onRemove]);

    return (
        <article className="post my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="w-full flex justify-between">
                <div className="flex">
                    <div className="rounded-full h-10 w-10 bg-gray-500 flex items-center justify-between overflow-hidden">
                        <img src={post.author.avatar} alt="profilepic" />
                    </div>
                    <div>
                        <p className="post__author-name ml-2 font-bold text-sm">{post.author.name}</p>
                        <p className="post__author-info ml-2 font-light text-sm">
                            {post.author.specie},&nbsp;
                            {post.author.home}
                        </p>
                    </div>
                </div>
                <button onClick={onRemoveHandler}>Remove</button>
            </div>
            <img className="w-full bg-cover mt-6 rounded" src={`${API_RANDOM_IMAGE}/600/400`} />
        </article>
    );
}

export default Post;
