import { Elysia } from 'elysia';
import * as bcrypt from 'bcrypt';
import User from '@/types/User';

export const authController = (app: Elysia) =>
  app.group('auth', (app: Elysia) =>
    app.post('/register', async (handler: Elysia.Handler) => {
      try {
        const { username, email, password } = handler.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (existingUser) {
            handler.set.status = 409;
            return { message: 'User already exists!', status: 409 };
        }

        // Hash the password using bcrypt
        // const hashedPassword = await Bun.password.hash(password, {
        //     algorithm: "bcrypt",
        //     cost: 4,
        // });

        // Hash the password useing argon2 
        // const hashedPassword = await Bun.password.hash(password, {
        //     memoryCost: 4, // memory usage in kibibytes
        //     timeCost: 3, // the number of iterations
        // });
        const hashedPassword = await Bun.password.hash(password);

        // Create a new user object
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        // Save the user to the database
        await newUser.save();

        handler.set.status = 201;
      } catch (error) {
        console.error(error);
        handler.set.status = 500;
        return { message: 'Unable to create user!', status: 500 };
      }
    })
    .post('/login', async (handler: Elysia.Handler) => {
        try {
            const { username, password } = handler.body;
    
            // Find the user in the database
            const user = await User.findOne({ username });
            const passwordUser = await User.findOne({ username }).select('+password');

            // If the user doesn't exist, return an error
            if (!user) {
                handler.set.status = 401;
                return { message: 'Invalid username!', status: 401 };
            }
            const isPasswordValid = await Bun.password.verify(password, passwordUser?.password as string);
            // If the password is invalid, return an error
            if (!isPasswordValid) {
                handler.set.status = 401;
                return { message: 'Invalid password!', status: 401 };
            }
    
            // If the password is valid, return a success message
            handler.set.status = 200;
            return { message: 'Login successful!', status: 200 };
        } catch (error) {
            console.error(error);
            handler.set.status = 500;
            return { message: 'Unable to log in!', status: 500 };
        }
    })
);