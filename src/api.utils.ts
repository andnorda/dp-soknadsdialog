export const host = process.env.SELF_URL;
export const audience = `${process.env.NAIS_CLUSTER_NAME}:teamdagpenger:dp-quizshow-api`;

export default function api(endpoint: string): string {
  return `${process.env.BASE_PATH}/api${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
}
