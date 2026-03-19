#!/bin/bash
# Use Node 22 from Homebrew (avoids esbuild error -88 on Node 24)
NODE22="/usr/local/opt/node@22/bin"
[[ -d "/opt/homebrew/opt/node@22/bin" ]] && NODE22="/opt/homebrew/opt/node@22/bin"
export PATH="$NODE22:$PATH"
exec "$@"
