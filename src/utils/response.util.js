class ResponseUtil {
    static Success(data = null, message = 'Operation successful') {
        return {
            success: true,
            status_code: 200,
            message: message,
            data: data,
        };
    }

    static Error(message = 'Internal server error', status_code = 500) {
        return {
            success: false,
            status_code: status_code,
            message: message,
            data: null,
        };
    }
  }
  
  module.exports = ResponseUtil;