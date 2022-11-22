export const mockGenerellInnsending = {
  "@id": "4b791697-04a8-48fa-8a31-cde134855e64",
  ferdig: true,
  seksjoner: [
    {
      fakta: [
        {
          id: "1001",
          svar: "faktum.generell-innsending.hvorfor.svar.annet",
          type: "envalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.generell-innsending.hvorfor.svar.klage",
            "faktum.generell-innsending.hvorfor.svar.ettersending",
            "faktum.generell-innsending.hvorfor.svar.endring",
            "faktum.generell-innsending.hvorfor.svar.annet",
          ],
          beskrivendeId: "faktum.generell-innsending.hvorfor",
          sannsynliggjoresAv: [],
        },
        {
          id: "1002",
          svar: "1232",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.generell-innsending.skriv-hvorfor",
          sannsynliggjoresAv: [],
        },
        {
          id: "1003",
          svar: "123",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.generell-innsending.tittel-paa-dokument",
          sannsynliggjoresAv: [
            {
              id: "1005",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.generell-innsending.dokumentasjon",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      ferdig: true,
      beskrivendeId: "generell-innsending",
    },
  ],
  "@opprettet": "2022-11-17T09:06:14.710852465",
  versjon_id: 6,
  "@event_name": "søker_oppgave",
  søknad_uuid: "7fb61b4d-b780-4a43-bc90-6124db3943fa",
  versjon_navn: "Innsending",
  fødselsnummer: "12837798289",
  "@forårsaket_av": {
    id: "1585a870-0bc5-4166-b973-24187c9e1693",
    opprettet: "2022-11-17T09:06:14.622292983",
    event_name: "faktum_svar",
  },
  antallSeksjoner: 1,
  system_read_count: 1,
  system_participating_services: [
    {
      id: "4b791697-04a8-48fa-8a31-cde134855e64",
      time: "2022-11-17T09:06:14.711382123",
      image: "ghcr.io/navikt/dp-quiz/dp-quiz-mediator:ff316ed6a304962d5815fb43105da00c48a8c224",
      service: "dp-quiz-mediator",
      instance: "dp-quiz-mediator-7df697d974-j2tkq",
    },
    {
      id: "4b791697-04a8-48fa-8a31-cde134855e64",
      time: "2022-11-17T09:06:14.715623692",
      image: "ghcr.io/navikt/dp-soknad:752afbc30c4f60ef5cd8ecaa4748507a22f8e90a",
      service: "dp-soknad",
      instance: "dp-soknad-5cfc4bd66b-tz2lw",
    },
  ],
};
