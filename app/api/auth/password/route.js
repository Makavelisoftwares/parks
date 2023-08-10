import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.SECRET_TOKEN);
// };

export const PUT = async (req) => {
  const { password, email, newpassword } = await req.json();

  try {
    if (email) {
      const getUser = await prisma.user.findFirst({ where: { email } });

      if (!getUser) {
        return NextResponse.json({ msg: "invalid user" }, { status: 400 });
      }

      if (getUser) {
        const comparedpass = await bcrypt.compare(password, getUser.password);

        if (comparedpass) {
          const hashpassword = await bcrypt.hash(newpassword, 10);

          await prisma.user.update({
            where: { id: getUser.id },
            data: { password: hashpassword },
          });

          return NextResponse.json(
            { redirect: "/" },
            {
              status: 200,
            }
          );
        }
        if (!comparedpass) {
          return NextResponse.json(
            { msg: "invalid password" },
            { status: 400 }
          );
        }
      }
    }
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
