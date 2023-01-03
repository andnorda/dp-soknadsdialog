import { Button, Heading, Modal } from "@navikt/ds-react";
import { forwardRef, Ref, useEffect, useRef } from "react";
import {
  ARBEIDSFORHOLD_FAKTUM_ID,
  BARN_LISTE_FAKTUM_ID,
  BARN_LISTE_REGISTER_FAKTUM_ID,
} from "../../constants";
import { useQuiz } from "../../context/quiz-context";
import { useSanity } from "../../context/sanity-context";
import { useValidation } from "../../context/validation-context";
import { useGeneratorUtils } from "../../hooks/useGeneratorUtils";
import { useScrollIntoView } from "../../hooks/useScrollIntoView";
import { useSetFocus } from "../../hooks/useSetFocus";
import { IQuizGeneratorFaktum, QuizFaktum } from "../../types/quiz.types";
import { Arbeidsforhold } from "../arbeidsforhold/Arbeidsforhold";
import { Barn } from "../barn/Barn";
import { BarnRegister } from "../barn/BarnRegister";
import { FetchIndicator } from "../fetch-indicator/FetchIndicator";
import { GeneratorFaktumCard } from "../generator-faktum-card/GeneratorFaktumCard";
import { Faktum, IFaktum } from "./Faktum";
import { ValidationMessage } from "./validation/ValidationMessage";

export function FaktumGenerator(props: IFaktum<IQuizGeneratorFaktum>) {
  const generatorFaktumRef = useRef(null);
  const { unansweredFaktumId } = useValidation();
  const { scrollIntoView } = useScrollIntoView();
  const { setFocus } = useSetFocus();

  useEffect(() => {
    if (unansweredFaktumId === props.faktum.id) {
      scrollIntoView(generatorFaktumRef);
      setFocus(generatorFaktumRef);
    }
  }, [unansweredFaktumId]);

  switch (props.faktum.beskrivendeId) {
    case ARBEIDSFORHOLD_FAKTUM_ID:
      return <Arbeidsforhold ref={generatorFaktumRef} {...props} />;
    case BARN_LISTE_REGISTER_FAKTUM_ID:
      return <BarnRegister {...props} />;
    case BARN_LISTE_FAKTUM_ID:
      return <Barn ref={generatorFaktumRef} {...props} />;
    default:
      return <StandardGenerator ref={generatorFaktumRef} {...props} />;
  }
}

const StandardGenerator = forwardRef(StandardGeneratorComponent);

function StandardGeneratorComponent(
  props: IFaktum<IQuizGeneratorFaktum>,
  ref: Ref<HTMLDivElement> | undefined
) {
  const { addNewGeneratorAnswer, deleteGeneratorAnswer, toggleActiveGeneratorAnswer, activeIndex } =
    useGeneratorUtils();
  const { isLoading } = useQuiz();
  const { unansweredFaktumId } = useValidation();
  const { getAppText } = useSanity();

  // Set active index to open modal when adding a new answer. Quiz returns an array with 1 faktum after adding a new answer.
  useEffect(() => {
    if (props.faktum?.svar) {
      const lastGeneratorAnswerIndex = props.faktum.svar.length - 1;
      const lastGeneratorAnswer = props.faktum.svar[lastGeneratorAnswerIndex];

      if (lastGeneratorAnswer?.length === 1 && !lastGeneratorAnswer[0].svar) {
        toggleActiveGeneratorAnswer(lastGeneratorAnswerIndex);
      }
    }
  }, [props.faktum?.svar]);

  return (
    <div ref={ref} tabIndex={-1} aria-invalid={unansweredFaktumId === props.faktum.id}>
      {props.faktum?.svar?.map((fakta, svarIndex) => {
        const unansweredFaktum = fakta.find((faktum) => faktum?.svar === undefined);
        const shouldShowValidationMessage = fakta.some(
          (faktum: QuizFaktum) => faktum.id === unansweredFaktumId
        );

        return (
          <div key={svarIndex}>
            <GeneratorFaktumCard
              generatorFaktumType="standard"
              allFaktumAnswered={!unansweredFaktum}
              editFaktum={() => toggleActiveGeneratorAnswer(svarIndex)}
              deleteFaktum={() => deleteGeneratorAnswer(props.faktum, svarIndex)}
              readOnly={props.readonly}
              showValidationMessage={shouldShowValidationMessage}
            >
              <Heading level={"3"} size={"small"}>
                {getStandardTitle(fakta, svarIndex)}
              </Heading>
            </GeneratorFaktumCard>

            <Modal
              shouldCloseOnOverlayClick={false}
              className="modal-container modal-container--generator"
              open={activeIndex === svarIndex}
              onClose={() => toggleActiveGeneratorAnswer(svarIndex)}
            >
              <Modal.Content>
                {fakta.map((faktum) => (
                  <Faktum key={faktum.id} faktum={faktum} readonly={props.readonly} />
                ))}

                <FetchIndicator isLoading={isLoading} />

                <div className={"modal-container__button-container"}>
                  <Button onClick={() => toggleActiveGeneratorAnswer(svarIndex)}>
                    {getAppText("soknad.generator.lagre-og-lukk-knapp")}
                  </Button>
                </div>
              </Modal.Content>
            </Modal>
          </div>
        );
      })}
      {!props.readonly && (
        <Button variant="secondary" onClick={() => addNewGeneratorAnswer(props.faktum)}>
          {getAppText("soknad.generator-faktum.knapp.legg-til")}
        </Button>
      )}

      {unansweredFaktumId === props.faktum.id && (
        <ValidationMessage message={getAppText("validering.faktum.ubesvart")} />
      )}
    </div>
  );
}

function getStandardTitle(fakta: QuizFaktum[], index: number): string {
  const fallback = `Svar ${index}`;
  const title = fakta[0]?.svar;

  switch (typeof title) {
    case "string":
      return title;
    case "number":
      return title.toString();
    default:
      return fallback;
  }
}
