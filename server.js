import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const distServer = path.join(__dirname, 'dist', 'server.cjs');

// If the production bundle doesn't exist yet, run npm run build
if (!fs.existsSync(distServer)) {
  console.log('[Hostinger Startup] Production bundle not found. Building application...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('[Hostinger Startup] Build completed successfully.');
  } catch (err) {
    console.error('[Hostinger Startup] Build failed:', err);
    process.exit(1);
  }
}

// Synchronously launch the compiled production server (avoids top-level await issues on Hostinger)
console.log('[Hostinger Startup] Launching production server from dist/server.cjs...');
require(distServer);

