import { Alert } from "@navikt/ds-react";
import { logger } from "@navikt/next-logger";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next/types";
import { getErrorDetails } from "../../../utils/api.utils";
import { getSoknadOnBehalfOfToken } from "../../../utils/auth.utils";
import { DokumentkravProvider } from "../../../context/dokumentkrav-context";
import { IDokumentkravList } from "../../../types/documentation.types";
import { Ettersending } from "../../../views/ettersending/Ettersending";
import { getDokumentkrav } from "../../api/documentation/[uuid]";
import { mockDokumentkravBesvart } from "../../../localhost-data/mock-dokumentkrav-besvart";

interface IProps {
  errorCode: number | null;
  dokumentkrav: IDokumentkravList | null;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IProps>> {
  const { query, locale } = context;
  const uuid = query.uuid as string;

  if (process.env.USE_MOCKS === "true") {
    return {
      props: {
        dokumentkrav: mockDokumentkravBesvart as IDokumentkravList,
        errorCode: null,
      },
    };
  }

  let errorCode = null;
  let dokumentkrav = null;
  const onBehalfOf = await getSoknadOnBehalfOfToken(context.req);
  if (!onBehalfOf.ok) {
    return {
      redirect: {
        destination: locale ? `/oauth2/login?locale=${locale}` : "/oauth2/login",
        permanent: false,
      },
    };
  }
  const dokumentkravResponse = await getDokumentkrav(uuid, onBehalfOf.token);

  if (!dokumentkravResponse.ok) {
    const errorData = await getErrorDetails(dokumentkravResponse);
    logger.error(
      `Ettersending: ${errorData.status} error in dokumentkravList - ${errorData.detail}`
    );
    errorCode = dokumentkravResponse.status;
  } else {
    dokumentkrav = await dokumentkravResponse.json();
  }

  return {
    props: {
      dokumentkrav,
      errorCode,
    },
  };
}

export default function EttersendingPage(props: IProps) {
  const { dokumentkrav } = props;

  if (!dokumentkrav) {
    return <Alert variant="info">Ingen dokumentasjonskrav tilgjengelig på søknaden</Alert>;
  }

  return (
    <DokumentkravProvider initialState={dokumentkrav}>
      <Ettersending />
    </DokumentkravProvider>
  );
}
