import { Detail, Heading } from "@navikt/ds-react";
import React from "react";
import { Dokumentkrav } from "../components/dokumentkrav/Dokumentkrav";
import { useSanity } from "../context/sanity-context";
import { IDokumentkravListe } from "../types/documentation.types";

interface IProps {
  dokumentasjonskrav: IDokumentkravListe;
}

export function Dokumentasjonskrav(props: IProps) {
  const { getAppTekst } = useSanity();
  const { dokumentasjonskrav } = props;
  return (
    <>
      <Heading level="2" size="medium">
        Dokumentasjon
      </Heading>
      {dokumentasjonskrav.krav.map((krav, index) => {
        return (
          <div key={index}>
            <Detail key={`${krav.id}-detail`}>
              {index + 1} {getAppTekst("dokumentkrav.nummer.av.krav")}{" "}
              {dokumentasjonskrav.krav.length}
            </Detail>
            <Dokumentkrav key={krav.id} dokumentkrav={krav} />
          </div>
        );
      })}
    </>
  );
}
