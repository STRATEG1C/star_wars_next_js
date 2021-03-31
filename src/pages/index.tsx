import React, { useCallback, useEffect, useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { AppContext } from '../context';
import { DEFAULT_NUMBER_OF_POSTS } from '../constants';
import { loadPosts } from '../api/posts';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PostList from '../components/PostsList';

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ postList }) => {
    const [posts, setPosts] = useState([]);
    const [quantityOfPosts, setQuantityOfPosts] = useState(DEFAULT_NUMBER_OF_POSTS);

    useEffect(() => {
        setPosts(postList)
    }, [postList]);

    useEffect(() => {
        loadNewPosts();
    }, [quantityOfPosts]);

    const loadNewPosts = async () => {
        const posts = await loadPosts(quantityOfPosts);
        setPosts(prev => posts);
    }

    const onRemovePost = useCallback((idx: number) => {
        setPosts(prev => {
            prev.splice(idx, 1);
            return [ ...prev ];
        });
    }, [setPosts]);

    const onChangeQuantityOfPosts = useCallback((e: React.SyntheticEvent<HTMLSelectElement>) => {
       setQuantityOfPosts(e.target.value);
    }, [setQuantityOfPosts]);

    if (!postList) {
        return (
            <PageWrapper title="Star Wars">
                <Header />
                Loading...
            </PageWrapper>
        )
    }

    return (
        <AppContext.Provider value={{
            posts,
            resetPosts: () => loadNewPosts()
        }}>
            <PageWrapper title="Star Wars">
                <Header />
                <p className="mt-10 ml-5">
                    <label htmlFor="posts-quantity">Posts quantity:&nbsp;</label>
                    <select
                        name="posts-quantity"
                        value={quantityOfPosts}
                        onChange={onChangeQuantityOfPosts}
                    >
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                    </select>
                </p>
                <div className="mt-10">
                    <PostList
                        posts={ posts }
                        onRemovePost={onRemovePost}
                    />
                </div>
            </PageWrapper>
        </AppContext.Provider>
    );
};

export default Home;

export const getStaticProps = async () => {
    const postList = await loadPosts(DEFAULT_NUMBER_OF_POSTS);

    return {
        props: {
            postList,
        }
    }
}
