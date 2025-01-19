import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

// Function to hash a password
export const hashString = async (useValue) => {
  const salt = await bcrypt.genSalt(10);

  const hashedpassword = await bcrypt.hash(useValue, salt);
  return hashedpassword;
};

// Function to compare a plain-text password with a hashed password
export const compareString = async (userPassword, password) => {
  const isMatch = await bcrypt.compare(userPassword, password);
  return isMatch;
};

//JSON WEBTOKEN for authentication or authorization purposes.
export function createJWT(id) {
  return JWT.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
}
