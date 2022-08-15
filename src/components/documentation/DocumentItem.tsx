import React, { useEffect, useState } from "react";
import { Alert, Button, Heading, Radio, RadioGroup } from "@navikt/ds-react";
import { Dokumentkrav, UploadedFile, FileState } from "../../types/documentation.types";
import { FileUploader } from "../file-uploader/FileUploader";
import { FileList } from "../file-uploader/FileList";
import api from "../../api.utils";
import { useRouter } from "next/router";
import styles from "./DocumentItem.module.css";

interface Props {
  documentItem: Dokumentkrav;
}

export function DocumentItem({ documentItem }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [answer, setAnswer] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [handledFiles, setHandlesFiles] = useState<FileState[]>([]);

  useEffect(() => {
    loadDokumentkrav();
  }, []);

  async function loadDokumentkrav() {
    setIsLoading(true);

    const url = api(`/documentation/${router.query.uuid}/${documentItem.id}`);

    const dokumentasjonskravRequest = fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        return res;
      })
      .then((res) => res.json());
    try {
      const response = await dokumentasjonskravRequest;
      setUploadedFiles(response);
      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  }

  function sendDocuments() {
    alert("TODO: Send inn svar");
  }

  //TODO: Lag logikk for når svaret er "klart", altså med filer lastet opp eller med et svar som ikke krever dokumenter
  // TODO: Spinner og error handling

  return (
    <div className={styles.documentItem}>
      {isLoading && <span>Laster</span>}
      {isError && <Alert variant="error">Det skjedde noe feil</Alert>}

      {!isLoading && !isError && (
        <>
          <Heading size="small" level="3">
            {documentItem.beskrivendeId}
          </Heading>

          <RadioGroup legend="Velg hva du vil gjøre" onChange={setAnswer} value={answer}>
            <Radio value="upload_now">Laste opp nå</Radio>
            <Radio value="upload_later">Laste opp senere</Radio>
            <Radio value="somebody_else_sends">Noen andre sender dokumentet</Radio>
            <Radio value="already_sent">Har sendt tidligere</Radio>
            <Radio value="will_not_send">Sender ikke</Radio>
          </RadioGroup>

          {answer === "upload_now" && (
            <>
              <FileUploader id={documentItem.id} onHandle={setHandlesFiles} />
              <FileList previouslyUploaded={uploadedFiles} handledFiles={handledFiles} />
            </>
          )}
          {answer !== "" && <Button onClick={sendDocuments}>Send inn</Button>}
        </>
      )}
    </div>
  );
}
