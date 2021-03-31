import React from 'react';

import { IPost } from './types';

import Post from './Post';

type Props = {
    posts: IPost[],
    onRemovePost(idx): void
}

const PostList: React.FC<Props> = ({ posts, onRemovePost }) => {
    return (
        <div className="post-list flex flex-wrap">
            {posts.map((post, i) => (
                <Post
                    idx={i}
                    post={post}
                    key={i}
                    onRemove={onRemovePost}
                />
            ))}
        </div>
    );
};

export default PostList;
