#!/bin/sh
set -e

echo "Injecting runtime environment variables..."

echo $VITE_TIME_UPDATE_COMPLETE
# Produce Env.js at run time
envsubst '$VITE_TIME_UPDATE_COMPLETE' < /app/env.js.template > /app/env.js

exec nginx -g "daemon off;"
