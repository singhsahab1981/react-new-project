import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";

const SEO = (props) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { defaultTitle, defaultDescription, defaultKeywords },
        },
      }) => {
        const seo = {
          title: props.title || defaultTitle,
          descrition: props.description || defaultDescription,
          keywords: props.keywords || defaultKeywords,
        };
        return (
          <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.descrition} />
            <meta name="keywords" content={seo.keywords} />
          </Helmet>
        );
      }}
    />
  );
};

export default SEO;

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
      }
    }
  }
`;
