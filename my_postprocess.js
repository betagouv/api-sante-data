import { unZipFromFile, unZipFromURL } from 'https://deno.land/x/flat@0.0.10/mod.ts' // replace with latest library https://deno.land/x/flat@0.0.x/mod.ts

const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`

// zip from a local file
// (zip file, destination path)
const result = await unZipFromFile('filename', './unzipped')
const output = result ? 'File unzipped successfully' : 'Error unzipping'
console.log(output)
