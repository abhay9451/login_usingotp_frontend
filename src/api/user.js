
export const generateotp = async ({ email } = {}) => {
  try {
    // The data you want to send in the request body
    const requestData = { email };


    const response = await fetch(`${process.env.REACT_APP_API_URL}/generateotp`, {   
      method: "POST",
      // credentials: "include",
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(requestData),
    });

    // Handle the response accordingly
    console.log(response.data);

    // You might return the response data if needed
    return response.data;

  } catch (error) {

    console.error('Error during OTP generation:', error.message);

  }
};


export const register = async ({ Contect, email, password, otp } = {}) => {
  const user = { Contect, email, password, otp };

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(user),

    });

    return await res.json();

  } catch (err) {
    throw new Error(`cannot register at this time ${err}`);
  }
};

export const login = async ({ email, password } = {}) => {
  const user = { email, password };

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return  await res.json();

  } catch (err) {
    throw new Error(`cannot login at this time ${err}`);
  }
};

export const logout = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method : "GET",
      Credentials: "include",

    });
    return await res.json();
  } catch (err) {
    console.log(err);

  }
};