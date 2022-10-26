import { mockDokumentkravList } from "../../../../localhost-data/dokumentkrav-list";
import { NextApiRequest, NextApiResponse } from "next";
import { audienceDPSoknad } from "../../../../api.utils";
import { withSentry } from "@sentry/nextjs";
import { headersWithToken } from "../../quiz-api";
import { getSession } from "../../../../auth.utils";

export function getDokumentkrav(uuid: string, onBehalfOfToken: string) {
  return fetch(`${process.env.API_BASE_URL}/soknad/${uuid}/dokumentasjonskrav`, {
    method: "Get",
    headers: headersWithToken(onBehalfOfToken),
  });
}

async function dokumentkravHandler(req: NextApiRequest, res: NextApiResponse) {
  if (process.env.NEXT_PUBLIC_LOCALHOST) {
    return res.status(200).json(mockDokumentkravList);
  }

  const { token, apiToken } = await getSession(req);

  if (!token || !apiToken) {
    return res.status(401).end();
  }

  const uuid = req.query.uuid as string;
  const onBehalfOfToken = await apiToken(audienceDPSoknad);

  try {
    const dokumentkravResponse = await getDokumentkrav(uuid, onBehalfOfToken);
    if (!dokumentkravResponse.ok) {
      throw new Error(dokumentkravResponse.statusText);
    }

    const dokumentkrav = await dokumentkravResponse.json();
    return res.status(dokumentkravResponse.status).send(dokumentkrav);
  } catch (error: unknown) {
    return res.status(500).send(error);
  }
}

export default withSentry(dokumentkravHandler);
