export const mockDokumentkravBesvart = {
  soknad_uuid: "ab92f972-2527-45bf-a56a-264a0dd29392",
  krav: [
    {
      id: "8060.2",
      beskrivendeId: "faktum.dokument-permitteringsvarsel",
      fakta: [
        {
          id: "8006.2",
          svar: "faktum.arbeidsforhold.endret.svar.permittert",
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
          sannsynliggjøresAv: [
            {
              id: "8060.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-permitteringsvarsel",
              sannsynliggjøresAv: [],
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
        "urn:vedlegg:ab92f972-2527-45bf-a56a-264a0dd29392/bc1aeefd-86bd-46ae-ab20-dce51827db5b",
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
          sannsynliggjøresAv: [
            {
              id: "8057.2",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-timelister",
              sannsynliggjøresAv: [],
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
      begrunnelse: "Må få det av arbeidsgiver",
      svar: "dokumentkrav.svar.send.senere",
      bundle: "null",
    },
    {
      id: "7002",
      beskrivendeId: "faktum.avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd-dokumentasjon",
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
          sannsynliggjøresAv: [
            {
              id: "7002",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId:
                "faktum.avtjent-militaer-sivilforsvar-tjeneste-siste-12-mnd-dokumentasjon",
              sannsynliggjøresAv: [],
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
      begrunnelse: "Sendte inn forrige gang",
      svar: "dokumentkrav.svar.sendt.tidligere",
      bundle: "null",
    },
    {
      id: "3016",
      beskrivendeId: "faktum.dokumentasjon-oversikt-over-arbeidstimer",
      fakta: [
        {
          id: "3001",
          svar: true,
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.driver-du-egen-naering.svar.ja",
            "faktum.driver-du-egen-naering.svar.nei",
          ],
          beskrivendeId: "faktum.driver-du-egen-naering",
          sannsynliggjøresAv: [
            {
              id: "3016",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokumentasjon-oversikt-over-arbeidstimer",
              sannsynliggjøresAv: [],
            },
          ],
        },
        {
          id: "3006",
          type: "boolean",
          roller: ["søker"],
          readOnly: false,
          gyldigeValg: [
            "faktum.driver-du-eget-gaardsbruk.svar.ja",
            "faktum.driver-du-eget-gaardsbruk.svar.nei",
          ],
          beskrivendeId: "faktum.driver-du-eget-gaardsbruk",
          sannsynliggjøresAv: [
            {
              id: "3016",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokumentasjon-oversikt-over-arbeidstimer",
              sannsynliggjøresAv: [],
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
      begrunnelse: "Arbeidsgiver sender for meg håper jeg.",
      svar: "dokumentkrav.svar.andre.sender",
      bundle: "null",
    },
    {
      id: "1014.1",
      beskrivendeId: "faktum.dokumentasjon-foedselsattest-bostedsbevis-for-barn-under-18aar",
      fakta: [
        {
          id: "1002.1",
          svar: "Hans",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-fornavn-mellomnavn",
          sannsynliggjøresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId:
                "faktum.dokumentasjon-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjøresAv: [],
            },
          ],
        },
        {
          id: "1003.1",
          svar: "Frans",
          type: "tekst",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-etternavn",
          sannsynliggjøresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId:
                "faktum.dokumentasjon-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjøresAv: [],
            },
          ],
        },
        {
          id: "1004.1",
          svar: "2022-06-01",
          type: "localdate",
          roller: ["søker"],
          readOnly: false,
          beskrivendeId: "faktum.barn-foedselsdato",
          sannsynliggjøresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId:
                "faktum.dokumentasjon-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjøresAv: [],
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
          sannsynliggjøresAv: [
            {
              id: "1014.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId:
                "faktum.dokumentasjon-foedselsattest-bostedsbevis-for-barn-under-18aar",
              sannsynliggjøresAv: [],
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
      begrunnelse: "Bikkja spiste opp",
      svar: "dokumentkrav.svar.sender.ikke",
      bundle: "null",
    },
    {
      id: "8055.1",
      beskrivendeId: "faktum.dokument-arbeidsavtale",
      fakta: [
        {
          id: "8006.1",
          svar: "faktum.arbeidsforhold.endret.svar.avskjediget",
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
          sannsynliggjøresAv: [
            {
              id: "8055.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-arbeidsavtale",
              sannsynliggjøresAv: [],
            },
            {
              id: "8056.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
              sannsynliggjøresAv: [],
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
      begrunnelse: "Må få kontrakt",
      svar: "dokumentkrav.svar.send.senere",
      bundle: "null",
    },
    {
      id: "8056.1",
      beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
      fakta: [
        {
          id: "8006.1",
          svar: "faktum.arbeidsforhold.endret.svar.avskjediget",
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
          sannsynliggjøresAv: [
            {
              id: "8055.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-arbeidsavtale",
              sannsynliggjøresAv: [],
            },
            {
              id: "8056.1",
              type: "dokument",
              roller: ["søker"],
              readOnly: true,
              beskrivendeId: "faktum.dokument-dokumentasjon-av-arbeidsforhold",
              sannsynliggjøresAv: [],
            },
          ],
        },
      ],
      filer: [
        {
          filnavn: "20220927_104734.jpg",
          filsti:
            "ab92f972-2527-45bf-a56a-264a0dd29392/8056.1/bd72398c-c7b8-4e7a-ad65-a3dbf47713aa",
          urn: "urn:vedlegg:ab92f972-2527-45bf-a56a-264a0dd29392/8056.1/bd72398c-c7b8-4e7a-ad65-a3dbf47713aa",
          storrelse: 225897,
          tidspunkt: "2022-10-03T13:54:14.268616+02:00",
        },
        {
          filnavn: "20220927_094513.jpg",
          filsti:
            "ab92f972-2527-45bf-a56a-264a0dd29392/8056.1/de2cdb7d-7e31-41d5-a1f9-15a7cfbe396a",
          urn: "urn:vedlegg:ab92f972-2527-45bf-a56a-264a0dd29392/8056.1/de2cdb7d-7e31-41d5-a1f9-15a7cfbe396a",
          storrelse: 526646,
          tidspunkt: "2022-10-03T13:54:06.016323+02:00",
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
        "urn:vedlegg:ab92f972-2527-45bf-a56a-264a0dd29392/6164f8ce-ef80-4c52-9dd4-4acf68c7eac3",
    },
  ],
};
