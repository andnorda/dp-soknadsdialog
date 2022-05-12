import React, { useState } from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import { FaktumProps } from "./Faktum";
import { PortableText } from "@portabletext/react";
import { QuizValgFaktum } from "../../types/quiz.types";
import { getFaktumSanityText } from "../../hooks/getFaktumSanityText";
import { getSvaralternativSanityText } from "../../hooks/getSvaralternativSanityText";
import { useRouter } from "next/router";
import { saveFaktumToQuiz } from "../../api/answer-service";

export function FaktumValg(props: FaktumProps<QuizValgFaktum>) {
  const { faktum, onChange } = props;
  const faktumText = getFaktumSanityText(faktum.beskrivendeId);
  const [currentAnswer, setCurrentAnswer] = useState(props.faktum.svar);
  const { uuid } = useRouter().query;

  function onSelection(value: string) {
    onChange ? onChange(faktum, value) : saveFaktum(value);
    setCurrentAnswer(value);
  }

  function saveFaktum(value: string) {
    const mappedAnswer = faktum.type === "boolean" ? mapStringToBoolean(value) : value;
    saveFaktumToQuiz(uuid as string, faktum, mappedAnswer);

    if (mappedAnswer === undefined) {
      // TODO sentry
      // eslint-disable-next-line no-console
      console.error("ERROR");
    }
  }

  return (
    <div>
      {faktumText?.description && <PortableText value={faktumText.description} />}
      {faktumText?.helpText && <p>{faktumText.helpText.title}</p>}

      <RadioGroup
        legend={faktumText ? faktumText.text : faktum.beskrivendeId}
        onChange={onSelection}
        value={currentAnswer}
      >
        {faktum.gyldigeValg.map((textId) => {
          const svaralternativText = getSvaralternativSanityText(textId);
          return (
            <div key={textId}>
              <Radio value={textId}>{svaralternativText ? svaralternativText.text : textId}</Radio>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}

function mapStringToBoolean(value: string): boolean | undefined {
  if (value.match(".*.svar.ja")) {
    return true;
  }

  if (value.match(".*.svar.nei")) {
    return false;
  }

  return undefined;
}
