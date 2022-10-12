import React, { useEffect, useState } from "react";
import { BodyShort, Label, TextField } from "@navikt/ds-react";
import { IFaktum } from "./Faktum";
import { PortableText } from "@portabletext/react";
import { useDebouncedCallback } from "../../hooks/useDebouncedCallback";
import { IQuizTekstFaktum } from "../../types/quiz.types";
import { useQuiz } from "../../context/quiz-context";
import { useSanity } from "../../context/sanity-context";
import { HelpText } from "../HelpText";
import styles from "./Faktum.module.css";
import { isValidTextLength } from "./validations";
import { useValidation } from "../../context/validation-context";

export function FaktumText(props: IFaktum<IQuizTekstFaktum>) {
  const { faktum, onChange } = props;
  const { saveFaktumToQuiz } = useQuiz();
  const { unansweredFaktum } = useValidation();
  const { getAppTekst } = useSanity();
  const faktumTexts = useSanity().getFaktumTextById(props.faktum.beskrivendeId);

  const [debouncedText, setDebouncedText] = useState(faktum.svar || "");
  const [isValid, setIsValid] = useState(true);

  const debouncedChange = useDebouncedCallback(setDebouncedText, 500);

  useEffect(() => {
    if (debouncedText && debouncedText !== faktum.svar) {
      onChange ? onChange(faktum, debouncedText) : saveFaktum(debouncedText);
    }
  }, [debouncedText]);

  function saveFaktum(value: string) {
    if (isValidTextLength(value)) {
      setIsValid(true);
      saveFaktumToQuiz(faktum, value);
    } else {
      setIsValid(false);
    }
  }

  if (props.faktum.readOnly || props.readonly) {
    return (
      <>
        <Label>{faktumTexts ? faktumTexts.text : faktum.beskrivendeId}</Label>
        <BodyShort>{debouncedText}</BodyShort>
      </>
    );
  }

  function getErrorMessage() {
    if (unansweredFaktum?.beskrivendeId === faktum.beskrivendeId) {
      return getAppTekst("validering.ubesvart-faktum.varsel-tekst");
    } else if (!isValid) {
      return faktumTexts?.errorMessage ?? getAppTekst("validering.text-too-long");
    } else {
      return undefined;
    }
  }

  return (
    <>
      <TextField
        defaultValue={faktum?.svar}
        label={faktumTexts?.text ? faktumTexts.text : faktum.beskrivendeId}
        description={faktumTexts?.description && <PortableText value={faktumTexts.description} />}
        size="medium"
        type="text"
        onChange={(event) => debouncedChange(event.currentTarget.value)}
        onBlur={debouncedChange.flush}
        error={getErrorMessage()}
      />
      {faktumTexts?.helpText && (
        <HelpText className={styles.helpTextSpacing} helpText={faktumTexts.helpText} />
      )}
    </>
  );
}
