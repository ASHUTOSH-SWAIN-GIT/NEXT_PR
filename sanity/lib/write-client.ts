import { createClient } from "next-sanity";
import "server-only"

import { apiVersion, dataset, projectId,token } from "../env";

export const writeclient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token
});

if(!writeclient.config().token){
    throw new Error("Write token not found ")
}