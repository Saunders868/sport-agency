import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getHomepage() {
  const getPageQuery = groq`*[_type == 'page'][slug == 'home'][0]{
        slug,
        'hero': pageBuilder[][_type == 'hero'][0] {
            'heroImage': image.asset->url,
            'heroVideo': video.asset->url,
            heading,
            cta,
            subTitle,
            tagline
        },
        'newsletter': pageBuilder[][_type == 'register'][0]{
            cta,
            heading,
            tagline
        },
        'coach': pageBuilder[][_type == 'coaches'][0]{
            heading,
            tagline,
            'coaches': ourCoaches[][_type == 'Coach'] {
                cta,
                excerpt,
                heading,
                tagline,
                'image': image.asset->url
            }
        },
        'location': pageBuilder[][_type == 'locations'][0]{
            heading,
            cta,
            tagline,
            'locations': ourLocations[][_type == 'Location'] {
                heading,
                'image': image.asset->url,
                tagline
            }
        },
        'faq': pageBuilder[][_type == 'faqs'][0]{
            heading,
            cta,
            tagline,
            'faqs': ourfaqs[][_type == 'Questions'] {
                question,
                answer
            }
        },
        'rally': pageBuilder[][_type == 'rally'][0]{
            cta,
            heading,
            'image': image.asset->url
        }
    }`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
