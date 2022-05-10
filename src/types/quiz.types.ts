import {
  GeneratorFaktumType,
  LandFaktumType,
  PrimitivFaktumType,
  ValgFaktumType,
} from "./faktum.types";

export type QuizFaktumSvar = string | string[] | boolean | number;
export type QuizFaktum = QuizPrimitiveFaktum | QuizValgFaktum | QuizGeneratorFaktum;

export interface QuizBaseFaktum {
  id: string;
  beskrivendeId: string;
}

export interface QuizValgFaktum extends QuizBaseFaktum {
  svar: string;
  type: ValgFaktumType;
  gyldigeValg: string[];
}

export interface QuizPrimitiveFaktum extends QuizBaseFaktum {
  type: PrimitivFaktumType | ValgFaktumType | LandFaktumType;
  svar?: QuizFaktumSvar;
}

export interface QuizGeneratorFaktum extends QuizBaseFaktum {
  type: GeneratorFaktumType;
  svar?: QuizPrimitiveFaktum[][];
  templates: QuizGeneratorTemplate[];
}

interface QuizGeneratorTemplate {
  id: string;
  type: PrimitivFaktumType | ValgFaktumType | LandFaktumType;
  beskrivendeId: string;
}

export interface QuizSeksjon {
  beskrivendeId: string;
  fakta: QuizFaktum[];
}

export interface QuizAnswer {
  id: string;
  beskrivendeId: string;
  type: string;
  svar: QuizAnswerValue;
}

export type QuizAnswerValue = string | string[] | number | boolean | QuizAnswerPeriod | undefined;

export interface QuizAnswerPeriod {
  fom: string;
  tom?: string;
}
