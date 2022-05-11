import React from "react";
import { Accordion, Button } from "@navikt/ds-react";
import { Answer } from "../../store/answers.slice";
import { GeneratorFakta } from "../generator-fakta/GeneratorFakta";
import { FAKTUM_BARNETILLEGG } from "../../constants";
import { useGeneratorStateAnswers } from "../../hooks/useGeneratorStateAnswers";
import { useGeneratorState } from "../../hooks/useGeneratorState";
import { QuizGeneratorFaktum } from "../../types/quiz.types";

export function Barnetillegg(faktum: QuizGeneratorFaktum) {
  const barnetillegg = useGeneratorStateAnswers(FAKTUM_BARNETILLEGG);
  const { activeIndex, addNewList, toggleActiveList, isNewList, resetState, saveList, deleteList } =
    useGeneratorState();

  function handleSaveBarnetillegg(answers: Answer[]) {
    saveList(answers, faktum.beskrivendeId);
  }

  return (
    <div>
      <Accordion>
        {barnetillegg.map((answers, index) => (
          <Accordion.Item key={index} open={index === activeIndex}>
            <Accordion.Header onClick={() => toggleActiveList(index)}>
              {getChildName(answers)}
            </Accordion.Header>

            <Accordion.Content>
              <Button onClick={() => deleteList(faktum.beskrivendeId)}>Slett barn</Button>
              <GeneratorFakta
                answers={answers}
                fakta={faktum.templates}
                save={handleSaveBarnetillegg}
                cancel={resetState}
              />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>

      {!isNewList && (
        <Button onClick={() => addNewList(barnetillegg.length)}>Legg til barnetillegg</Button>
      )}

      {isNewList && (
        <GeneratorFakta
          fakta={faktum.templates}
          save={handleSaveBarnetillegg}
          cancel={resetState}
        />
      )}
    </div>
  );
}

function getChildName(barnetillegg: Answer[]): string {
  const firstName = barnetillegg.find(
    (answer) => answer.textId === "faktum.barn-fornavn-mellomnavn"
  )?.value as string;

  const lastName = barnetillegg.find((answer) => answer.textId === "faktum.barn-etternavn")
    ?.value as string;

  return `${firstName} ${lastName}`;
}
