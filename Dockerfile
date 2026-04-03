FROM oven/bun:alpine

WORKDIR /app

COPY package.json ./
RUN bun install --production

COPY bot.js ./

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD bun -e "const fs=require('fs'),t=fs.readFileSync('/tmp/health','utf8');process.exit(Date.now()-t>60000?1:0)"

CMD ["bun", "bot.js"]
