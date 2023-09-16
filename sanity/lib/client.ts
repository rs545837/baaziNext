import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk2TlUTUWOTzkeBA9C8KIwYnw8sX9BygNxMUxV8225iSZ61ZoMrt4CcodCYDfqN61yP5Us5IKanP9nQTTXPnvMf1qXr3AraaJFD2aETF01r6m7UkZ1WnyrxI1Rq6NWBPtYDnK0tLmp2Ci1LDSGT5OTBHeDSe12E29AJAztBmqsVmshyBMvaA"
})
