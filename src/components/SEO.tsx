import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description: string
  keywords: string[]
  canonical: string
  image: string
  structuredData?: Array<Record<string, unknown>>
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image,
  structuredData = [],
}: SEOProps) {
  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-NG" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Blorbmart" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blorbmart" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Blorbmart campus marketplace for students in Nigeria" />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structuredData.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  )
}
