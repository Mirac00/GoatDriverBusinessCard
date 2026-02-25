import { siteData } from '@/data/data';
import { HomeClient } from '@/components/HomeClient';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GOATDRIVER - Maciej Kozieł',
    image: 'https://goatdriver.pl/logo.png',
    '@id': 'https://goatdriver.pl',
    url: 'https://goatdriver.pl',
    telephone: siteData.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.contact.address.street,
      addressLocality: 'Warszawa',
      postalCode: '00-000',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.2297,
      longitude: 21.0122,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient siteData={siteData} />
    </main>
  );
}
