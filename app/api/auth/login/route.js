import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN);
};

export const POST = async (req) => {
  const { password, email } = await req.json();

  try {
    if (email) {
      const getUser = await prisma.user.findFirst({ where: { email } });

      if (!getUser) {
        return NextResponse.json({ msg: "invalid user" }, { status: 400 });
      }

      if (getUser) {
        const comparePassword = await bcrypt.compare(
          password,
          getUser.password
        );

        if (!comparePassword) {
          return NextResponse.json(
            { msg: "invalid password" },
            { status: 400 }
          );
        }

        if (comparePassword) {
          const authCookie = createToken(getUser.id);
          cookies().set("ptech_cookie", authCookie);
          return NextResponse.json(
            { redirect: "/parks" },
            {
              status: 200,
            }
          );
        }
      }
    }
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
