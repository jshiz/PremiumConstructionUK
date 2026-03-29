import { MetadataRoute } from 'next';

const DOMAIN = 'https://premiumconstruction.uk';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: DOMAIN, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${DOMAIN}/services/whole-house`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${DOMAIN}/services/extensions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${DOMAIN}/services/kitchen-bathroom`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${DOMAIN}/services/electrical`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${DOMAIN}/services/gas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${DOMAIN}/services/solar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${DOMAIN}/primestone`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${DOMAIN}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${DOMAIN}/legal/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${DOMAIN}/legal/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${DOMAIN}/legal/accessibility`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${DOMAIN}/legal/cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    ];
}
