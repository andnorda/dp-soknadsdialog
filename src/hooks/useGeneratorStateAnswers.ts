import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Answer } from "../store/generator-utils";

export function useGeneratorStateAnswers(id: string): Answer[][] {
  return useSelector(
    (state: RootState) =>
      state.generators.find((generator) => generator.textId === id)?.answers || []
  );
}
