

exports.handler = async (event) => {
    const body = {
        message: "September 1, 2018 to September 30, 2018"
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    };
    return response;
  };
