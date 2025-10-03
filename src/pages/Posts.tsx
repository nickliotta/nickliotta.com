// I'm not sure how to make this more aesthetically pleasing :-)
import PageWrapper from "./PageWrapper";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

type PostMeta = {
    slug: string;
    title: string;
    date: string;
};

const Posts = () => {
    const [posts, setPosts] = useState<PostMeta[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const res = await fetch("/posts/posts.json");
                const manifest: { slug: string; file: string }[] = await res.json();

                const loadedPosts: PostMeta[] = [];

                for (const { slug, file } of manifest) {
                    const res = await fetch(`/posts/${file}`);
                    const content = await res.text();
                    const lines = content.split("\n");

                    const titleLine = lines.find((line) => line.startsWith("#")) || "";
                    const title = titleLine.replace(/^#+\s*/, "");

                    const dateLine = lines.find((line) => line.toLowerCase().startsWith("posted on")) || "";
                    const date = dateLine.replace(/posted on\s*/i, "");

                    loadedPosts.push({ slug, title, date });
                }

                setPosts(loadedPosts.reverse());
            } catch (err) {
                console.error("Error loading posts:", err);
            }
        };

        loadPosts();
    }, []);

    return (
        <PageWrapper>
            <Helmet>
                <title>Posts</title>
            </Helmet>

            <h1>Posts</h1>
            <PostList>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <PostLink to={`/posts/${post.slug}`}>
                            {post.title} – <Date>{post.date}</Date>
                        </PostLink>
                    </li>
                ))}
            </PostList>
        </PageWrapper>
    );
};

const PostList = styled.ul`
    list-style-type: disc;
    padding-left: 3rem;

    li {
        margin-bottom: 0.75rem;
    }
`;

const PostLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none !important;
    }
`;

const Date = styled.span`
    color: #ccc;
    font-size: 1rem;
`;

export default Posts;
