import React from 'react';
import { useParams } from 'react-router-dom';
import MdxProvider from './mdx-provider';

export default function Post() {
    const { slug } = useParams();

    // Import dynamically based on slug
    const PostComponent = React.lazy(() => import(`./posts/${slug}.mdx`));

    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <MdxProvider>
                <PostComponent />
            </MdxProvider>
        </React.Suspense>
    );
}
