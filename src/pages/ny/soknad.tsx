import { sanityClient } from "../../../sanity-client";
import { fetchAllSeksjoner } from "../../sanity/groq-queries";
import { GetStaticPropsResult } from "next";
import { MockDataSeksjon } from "../../soknad-fakta/soknad";
import { ISeksjon, Seksjon } from "../../components/seksjon/Seksjon";

export interface QuizSoknad {
  seksjoner: MockDataSeksjon[]; // Denne skal være quiz faktum med svar
}
export interface Soknad {
  sections: ISeksjon[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Soknad>> {
  // Denne skal fetche quiz faktum med svar
  const soknad: QuizSoknad = await fetch(`http://localhost:3000/api/ny/soknad`).then((data) => {
    return data.json();
  });

  if (!soknad) {
    console.error("Fikk ingen soknad fra API");
    return { notFound: true };
  }

  const sectionIds = soknad.seksjoner.map((section) => section.id);
  const sanitySections = await sanityClient.fetch<ISeksjon[]>(fetchAllSeksjoner, {
    ids: sectionIds,
  });

  if (sanitySections.length <= 0) {
    console.error("Fant ikke seksjon i sanity");
    return { notFound: true };
  }

  return {
    props: { sections: sanitySections },
    revalidate: 120,
  };
}

export default function Soknad(props: Soknad) {
  return <Seksjon {...props.sections[0]} />;
}
