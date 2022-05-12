FROM golang:1.18-alpine as builder
WORKDIR /app
COPY *.go ./
RUN go build main.go

FROM scratch
WORKDIR /app
COPY --from=builder /app ./
CMD [ "./main" ]