import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const requestBody = req.body;
  console.log(requestBody);
  const msg = {
    to: requestBody.email,
    from: "jon@infoverse.ai",
    subject: requestBody.subject,
    text: requestBody.message,
    html: `<p>${requestBody.message}</p>`,
  };

  try {
    await sendgrid.send(msg);
  } catch (error) {
    console.error(error);
    return res
      .status(error.statusCode || 500)
      .json({ status: error.statusCode, message: error.message });
  }

  res.status(200).json({ status: "OK", message: `Email sent successfully, ${requestBody.name}!` });
}

export default sendEmail;
