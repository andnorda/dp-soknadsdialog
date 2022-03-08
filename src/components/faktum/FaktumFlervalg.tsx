import React from "react";
import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import { IValgFaktum } from "../../types/faktum.types";
import { Faktum, FaktumProps } from "./Faktum";
import { PortableText } from "@portabletext/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./Faktum.module.css";

export function FaktumFlervalg(props: FaktumProps<IValgFaktum>) {
  const { faktum, onChange } = props;
  const answers = useSelector((state: RootState) => props.answers || state.answers);
  // const currentAnswer = answers.find((answer) => answer.beskrivendeId === faktum.beskrivendeId);
  const currentAnswerIds =
    (answers.find((answer) => answer.textId === faktum.textId)?.value as string[]) ?? [];

  const onSelection = (value: string[]) => {
    onChange && onChange(faktum, value);
  };

  return (
    <div>
      {faktum.description && <PortableText value={faktum.description} />}
      {faktum.helpText && <p>{faktum.helpText}</p>}
      {faktum.alertText && <p>{faktum.alertText}</p>}

      <CheckboxGroup
        legend={faktum.title ? faktum.title : faktum.textId}
        onChange={onSelection}
        value={currentAnswerIds}
      >
        {/*{currentAnswer?.loading && <Loader variant="neutral" size="small" title="venter..." />}*/}
        {faktum.answerOptions.map((answer) => (
          <Checkbox key={answer.textId} value={answer.textId}>
            {answer.title ? answer.title : answer.textId}
          </Checkbox>
        ))}
      </CheckboxGroup>

      {/*{currentAnswer?.errorMessages.map((errorMessage, index) => (*/}
      {/*  <div key={index}> Error: {errorMessage} </div>*/}
      {/*))}*/}

      {faktum.subFaktum && faktum.subFaktum.length > 0 && (
        <div className={styles["sub-faktum"]}>
          {faktum.subFaktum.map((faktum) => {
            if (faktum.requiredAnswerIds.find((a) => currentAnswerIds.includes(a.textId))) {
              return (
                <Faktum
                  key={faktum.textId}
                  faktum={faktum}
                  onChange={onChange}
                  answers={props.answers}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
