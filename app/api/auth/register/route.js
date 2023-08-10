import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN);
};

export const POST = async (req) => {
  const { email, password, confirmpassword } = await req.json();
  try {
    if (!email || !password || !confirmpassword) {
      return NextResponse.json(
        { msg: "check your fields some values are missing" },
        { status: 400 }
      );
    }

    if (password === confirmpassword) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const hashedConfirm = await bcrypt.hash(confirmpassword, 10);
      const token = Math.floor(Math.random() * 100000).toFixed(0);
      const newUser = await prisma.user.create({
        data: {
          confirmpassword: hashedConfirm,
          email,
          password: hashedPassword,
          token,
        },
      });

      if (newUser) {
        const authCookie = createToken(newUser.id);
        cookies().set("ptech_cookie", authCookie);

        let mailTransporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "makavelisoftwares@gmail.com",
            pass: "vombdsmrsgyxrwxz",
          },
        });

        let details = {
          from: "lalamzuri580@gmail.com",
          to: `${newUser.email}`,
          subject: "App token",
          text: `Your token is ${newUser.token}`,
        };

        mailTransporter.sendMail(details, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("email sent");
          }
        });
        //   res.status(200).json({ msg: "ORDER PLACED", order });

        return NextResponse.json({ redirect: "/token" }, { status: 200 });
      }

      if (!newUser) {
        return NextResponse.json("failed to create user", { status: 400 });
      }
    }

    if (password !== confirmpassword) {
      return NextResponse.json(
        { msg: "mismatching passwords" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};

export const PUT = async (req) => {
  const Token = cookies().get("ptech_cookie").value;
  const { token } = await req.json();
  if (Token) {
    return jwt.verify(Token, process.env.SECRET_TOKEN, async (err, data) => {
      if (!err) {
        const id = data?.id;
        const getUser = await prisma.user.findFirst({ where: { id: id } });
        if (getUser) {
          if (token === getUser.token) {
            return NextResponse.json("/parks", { status: 200 });
          }
        } else {
          return NextResponse.json("/register", { status: 200 });
        }
      } else {
        console.log(err);
      }
    });
  }
};
