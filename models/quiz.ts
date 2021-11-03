export namespace Quiz {

    export enum Rolle {
        SØKER = "søker",
        NAV = "nav",
        SAKSBEHANDLER = "saksbehandler"
    }

    export enum DataType {
        BOOLEAN = "boolean",
        INT = "int",
        DOUBLE = "double",
        STRING = "string",
        LOCALDATE = "localdate",
        DOKUMENT = "dokument"
    }

    export interface Faktum {
        readonly navn: string;
        readonly id: string;
        readonly roller: Rolle[];
        readonly dataType?: DataType;
        readonly godkjenner?: any[]; // Referanse til en annen node i regeltreet.
        svar: any;
    }

    export interface Subsumsjon {
        readonly lokalt_resultat?: boolean;
        readonly navn: string;
        readonly subsumsjoner?: Subsumsjon[];
        fakta?: string[];
    }
}