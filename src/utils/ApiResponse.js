class ApiResponse {
  constructor(statusCode, message = "Something Went Wrong", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode >= 200 && statusCode < 300; //it must les than 400 for this read documentation of server erros and client errors
  }
}

export default ApiResponse;
