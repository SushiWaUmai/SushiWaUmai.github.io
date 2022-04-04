import Head from "next/head";

interface HeadTagsProps {}

const HeadTags: React.FC<HeadTagsProps> = () => {
  return (
    <Head>
      <title>Eugene Matsumura</title>
      <link rel="icon" href="/images/Sushi.png" />
      {/* SEO */}
      <meta name="description" content="Eugene Matsumura's Portfolio" />
      <meta
        name="keywords"
        content="Eugene Matsumura, Portfolio, SushiWaUmai"
      />
      <meta name="author" content="Eugene Matsumura" />
      <meta name="copyright" content="Eugene Matsumura" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 day" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Open Graph */}
      <meta property="og:title" content="Eugene Matsumura" />
      <meta property="og:description" content="Eugene Matsumura's Portfolio" />
      <meta property="og:image" content="/images/Sushi.png" />
      <meta property="og:url" content="https://sushiwaumai.github.io" />
      <meta property="og:site_name" content="Eugene Matsumura" />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Eugene Matsumura" />
      <meta name="twitter:description" content="Eugene Matsumura's Portfolio" />
      <meta name="twitter:image" content="/images/Sushi.png" />
      <meta name="twitter:url" content="https://sushiwaumai.github.io" />
      <meta name="twitter:site" content="@EugeneMatsumur1" />
      <meta name="twitter:creator" content="@EugeneMatsumur1" />
    </Head>
  );
};

export default HeadTags;
