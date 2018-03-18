FROM          node:alpine

RUN           npm install

COPY          . .

ENTRYPOINT    ["./bin/validate"]
