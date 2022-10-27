import { NextApiRequest, NextApiResponse } from "next";
import { audienceDPSoknad } from "../../../../api.utils";
import { getSoknadState } from "../../quiz-api";
import { withSentry } from "@sentry/nextjs";
import { mockNeste } from "../../../../localhost-data/mock-neste";
import metrics from "../../../../metrics";
import { getSession } from "../../../../auth.utils";

async function nesteHandler(req: NextApiRequest, res: NextApiResponse) {
  if (process.env.NEXT_PUBLIC_LOCALHOST) {
    return res.status(200).json(mockNeste);
  }

  const session = await getSession(req);
  const uuid = req.query.uuid as string;
  const sistLagret = req.query.sistLagret as string | undefined;

  if (!session) {
    return res.status(401).end();
  }

  try {
    const measureTokenExchange = metrics.tokenExchangeDurationHistogram.startTimer();
    const onBehalfOfToken = await session.apiToken(audienceDPSoknad);
    measureTokenExchange();

    const measureNeste = metrics.backendApiDurationHistogram.startTimer({ path: "neste" });
    const soknadStateResponse = await getSoknadState(uuid, onBehalfOfToken, sistLagret);
    measureNeste();

    if (!soknadStateResponse.ok) {
      // TODO Should be logged to sentry, but it does not effect user so we do not throw error here
      // eslint-disable-next-line no-console
      throw new Error("Feil ved henting av soknadstate fra dp-soknad");
    }

    const soknadState = await soknadStateResponse.json();
    return res.status(soknadStateResponse.status).send(soknadState);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export default withSentry(nesteHandler);
