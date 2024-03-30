import mongoose from "mongoose";

export const connectBD = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected:${conn.connection.host} `);
  } catch (err) {
     console.log(`Error:${err.message}`)
     process.exit(1)
  }
};
