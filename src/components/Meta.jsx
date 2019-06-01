import React from "react";
import { Helmet } from "react-helmet";

import { BASE_URL } from "../config";

export default ({ meta, ogImage }) => (
    <Helmet>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta
            name="description"
            property="og:description"
            content={meta.description}
        />
        <meta property="og:image" content={`${BASE_URL}${ogImage.src}`} />
        <meta property="og:image:width" content={ogImage.width} />
        <meta property="og:image:height" content={ogImage.height} />
    </Helmet>
);
