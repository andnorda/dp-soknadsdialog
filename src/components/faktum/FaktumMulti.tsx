import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import React, { useEffect, useState } from "react";
import { IFaktum } from "./Faktum";

export function FaktumMulti(props: IFaktum) {
  const [answer, setAnswer] = useState<string[]>([]);

  useEffect(() => {
    console.log("Ny verdi: ", answer);
  }, [answer]);

  function onChange(value: string[]) {
    setAnswer(value);
  }

  return (
    <div>
      <CheckboxGroup legend={props.title} onChange={onChange}>
        {props.answerOptions?.map((answer) => (
          <Checkbox key={answer._id} value={answer._id}>
            {answer.text ? answer.text : answer._id}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
