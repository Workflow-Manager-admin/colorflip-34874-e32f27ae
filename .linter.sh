#!/bin/bash
cd /home/kavia/workspace/code-generation/colorflip-34874-e32f27ae/colorflip_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

