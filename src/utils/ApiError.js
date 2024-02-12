//  this is an xtra class that we can use to handle api  errors in our application this si basically handling api error format and we can use this class to handle the error in our application
class ApiError extends Error {
  constructor(statusCode, message = "Something Went Wrong", errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null; //must read from documentation
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export default ApiError;
