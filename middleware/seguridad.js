"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Seguridad {
    verificarToken(req, res, next) {
        if (!req.headers.authorization) {
            res.status(401).json({ respuesta: "Petición negada por el sistema de seguridad" });
        }
        else {
            try {
                const token = req.headers.authorization.split(' ')[1];
                if (req.method != "PUT") {
                    const datosUsuario = jsonwebtoken_1.default.verify(token, 'laClaveSuperSecreta');
                    req.body.datosUsuario = datosUsuario;
                }
                next();
            }
            catch (miError) {
                res.status(401).json({ mensaje: "Intento de fraude" });
            }
        }
    }
}
const seguridad = new Seguridad();
exports.default = seguridad;
