import Cors from "cors";
import sendgrid from "@sendgrid/mail";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  if (req.method === "POST") {
    const requestBody = req.body;
    console.log(requestBody);
    const msg = {
      to: "jon@infoverse.ai",
      from: "jon@infoverse.ai",
      subject: requestBody.subject,
      text: requestBody.message,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>From: ${requestBody.email}</h3>
              <div style="font-size: 16px;">
              <p>Subject: ${requestBody.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${requestBody.message}</p>
              <br>
              </div>
              </div>
              </div>
      </body>
      </html>`,
    };

    try {
      await sendgrid.send(msg);
    } catch (error) {
      console.error(error);
      return res
        .status(error.statusCode || 500)
        .json({ status: error.statusCode, message: error.message });
    }

    res.status(200).json({
      status: "OK",
      message: `Email sent successfully, ${requestBody.name}!`,
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;
