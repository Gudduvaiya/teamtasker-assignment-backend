import { createLogger, format, transports } from "winston";

const logFormat = format.printf((params) => {
  return `${params.message} - TimeStamp - ${params.timestamp}`;
});

const logConfig = createLogger({
  level: "info",
  format: format.combine(format.combine(format.timestamp({format:"DD-MM-YYYY hh:mm"}), logFormat)),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/myProlist.log" }),
  ],
});
export default logConfig;
