import Head from "next/head";
import Link from "next/link";
import { Home as HomeIcon } from "@navikt/ds-icons";
import { Heading } from "@navikt/ds-react";
import Subsumsjoner from "../components/subsumsjoner";
import Søknad from "../containers/søknad";
import useSwr from 'swr'
const fetcher = (url) => fetch(url, { method: 'POST' }).then((res) => res.json())

export default function Quiz() {
  const { data, error } = useSwr(`${process.env.NEXT_PUBLIC_API_URL}/soknad`, fetcher)

  if (!data) return <div>Laster...</div>
  if (error) return <div>Kunne ikke opprette søknad</div>

  return (
    <div className="root">
      <Head>
        <title>Pop quiz!</title>
      </Head>

      <section>
        <div className="fo">
          <HomeIcon style={{ height: "20px" }} />
          <Heading level="1" size="2xlarge">Søknad om dagpenger</Heading>
        </div>
      </section>

      <main>

        <Søknad id={data.uuid} />
        <Subsumsjoner søknadId={data.uuid} />

        <Link href="/">Tilbake</Link>
      </main>
    </div>
  );
}
