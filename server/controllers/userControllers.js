import express from "express";
import bcrypt from "bcrypt";
import User from "../schemas/userSchemas.js";
import jwt from "jsonwebtoken";

const router = express.Router();

export const createUser = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      const existingUser = await User.findOne({ where: { email } });
      const existingFullname = await User.findOne({where: {fullname}});
      if (existingFullname) {
          return res.status(400).json({ message: "Этот пользователь уже зарегистрирован!" });
      }
      
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const cleanedEmail = email.trim();
      if (!emailRegex.test(cleanedEmail)){
          return res.status(400).json({ message: "Неверный формат почты" });
      } else if (existingUser) {
          return res.status(400).json({ message: "Этот email уже зарегистрирован!" });
      }
  
      if (password.length < 6){
          return res.status(400).json({ message: "Неверный пароль" });
      }
      // Хешируем пароль перед сохранением
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Создаем нового пользователя
      const newUser = await User.create({
          fullname,
          email,
          password: hashedPassword
      });
  
      res.status(201).json({ message: "Пользователь зарегистрирован!", user: newUser });
  
  } catch (error) {
      console.error("Ошибка при регистрации:", error);
      res.status(500).json({ message: "Ошибка сервера" });
  }
  }
  