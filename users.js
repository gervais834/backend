import db from "./db.js";

const getUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");

    return res.json({ users }); // return even if empty
  } catch (error) {
    return res.status(500).json({
      error: `Internal Server Error: ${error.message}`,
    });
  }
};

export default getUsers;