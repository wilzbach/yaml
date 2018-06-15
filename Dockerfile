FROM          node:alpine
COPY          . .
RUN           npm install
ENTRYPOINT    ["./bin/validate"]
