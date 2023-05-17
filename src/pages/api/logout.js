export default function logout(req, res) {
  // Perform any server-side logout logic here
  // Replace this with your own logic

  // Example code to clear the session
  req.session.destroy();

  res.status(200).json({ message: "Logout successful" });
}
