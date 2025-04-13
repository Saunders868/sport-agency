import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getAboutPage() {
  const getPageQuery = groq`*[_type == 'page'][slug == 'about'][0] {
    title,
    slug,
    'hero': pageBuilder[][_type == 'hero'][0] {
        'heroImage': image.asset->url,
        heading,
        cta,
        subTitle,
    },
    'history': pageBuilder[][_type == 'history'][0] {
        heading,
        tagline,
        'history': ourHistory[] {
            excerpt,
            heading
        }
    }
  }`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}

export async function getFitnessPage() {
  const getPageQuery = groq`*[_type == 'page'][slug == 'fitness'][0] {
        title,
        slug,
        'hero': pageBuilder[][_type == 'hero'][0] {
            'heroVideo': video.asset->url,
            heading,
            cta,
            subTitle,
        },
        'sectionHighlight':pageBuilder[][_type == "textWithIllustration"][0]{
            heading,
            tagline
        },
        'facilities':pageBuilder[][_type == "facilities"][0]{
            heading,
            tagline,
            'ourFacilities':ourFacilities[]{
                cta, 
                'image': image.asset-> url,
                tagline,
                heading,
                excerpt
            }
        },
    }`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
