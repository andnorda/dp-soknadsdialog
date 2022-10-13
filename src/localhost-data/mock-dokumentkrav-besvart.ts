export const mockDokumentkravBesvart = {
  soknad_uuid: "8fbff721-73d7-456b-bba6-63916a122488",
  krav: [
    {
      id: "7002",
      beskrivendeId:
        "faktum.dokument-avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd-dokumentasjon",
      fakta: [
        {
          id: "7001",
          svar: true,
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd.svar.ja",
            "faktum.avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd.svar.nei",
          ],
          beskrivendeId: "faktum.avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd",
          sannsynliggjoresAv: [
            {
              id: "7002",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId:
                "faktum.dokument-avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd-dokumentasjon",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      svar: "dokumentkrav.svar.send.naa",
    },
    {
      id: "8057.2",
      beskrivendeId: "faktum.dokument-timelister",
      fakta: [
        {
          id: "8045.2",
          svar: true,
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.arbeidsforhold.rotasjon.svar.ja",
            "faktum.arbeidsforhold.rotasjon.svar.nei",
          ],
          beskrivendeId: "faktum.arbeidsforhold.rotasjon",
          sannsynliggjoresAv: [
            {
              id: "8057.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-timelister",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "Sendt forrige gang",
      svar: "dokumentkrav.svar.sendt.tidligere",
    },
    {
      id: "2004",
      beskrivendeId: "faktum.dokument-utdanning-sluttdato",
      fakta: [
        {
          id: "2002",
          svar: true,
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.avsluttet-utdanning-siste-6-mnd.svar.ja",
            "faktum.avsluttet-utdanning-siste-6-mnd.svar.nei",
          ],
          beskrivendeId: "faktum.avsluttet-utdanning-siste-6-mnd",
          sannsynliggjoresAv: [
            {
              id: "2004",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-utdanning-sluttdato",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "Har itte",
      svar: "dokumentkrav.svar.sender.ikke",
    },
    {
      id: "13",
      beskrivendeId: "faktum.dokument-alle-typer-bekreftelse-fra-relevant-fagpersonell",
      fakta: [
        {
          id: "8",
          svar: false,
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: ["faktum.alle-typer-arbeid.svar.ja", "faktum.alle-typer-arbeid.svar.nei"],
          beskrivendeId: "faktum.alle-typer-arbeid",
          sannsynliggjoresAv: [
            {
              id: "13",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-alle-typer-bekreftelse-fra-relevant-fagpersonell",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [
        {
          filnavn: "test.jpeg",
          filsti: "8fbff721-73d7-456b-bba6-63916a122488/13/6379f309-1f19-438d-bd0f-1c3c54ade7aa",
          urn: "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/13/6379f309-1f19-438d-bd0f-1c3c54ade7aa",
          storrelse: 525924,
          tidspunkt: "2022-10-11T17:16:22.747544+02:00",
        },
      ],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      svar: "dokumentkrav.svar.send.naa",
      bundle:
        "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/43aef3e9-1af9-4254-921b-7cb31acbb29f",
      bundleFilsti: "8fbff721-73d7-456b-bba6-63916a122488/43aef3e9-1af9-4254-921b-7cb31acbb29f",
    },
    {
      id: "11",
      beskrivendeId: "faktum.dokument-fulltid-bekreftelse-fra-relevant-fagpersonell",
      fakta: [
        {
          id: "2",
          svar: ["faktum.kun-deltid-aarsak.svar.redusert-helse"],
          type: "flervalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.kun-deltid-aarsak.svar.redusert-helse",
            "faktum.kun-deltid-aarsak.svar.omsorg-baby",
            "faktum.kun-deltid-aarsak.svar.eneansvar-barn",
            "faktum.kun-deltid-aarsak.svar.omsorg-barn-spesielle-behov",
            "faktum.kun-deltid-aarsak.svar.skift-turnus",
            "faktum.kun-deltid-aarsak.svar.har-fylt-60",
            "faktum.kun-deltid-aarsak.svar.annen-situasjon",
          ],
          beskrivendeId: "faktum.kun-deltid-aarsak",
          sannsynliggjoresAv: [
            {
              id: "11",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-fulltid-bekreftelse-fra-relevant-fagpersonell",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "jepp",
      svar: "dokumentkrav.svar.send.senere",
    },
    {
      id: "8056.1",
      beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
      fakta: [
        {
          id: "8006.1",
          svar: "faktum.arbeidsforhold.endret.svar.redusert-arbeidstid",
          type: "envalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.arbeidsforhold.endret.svar.ikke-endret",
            "faktum.arbeidsforhold.endret.svar.avskjediget",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-av-arbeidsgiver",
            "faktum.arbeidsforhold.endret.svar.arbeidsgiver-konkurs",
            "faktum.arbeidsforhold.endret.svar.kontrakt-utgaatt",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-selv",
            "faktum.arbeidsforhold.endret.svar.redusert-arbeidstid",
            "faktum.arbeidsforhold.endret.svar.permittert",
          ],
          beskrivendeId: "faktum.arbeidsforhold.endret",
          sannsynliggjoresAv: [
            {
              id: "8055.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-arbeidsavtale",
              sannsynliggjoresAv: [],
            },
            {
              id: "8056.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      svar: "dokumentkrav.svar.send.naa",
      bundle:
        "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/d36aadae-1939-4754-818e-2acd74e5b836",
      bundleFilsti: "8fbff721-73d7-456b-bba6-63916a122488/d36aadae-1939-4754-818e-2acd74e5b836",
    },
    {
      id: "8055.1",
      beskrivendeId: "faktum.dokument-arbeidsavtale",
      fakta: [
        {
          id: "8006.1",
          svar: "faktum.arbeidsforhold.endret.svar.redusert-arbeidstid",
          type: "envalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.arbeidsforhold.endret.svar.ikke-endret",
            "faktum.arbeidsforhold.endret.svar.avskjediget",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-av-arbeidsgiver",
            "faktum.arbeidsforhold.endret.svar.arbeidsgiver-konkurs",
            "faktum.arbeidsforhold.endret.svar.kontrakt-utgaatt",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-selv",
            "faktum.arbeidsforhold.endret.svar.redusert-arbeidstid",
            "faktum.arbeidsforhold.endret.svar.permittert",
          ],
          beskrivendeId: "faktum.arbeidsforhold.endret",
          sannsynliggjoresAv: [
            {
              id: "8055.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-arbeidsavtale",
              sannsynliggjoresAv: [],
            },
            {
              id: "8056.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [
        {
          filnavn: "test.jpeg",
          filsti:
            "8fbff721-73d7-456b-bba6-63916a122488/8055.1/9db288c3-40e9-45f8-90e7-c0fb31366657",
          urn: "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/8055.1/9db288c3-40e9-45f8-90e7-c0fb31366657",
          storrelse: 525924,
          tidspunkt: "2022-10-12T08:40:03.489318+02:00",
        },
      ],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      svar: "dokumentkrav.svar.send.naa",
      bundle:
        "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/7abb4554-5aac-401d-915a-1f938a9e964f",
      bundleFilsti: "8fbff721-73d7-456b-bba6-63916a122488/7abb4554-5aac-401d-915a-1f938a9e964f",
    },
    {
      id: "1014.1",
      beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
      fakta: [
        {
          id: "1002.1",
          svar: "Frans",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-fornavn-mellomnavn",
          sannsynliggjoresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
        {
          id: "1003.1",
          svar: "Hans",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-etternavn",
          sannsynliggjoresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
        {
          id: "1004.1",
          svar: "2022-09-01",
          type: "localdate",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-foedselsdato",
          sannsynliggjoresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
        {
          id: "1005.1",
          svar: "NOR",
          type: "land",
          roller: ["søker"],
          grupper: [],
          readOnly: false,
          gyldigeLand: [
            "AFG",
            "ALB",
            "DZA",
            "ASM",
            "AND",
            "AGO",
            "AIA",
            "ATA",
            "ATG",
            "ARG",
            "ARM",
            "ABW",
            "AZE",
            "AUS",
            "BHS",
            "BHR",
            "BGD",
            "BRB",
            "BEL",
            "BLZ",
            "BEN",
            "BMU",
            "BTN",
            "BOL",
            "BES",
            "BIH",
            "BWA",
            "BVT",
            "BRA",
            "BRN",
            "BGR",
            "BFA",
            "BDI",
            "CAN",
            "CYM",
            "CHL",
            "CXR",
            "COL",
            "COK",
            "CRI",
            "CUB",
            "CUW",
            "DNK",
            "ARE",
            "ATF",
            "PSE",
            "DOM",
            "CAF",
            "IOT",
            "DJI",
            "DMA",
            "ECU",
            "EGY",
            "GNQ",
            "CIV",
            "SLV",
            "ERI",
            "EST",
            "ETH",
            "FLK",
            "FJI",
            "PHL",
            "FIN",
            "FRA",
            "GUF",
            "PYF",
            "FRO",
            "GAB",
            "GMB",
            "GEO",
            "GHA",
            "GIB",
            "GRD",
            "GRL",
            "GLP",
            "GUM",
            "GTM",
            "GGY",
            "GIN",
            "GNB",
            "GUY",
            "HTI",
            "HMD",
            "GRC",
            "HND",
            "HKG",
            "BLR",
            "IND",
            "IDN",
            "IRQ",
            "IRN",
            "IRL",
            "ISL",
            "ISR",
            "ITA",
            "JAM",
            "JPN",
            "YEM",
            "JEY",
            "VIR",
            "VGB",
            "JOR",
            "KHM",
            "CMR",
            "CPV",
            "KAZ",
            "KEN",
            "CHN",
            "KGZ",
            "KIR",
            "CCK",
            "COM",
            "COD",
            "COG",
            "HRV",
            "KWT",
            "CYP",
            "LAO",
            "LVA",
            "LSO",
            "LBN",
            "LBR",
            "LBY",
            "LIE",
            "LTU",
            "LUX",
            "MAC",
            "MDG",
            "MKD",
            "MWI",
            "MYS",
            "MDV",
            "MLI",
            "MLT",
            "IMN",
            "MAR",
            "MHL",
            "MTQ",
            "MRT",
            "MUS",
            "MYT",
            "MEX",
            "FSM",
            "MDA",
            "MCO",
            "MNG",
            "MNE",
            "MSR",
            "MOZ",
            "MMR",
            "NAM",
            "NRU",
            "NPL",
            "NLD",
            "NZL",
            "NIC",
            "NER",
            "NGA",
            "NIU",
            "PRK",
            "MNP",
            "NFK",
            "NOR",
            "NCL",
            "OMN",
            "PAK",
            "PLW",
            "PAN",
            "PNG",
            "PRY",
            "PER",
            "PCN",
            "POL",
            "PRT",
            "PRI",
            "QAT",
            "REU",
            "ROU",
            "RUS",
            "RWA",
            "BLM",
            "SHN",
            "KNA",
            "LCA",
            "MAF",
            "SPM",
            "VCT",
            "SLB",
            "WSM",
            "SMR",
            "STP",
            "SAU",
            "SEN",
            "SRB",
            "SYC",
            "SLE",
            "SGP",
            "SXM",
            "SVK",
            "SVN",
            "SOM",
            "ESP",
            "LKA",
            "GBR",
            "SDN",
            "SUR",
            "SJM",
            "CHE",
            "SWE",
            "SWZ",
            "SYR",
            "ZAF",
            "SGS",
            "KOR",
            "SSD",
            "TJK",
            "TWN",
            "TZA",
            "THA",
            "TGO",
            "TKL",
            "TON",
            "TTO",
            "TCD",
            "CZE",
            "TUN",
            "TKM",
            "TCA",
            "TUV",
            "TUR",
            "DEU",
            "UGA",
            "UKR",
            "HUN",
            "URY",
            "USA",
            "UMI",
            "UZB",
            "VUT",
            "VAT",
            "VEN",
            "ESH",
            "VNM",
            "WLF",
            "ZMB",
            "ZWE",
            "AUT",
            "TLS",
            "ALA",
          ],
          beskrivendeId: "faktum.barn-statsborgerskap",
          sannsynliggjoresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "jau",
      svar: "dokumentkrav.svar.sendt.tidligere",
    },
    {
      id: "8056.2",
      beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
      fakta: [
        {
          id: "8006.2",
          svar: "faktum.arbeidsforhold.endret.svar.sagt-opp-av-arbeidsgiver",
          type: "envalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.arbeidsforhold.endret.svar.ikke-endret",
            "faktum.arbeidsforhold.endret.svar.avskjediget",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-av-arbeidsgiver",
            "faktum.arbeidsforhold.endret.svar.arbeidsgiver-konkurs",
            "faktum.arbeidsforhold.endret.svar.kontrakt-utgaatt",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-selv",
            "faktum.arbeidsforhold.endret.svar.redusert-arbeidstid",
            "faktum.arbeidsforhold.endret.svar.permittert",
          ],
          beskrivendeId: "faktum.arbeidsforhold.endret",
          sannsynliggjoresAv: [
            {
              id: "8055.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-arbeidsavtale",
              sannsynliggjoresAv: [],
            },
            {
              id: "8056.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "Sjaman",
      svar: "dokumentkrav.svar.sendt.tidligere",
    },
    {
      id: "10",
      beskrivendeId: "faktum.dokument-bekreftelse-fra-lege-eller-annen-behandler",
      fakta: [
        {
          id: "6",
          svar: ["faktum.ikke-jobbe-hele-norge.svar.redusert-helse"],
          type: "flervalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.ikke-jobbe-hele-norge.svar.redusert-helse",
            "faktum.ikke-jobbe-hele-norge.svar.omsorg-baby",
            "faktum.ikke-jobbe-hele-norge.svar.eneansvar-barn",
            "faktum.ikke-jobbe-hele-norge.svar.omsorg-barn-spesielle-behov",
            "faktum.ikke-jobbe-hele-norge.svar.skift-turnus",
            "faktum.ikke-jobbe-hele-norge.svar.har-fylt-60",
            "faktum.ikke-jobbe-hele-norge.svar.annen-situasjon",
          ],
          beskrivendeId: "faktum.ikke-jobbe-hele-norge",
          sannsynliggjoresAv: [
            {
              id: "10",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-bekreftelse-fra-lege-eller-annen-behandler",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [
        {
          filnavn: "test.jpeg",
          filsti: "8fbff721-73d7-456b-bba6-63916a122488/10/31802476-9628-4c84-a295-e31ead88be10",
          urn: "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/10/31802476-9628-4c84-a295-e31ead88be10",
          storrelse: 525924,
          tidspunkt: "2022-10-11T17:17:27.74717+02:00",
        },
        {
          filnavn: "this_is_fine.jpg",
          filsti: "8fbff721-73d7-456b-bba6-63916a122488/10/f5295304-f1a9-4b3f-bc2b-219b3f2bbe37",
          urn: "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/10/f5295304-f1a9-4b3f-bc2b-219b3f2bbe37",
          storrelse: 53072,
          tidspunkt: "2022-10-11T17:17:32.419755+02:00",
        },
      ],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      svar: "dokumentkrav.svar.send.naa",
      bundle:
        "urn:vedlegg:8fbff721-73d7-456b-bba6-63916a122488/5f47b495-acb3-4417-bbb3-bd827f144b03",
      bundleFilsti: "8fbff721-73d7-456b-bba6-63916a122488/5f47b495-acb3-4417-bbb3-bd827f144b03",
    },
    {
      id: "1014.2",
      beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
      fakta: [
        {
          id: "1002.2",
          svar: "Hest",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-fornavn-mellomnavn",
          sannsynliggjoresAv: [
            {
              id: "1014.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
        {
          id: "1003.2",
          svar: "Hale",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-etternavn",
          sannsynliggjoresAv: [
            {
              id: "1014.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
        {
          id: "1004.2",
          svar: "2022-09-22",
          type: "localdate",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-foedselsdato",
          sannsynliggjoresAv: [
            {
              id: "1014.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
        {
          id: "1005.2",
          svar: "NOR",
          type: "land",
          roller: ["søker"],
          grupper: [],
          readOnly: false,
          gyldigeLand: [
            "AFG",
            "ALB",
            "DZA",
            "ASM",
            "AND",
            "AGO",
            "AIA",
            "ATA",
            "ATG",
            "ARG",
            "ARM",
            "ABW",
            "AZE",
            "AUS",
            "BHS",
            "BHR",
            "BGD",
            "BRB",
            "BEL",
            "BLZ",
            "BEN",
            "BMU",
            "BTN",
            "BOL",
            "BES",
            "BIH",
            "BWA",
            "BVT",
            "BRA",
            "BRN",
            "BGR",
            "BFA",
            "BDI",
            "CAN",
            "CYM",
            "CHL",
            "CXR",
            "COL",
            "COK",
            "CRI",
            "CUB",
            "CUW",
            "DNK",
            "ARE",
            "ATF",
            "PSE",
            "DOM",
            "CAF",
            "IOT",
            "DJI",
            "DMA",
            "ECU",
            "EGY",
            "GNQ",
            "CIV",
            "SLV",
            "ERI",
            "EST",
            "ETH",
            "FLK",
            "FJI",
            "PHL",
            "FIN",
            "FRA",
            "GUF",
            "PYF",
            "FRO",
            "GAB",
            "GMB",
            "GEO",
            "GHA",
            "GIB",
            "GRD",
            "GRL",
            "GLP",
            "GUM",
            "GTM",
            "GGY",
            "GIN",
            "GNB",
            "GUY",
            "HTI",
            "HMD",
            "GRC",
            "HND",
            "HKG",
            "BLR",
            "IND",
            "IDN",
            "IRQ",
            "IRN",
            "IRL",
            "ISL",
            "ISR",
            "ITA",
            "JAM",
            "JPN",
            "YEM",
            "JEY",
            "VIR",
            "VGB",
            "JOR",
            "KHM",
            "CMR",
            "CPV",
            "KAZ",
            "KEN",
            "CHN",
            "KGZ",
            "KIR",
            "CCK",
            "COM",
            "COD",
            "COG",
            "HRV",
            "KWT",
            "CYP",
            "LAO",
            "LVA",
            "LSO",
            "LBN",
            "LBR",
            "LBY",
            "LIE",
            "LTU",
            "LUX",
            "MAC",
            "MDG",
            "MKD",
            "MWI",
            "MYS",
            "MDV",
            "MLI",
            "MLT",
            "IMN",
            "MAR",
            "MHL",
            "MTQ",
            "MRT",
            "MUS",
            "MYT",
            "MEX",
            "FSM",
            "MDA",
            "MCO",
            "MNG",
            "MNE",
            "MSR",
            "MOZ",
            "MMR",
            "NAM",
            "NRU",
            "NPL",
            "NLD",
            "NZL",
            "NIC",
            "NER",
            "NGA",
            "NIU",
            "PRK",
            "MNP",
            "NFK",
            "NOR",
            "NCL",
            "OMN",
            "PAK",
            "PLW",
            "PAN",
            "PNG",
            "PRY",
            "PER",
            "PCN",
            "POL",
            "PRT",
            "PRI",
            "QAT",
            "REU",
            "ROU",
            "RUS",
            "RWA",
            "BLM",
            "SHN",
            "KNA",
            "LCA",
            "MAF",
            "SPM",
            "VCT",
            "SLB",
            "WSM",
            "SMR",
            "STP",
            "SAU",
            "SEN",
            "SRB",
            "SYC",
            "SLE",
            "SGP",
            "SXM",
            "SVK",
            "SVN",
            "SOM",
            "ESP",
            "LKA",
            "GBR",
            "SDN",
            "SUR",
            "SJM",
            "CHE",
            "SWE",
            "SWZ",
            "SYR",
            "ZAF",
            "SGS",
            "KOR",
            "SSD",
            "TJK",
            "TWN",
            "TZA",
            "THA",
            "TGO",
            "TKL",
            "TON",
            "TTO",
            "TCD",
            "CZE",
            "TUN",
            "TKM",
            "TCA",
            "TUV",
            "TUR",
            "DEU",
            "UGA",
            "UKR",
            "HUN",
            "URY",
            "USA",
            "UMI",
            "UZB",
            "VUT",
            "VAT",
            "VEN",
            "ESH",
            "VNM",
            "WLF",
            "ZMB",
            "ZWE",
            "AUT",
            "TLS",
            "ALA",
          ],
          beskrivendeId: "faktum.barn-statsborgerskap",
          sannsynliggjoresAv: [
            {
              id: "1014.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "nei",
      svar: "dokumentkrav.svar.sender.ikke",
    },
    {
      id: "8055.2",
      beskrivendeId: "faktum.dokument-arbeidsavtale",
      fakta: [
        {
          id: "8006.2",
          svar: "faktum.arbeidsforhold.endret.svar.sagt-opp-av-arbeidsgiver",
          type: "envalg",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.arbeidsforhold.endret.svar.ikke-endret",
            "faktum.arbeidsforhold.endret.svar.avskjediget",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-av-arbeidsgiver",
            "faktum.arbeidsforhold.endret.svar.arbeidsgiver-konkurs",
            "faktum.arbeidsforhold.endret.svar.kontrakt-utgaatt",
            "faktum.arbeidsforhold.endret.svar.sagt-opp-selv",
            "faktum.arbeidsforhold.endret.svar.redusert-arbeidstid",
            "faktum.arbeidsforhold.endret.svar.permittert",
          ],
          beskrivendeId: "faktum.arbeidsforhold.endret",
          sannsynliggjoresAv: [
            {
              id: "8055.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-arbeidsavtale",
              sannsynliggjoresAv: [],
            },
            {
              id: "8056.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "Har ikke",
      svar: "dokumentkrav.svar.send.senere",
    },
    {
      id: "8057.1",
      beskrivendeId: "faktum.dokument-timelister",
      fakta: [
        {
          id: "8045.1",
          svar: true,
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.arbeidsforhold.rotasjon.svar.ja",
            "faktum.arbeidsforhold.rotasjon.svar.nei",
          ],
          beskrivendeId: "faktum.arbeidsforhold.rotasjon",
          sannsynliggjoresAv: [
            {
              id: "8057.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-timelister",
              sannsynliggjoresAv: [],
            },
          ],
        },
      ],
      filer: [],
      gyldigeValg: [
        "dokumentkrav.svar.send.naa",
        "dokumentkrav.svar.send.senere",
        "dokumentkrav.svar.sendt.tidligere",
        "dokumentkrav.svar.sender.ikke",
        "dokumentkrav.svar.andre.sender",
      ],
      begrunnelse: "Frank",
      svar: "dokumentkrav.svar.send.senere",
    },
  ],
};
