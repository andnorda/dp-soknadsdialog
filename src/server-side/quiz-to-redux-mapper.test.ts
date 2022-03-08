import { QuizPrimitiveFaktum, QuizGeneratorFaktum } from "../types/quiz.types";
import { mapQuizFaktaToReduxState } from "./quiz-to-redux-mapper";
import { FAKTUM_ARBEIDSFORHOLD } from "../constants";

const booleanInput: QuizPrimitiveFaktum = {
  id: "1",
  type: "boolean",
  beskrivendeId: "faktum.dummy-boolean",
  svar: true,
};

const intInput: QuizPrimitiveFaktum = {
  id: "2",
  type: "int",
  beskrivendeId: "faktum.dummy-int",
  svar: 40,
};

const doubleInput: QuizPrimitiveFaktum = {
  id: "3",
  type: "double",
  beskrivendeId: "faktum.dummy-double",
  svar: 40.0,
};

const envalgInput: QuizPrimitiveFaktum = {
  id: "4",
  type: "envalg",
  beskrivendeId: "faktum.dummy-envalg",
  svar: "faktum.dummy-envalg.svar",
};

const flervalgInput: QuizPrimitiveFaktum = {
  id: "5",
  type: "flervalg",
  beskrivendeId: "faktum.dummy-flervalg",
  svar: ["faktum.dummy-flervalg.svar.en", "faktum.dummy-flervalg.svar.to"],
};

const booleanExpected = {
  id: "1",
  textId: "faktum.dummy-boolean",
  type: "boolean",
  value: "faktum.dummy-boolean.svar.ja",
};

const intExpected = {
  id: "2",
  textId: "faktum.dummy-int",
  type: "int",
  value: 40,
};

const doubleExpected = {
  id: "3",
  textId: "faktum.dummy-double",
  type: "double",
  value: 40.0,
};

const envalgExpected = {
  id: "4",
  textId: "faktum.dummy-envalg",
  type: "envalg",
  value: "faktum.dummy-envalg.svar",
};

const flervalgExpected = {
  id: "5",
  textId: "faktum.dummy-flervalg",
  type: "flervalg",
  value: ["faktum.dummy-flervalg.svar.en", "faktum.dummy-flervalg.svar.to"],
};

describe("mapFaktaToAnswers", () => {
  test("maps boolean faktum", () => {
    const expected = {
      answers: [booleanExpected],
      generators: [],
    };
    expect(mapQuizFaktaToReduxState([booleanInput])).toEqual(expected);
  });

  test("maps int faktum", () => {
    const expected = {
      answers: [intExpected],
      generators: [],
    };
    expect(mapQuizFaktaToReduxState([intInput])).toEqual(expected);
  });

  test("maps double faktum", () => {
    const expected = {
      answers: [doubleExpected],
      generators: [],
    };
    expect(mapQuizFaktaToReduxState([doubleInput])).toEqual(expected);
  });

  test("maps envalg faktum", () => {
    const expected = {
      answers: [envalgExpected],
      generators: [],
    };
    expect(mapQuizFaktaToReduxState([envalgInput])).toEqual(expected);
  });

  test("maps flervalg faktum", () => {
    const expected = {
      answers: [flervalgExpected],
      generators: [],
    };
    expect(mapQuizFaktaToReduxState([flervalgInput])).toEqual(expected);
  });

  test("ignores faktum without answer", () => {
    const input: QuizPrimitiveFaktum[] = [
      {
        id: "6",
        type: "flervalg",
        beskrivendeId: "faktum.dummy-flervalg",
      },
    ];
    expect(mapQuizFaktaToReduxState(input)).toEqual({ answers: [], generators: [] });
  });

  test("map arbeidsforhold generator faktum to answer", () => {
    const generatorInput: QuizGeneratorFaktum[] = [
      {
        id: "7",
        beskrivendeId: FAKTUM_ARBEIDSFORHOLD,
        type: "generator",
        svar: [[booleanInput, intInput, doubleInput, envalgInput, flervalgInput]],
        templates: [],
      },
    ];

    const expected = {
      id: "7",
      textId: FAKTUM_ARBEIDSFORHOLD,
      type: "generator",
      answers: [[booleanExpected, intExpected, doubleExpected, envalgExpected, flervalgExpected]],
    };

    expect(mapQuizFaktaToReduxState(generatorInput)).toEqual({
      answers: [],
      generators: [expected],
    });
  });
});
