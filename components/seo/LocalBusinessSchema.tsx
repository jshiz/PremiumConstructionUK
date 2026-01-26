export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Premium Construction UK",
        "image": [
            "https://premiumconstruction.uk/socialsharing.jpg"
        ],
        "@id": "https://premiumconstruction.uk",
        "url": "https://premiumconstruction.uk",
        "telephone": "+447453969777",
        "sameAs": [
            "https://www.facebook.com/premiumconstructionuk/",
            "https://www.instagram.com/premiumconstruction_uk/",
            "https://share.google/kKCAifZmTPhDh4QWq"
        ],
        "priceRange": "£££",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "69 Roundhedge Way",
            "addressLocality": "Enfield",
            "postalCode": "EN2 8LD",
            "addressCountry": "UK"
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "PrimeStone Property Group"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.667586,
            "longitude": -0.108809
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
