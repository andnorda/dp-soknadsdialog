import React from "react";
import { Accordion, Button } from "@navikt/ds-react";
import { useGeneratorUtils } from "../../hooks/useGeneratorUtils";
import { QuizFaktum, QuizGeneratorFaktum } from "../../types/quiz.types";
import { Faktum } from "../faktum/Faktum";
import { Delete } from "@navikt/ds-icons";

export function Barn(generatorFaktum: QuizGeneratorFaktum) {
  const { addNewGeneratorAnswer, deleteGeneratorAnswer, toggleActiveGeneratorAnswer, activeIndex } =
    useGeneratorUtils();

  return (
    <>
      {generatorFaktum?.svar?.map((faktum, svarIndex) => {
        return (
          <Accordion key={svarIndex}>
            <Accordion.Item open={activeIndex === svarIndex}>
              <Accordion.Header onClick={() => toggleActiveGeneratorAnswer(svarIndex)}>
                {getChildName(faktum)}
              </Accordion.Header>

              <Accordion.Content>
                {faktum.map((faktum) => (
                  <Faktum key={faktum.id} faktum={faktum} />
                ))}

                <Button
                  variant="danger"
                  onClick={() => deleteGeneratorAnswer(generatorFaktum, svarIndex)}
                >
                  <Delete />
                  Fjern dette barnet
                </Button>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        );
      })}

      <Button variant="secondary" onClick={() => addNewGeneratorAnswer(generatorFaktum)}>
        Legg til barn
      </Button>
    </>
  );
}

function getChildName(barnetillegg: QuizFaktum[]): string {
  const firstName = barnetillegg.find(
    (svar) => svar.beskrivendeId === "faktum.barn-fornavn-mellomnavn"
  )?.svar as string;

  const lastName = barnetillegg.find((svar) => svar.beskrivendeId === "faktum.barn-etternavn")
    ?.svar as string;

  return `${firstName} ${lastName}`;
}
