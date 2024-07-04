import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(404).json({ error: `${req.method} is not supported` });
    }
    const { email, password } = req.body;
    console.log(req.body);
    // const error = schema.validate({ email, password });
    // console.log(error);
}