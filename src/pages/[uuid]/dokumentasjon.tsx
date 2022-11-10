import React from "react";
import { Documentation } from "../../views/documentation/Documentation";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next/types";
import { QuizProvider } from "../../context/quiz-context";
import { audienceDPSoknad } from "../../api.utils";
import { getSoknadState } from "../api/quiz-api";
import { getDokumentkrav } from "../api/documentation/[uuid]";
import { Alert } from "@navikt/ds-react";
import { IDokumentkravList } from "../../types/documentation.types";
import { mockDokumentkravList } from "../../localhost-data/dokumentkrav-list";
import { mockNeste } from "../../localhost-data/mock-neste";
import { IQuizState } from "../../types/quiz.types";
import { getSession } from "../../auth.utils";

interface IProps {
  errorCode: number | null;
  soknadState: IQuizState | null;
  dokumentkrav: IDokumentkravList | null;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IProps>> {
  const { query, locale } = context;
  const uuid = query.uuid as string;

  if (process.env.NEXT_PUBLIC_LOCALHOST) {
    return {
      props: {
        soknadState: mockNeste,
        dokumentkrav: mockDokumentkravList as IDokumentkravList,
        errorCode: null,
      },
    };
  }

  const session = await getSession(context.req);
  if (!session) {
    return {
      redirect: {
        destination: locale ? `/oauth2/login?locale=${locale}` : "/oauth2/login",
        permanent: false,
      },
    };
  }

  let errorCode = null;
  let soknadState = null;
  let dokumentkrav = null;
  const onBehalfOfToken = await session.apiToken(audienceDPSoknad);
  const soknadStateResponse = await getSoknadState(uuid, onBehalfOfToken);
  const dokumentkravResponse = await getDokumentkrav(uuid, onBehalfOfToken);

  if (!dokumentkravResponse.ok) {
    errorCode = dokumentkravResponse.status;
  } else {
    dokumentkrav = await dokumentkravResponse.json();
  }

  if (dokumentkrav?.length === 0) {
    return {
      redirect: {
        destination: `/${uuid}/oppsummering`,
        permanent: false,
      },
    };
  }

  if (!soknadStateResponse.ok) {
    errorCode = soknadStateResponse.status;
  } else {
    soknadState = await soknadStateResponse.json();
  }

  return {
    props: {
      soknadState,
      dokumentkrav,
      errorCode,
    },
  };
}

export default function DocumentPage(props: IProps) {
  if (!props.soknadState) {
    return <Alert variant="error">Quiz er ducked</Alert>;
  }

  if (!props.dokumentkrav) {
    return <Alert variant="info">Ingen dokumentasjonskrav tilgjengelig på søknaden</Alert>;
  }

  return (
    <QuizProvider initialState={props.soknadState}>
      <Documentation dokumentkravList={props.dokumentkrav} />
    </QuizProvider>
  );
}
