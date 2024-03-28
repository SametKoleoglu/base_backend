const Enum = require("../config/Enum");
const AuditLogsModel = require("../db/models/AuditLogs");

let instance = null;

class Auditlogs {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  info( email, location, proc_type, log ) {
    this.#saveToDb({ level:Enum.LOG_LEVELS.INFO, email, location, proc_type, log });
  }
  warn( email, location, proc_type, log ) {
    this.#saveToDb({ level:Enum.LOG_LEVELS.WARN, email, location, proc_type, log });
  }
  error( email, location, proc_type, log ) {
    this.#saveToDb({ level:Enum.LOG_LEVELS.ERROR, email, location, proc_type, log });
  }
  debug( email, location, proc_type, log ) {
    this.#saveToDb({ level:Enum.LOG_LEVELS.DEBUG, email, location, proc_type, log });
  }
  verbose( email, location, proc_type, log ) {
    this.#saveToDb({ level:Enum.LOG_LEVELS.VERBOSE, email, location, proc_type, log });
  }
  http( email, location, proc_type, log ) {
    this.#saveToDb({ level:Enum.LOG_LEVELS.HTTP, email, location, proc_type, log });
  }

  //Diyez işareti ile bir nevi private konumuna aldık!!!
  #saveToDb({ level, email, location, proc_type, log }) {
    AuditLogsModel.create({ level, email, location, proc_type, log });
  }
}

module.exports = new Auditlogs();
