import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'




export const client = createClient({
  projectId,       // Using the imported projectId
  dataset,         // Using the imported dataset
  apiVersion,      // Using the imported apiVersion
  useCdn: true,     // Set to false for dynamic content, or true for static
  token: process.env.SANITY_TOKEN,  // Your Sanity API token
});

export default client;