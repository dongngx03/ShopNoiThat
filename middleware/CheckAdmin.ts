import jwt, { JwtPayload } from "jsonwebtoken";

const CheckAdmin = async (req: Request) => {
    const token = await req.headers.get('Authorization')?.split(" ")[1]

    if (!token) {
        return false
    }
    try {
        const decode = await jwt.verify(token, "decode_key") as JwtPayload
        if (decode) return decode?.role
    } catch (error) {
        return false
    }
}

export default CheckAdmin