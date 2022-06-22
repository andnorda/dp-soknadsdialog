import React from "react";
import { Accordion, Button } from "@navikt/ds-react";
import { useGeneratorUtils } from "../../hooks/useGeneratorUtils";
import { QuizFaktum, QuizGeneratorFaktum } from "../../types/quiz.types";
import { Faktum, FaktumProps } from "../faktum/Faktum";
import { Delete } from "@navikt/ds-icons";

export function Arbeidsforhold(props: FaktumProps<QuizGeneratorFaktum>) {
  const { addNewGeneratorAnswer, deleteGeneratorAnswer, toggleActiveGeneratorAnswer, activeIndex } =
    useGeneratorUtils();

  return (
    <>
      {props.faktum?.svar?.map((faktum, svarIndex) => {
        return (
          <Accordion key={svarIndex}>
            <Accordion.Item open={activeIndex === svarIndex}>
              <Accordion.Header onClick={() => toggleActiveGeneratorAnswer(svarIndex)}>
                {getArbeidsforholdName(faktum)}
              </Accordion.Header>

              <Accordion.Content>
                {faktum.map((faktum) => (
                  <Faktum key={faktum.id} faktum={faktum} readonly={props.readonly} />
                ))}

                {!props.readonly && (
                  <Button
                    variant="danger"
                    onClick={() => deleteGeneratorAnswer(props.faktum, svarIndex)}
                  >
                    <Delete />
                    Fjern dette arbeidsforholdet
                  </Button>
                )}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        );
      })}

      {!props.readonly && (
        <Button variant="secondary" onClick={() => addNewGeneratorAnswer(props.faktum)}>
          Legg til arbeidsforhold
        </Button>
      )}
    </>
  );
}

export function getArbeidsforholdName(arbeidsforhold: QuizFaktum[]): string {
  return (
    (arbeidsforhold.find((answer) => answer.beskrivendeId === "faktum.arbeidsforhold.navn-bedrift")
      ?.svar as string) ?? "Fant ikke navn på arbeidsgiver"
  );
}
