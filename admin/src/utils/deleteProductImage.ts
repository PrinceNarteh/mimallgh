import crypto from "crypto";
import axios from "axios";

const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

export const deleteProductImage = async (publicId: string) => {
  const cloudName = "prinart";
  const timestamp = new Date().getTime();
  const apiKey = "178383658495781";
  const apiSecret = "qrlNOEHVZAMGnLvxp-4rrOMDLzw";
  const signature = generateSHA1(generateSignature(publicId, apiSecret));
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  const response = await axios.post(url, {
    public_id: publicId,
    signature: signature,
    api_key: apiKey,
    timestamp: timestamp,
  });
};
