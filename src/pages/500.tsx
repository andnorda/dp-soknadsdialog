import { BodyLong, Heading, Button } from "@navikt/ds-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { sanityClient } from "../../sanity-client";
import { allTextsQuery } from "../sanity/groq-queries";
import * as SentryLogger from "../sentry.logger";
import { ISanityTexts } from "../types/sanity.types";
import styles from "./500.module.css";

const fallbackErrorText = {
  title: "Vi har tekniske problemer akkurat nå",
  details:
    " Beklager, vi får ikke kontakt med systemene våre. Svarene dine er lagret og du kan prøve igjen om litt.",
};

export default function Error500() {
  const { locale } = useRouter();
  const [errorMessage, setErrorMessage] = useState(fallbackErrorText);

  useEffect(() => {
    getSanityText();
    const localStorageErrorsCount = localStorage.getItem("errorsCount");

    if (localStorageErrorsCount) {
      localStorage.removeItem("errorsCount");
    }
  }, []);

  async function getSanityText() {
    try {
      const sanityTexts = await sanityClient.fetch<ISanityTexts>(allTextsQuery, {
        baseLang: "nb",
        lang: locale,
      });

      const title = getAppTekst("teknisk-feil.helside.tittel", sanityTexts);
      const details = getAppTekst("teknisk-feil.helside.detaljer", sanityTexts);

      setErrorMessage({ title, details });
    } catch (err) {
      setErrorMessage(fallbackErrorText);
    }
  }

  function getAppTekst(textId: string, sanityText: ISanityTexts): string {
    const text =
      sanityText?.apptekster.find((apptekst) => apptekst.textId === textId)?.valueText || textId;
    if (!text) {
      SentryLogger.logMissingSanityText(textId);
    }
    return text;
  }

  function gotoDittNav() {
    window.location.assign("https://www.nav.no/minside/");
  }

  return (
    <>
      <Heading level="1" size="xlarge">
        {errorMessage.title}
      </Heading>
      <BodyLong className={styles.body}>{errorMessage.details}</BodyLong>
      <Button
        variant="primary"
        size="medium"
        onClick={() => gotoDittNav()}
        className={styles.actionButton}
      >
        Gå til Ditt NAV
      </Button>
    </>
  );
}
