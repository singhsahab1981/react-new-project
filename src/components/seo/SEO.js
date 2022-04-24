import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import Helmet from "react-helmet";

const SEO = (props) => {
  return (
      <StaticQuery 
        query={query}
        render={({
            site:{
                siteMetadata:{
                    defaultTitle,
                    defaultDescription,
                    defaultKeywords,
                    defaultImage,
                    url
                }
            }
        }) => {
            const seo= {
                title: props.title || defaultTitle,
                description: props.description || defaultDescription,
                keywords: props.keywords || defaultKeywords,
                image: props.image ? props.image : url+defaultImage
            }
            return(
                <Helmet>
                    <title>{seo.title}</title>
                    <meta name='description' content={seo.description} />
                    <meta name="keywords" content={seo.keywords} />
                    <meta name="image" content={seo.image} />
                </Helmet>
            )
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
        defaultImage: image
        url
      }
    }
  }
`