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
        "telephone": "+440800000000",
        "priceRange": "£££",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pending",
            "addressLocality": "London",
            "postalCode": "Pending",
            "addressCountry": "UK"
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "PrimeStone Property Group"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5074,
            "longitude": -0.1278
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
