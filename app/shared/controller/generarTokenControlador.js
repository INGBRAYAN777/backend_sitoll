"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerarTokenControlador {
    static procesarRespuesta(registro) {
        let token = jsonwebtoken_1.default.sign({
            id: registro.cod_usuario,
            nombreAcceso: registro.nombre_acceso,
            nombreUsuario: registro.nombres_usuario,
            apellidosUsuario: registro.apellidos_usuario,
            rol: registro.rol_usuario
        }, 'laClaveSuperSecreta', { expiresIn: '10h' });
        return token;
    }
}
exports.default = GenerarTokenControlador;
