import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    encryptPassword(password:string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});
//function flecha
// Método para encriptar la contraseña
userSchema.methods.encryptPassword = async function (password: string): Promise<string> {
    if (!password) {
        throw new Error("Password no puede estar vacío o undefined");
    }
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

//function ECMA5
userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.get('password'));
};

export default model<IUser>('User' , userSchema);