import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
    h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
    // Add custom components or style overrides here
};

export default function MdxProvider({ children }) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
