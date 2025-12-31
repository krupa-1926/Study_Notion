const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "StudyNotion",
          email: "patelkrupa93281912@gmail.com",
        },
        to: [{ email }],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    console.log("✅ Email sent via Brevo API:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "❌ BREVO API ERROR:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = mailSender;
