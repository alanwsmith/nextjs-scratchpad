import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";
const fs = require("fs");

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  console.log(req.body);
  console.log(req.files);
  const tmp_file_path = req.files["testFile"][0].path;
  try {
    const data = fs.readFileSync(tmp_file_path);
    res.json({ dataFromFile: data.toString() });
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
