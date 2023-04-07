import AWS from "aws-sdk/clients/s3";
import { v4 as uuidv4 } from "uuid";

const s3 = new AWS({
  accessKeyId: process.env.AWS_ACCESS_KEY_ENV,
  secretAccessKey: process.env.AWS_SECRET_KEY_ENV,
  region: process.env.AWS_REGION,
});

export async function uploadFileToS3(file: string) {
  const base64Data = Buffer.from(
    file.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const key: string | undefined = uuidv4();

  const params = {
    Bucket: process.env.AWS_BUCKET || "",
    Key: key,
    Body: base64Data,
    ContentEncoding: "base64",
    ContentType: `image/png`,
  };

  return s3.upload(params).promise();
}
