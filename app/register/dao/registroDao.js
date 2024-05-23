"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registro_sql_1 = require("../repository/registro_sql");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const acceso_1 = __importDefault(require("../../../models/acceso"));
const usuario_1 = __importDefault(require("../../../models/usuario"));
const generarTokenControlador_1 = __importDefault(require("../../shared/controller/generarTokenControlador"));
class RegistroDao {
    static nuevoUsuario(res, objUsuario, objAcceso) {
        return __awaiter(this, void 0, void 0, function* () {
            let accion = 1, codUsuario = 0;
            let usuarioRepository = conexionBD_1.default.getRepository(usuario_1.default);
            const usuarioAcceso = yield this.accesoRepository.findBy({ nombreAcceso: objAcceso.nombreAcceso });
            if (usuarioAcceso.length == 0) {
                accion = 2;
                codUsuario = (yield usuarioRepository.insert(objUsuario)).identifiers[0].codUsuario;
                console.log(codUsuario);
                let claveCifrado = bcryptjs_1.default.hashSync(objAcceso.claveAcceso);
                objAcceso.codUsuario = codUsuario;
                objAcceso.claveAcceso = claveCifrado;
                yield this.accesoRepository.insert(objAcceso);
            }
            yield usuarioRepository.query(registro_sql_1.SQL_REGISTRO.DATOS_TOKEN, [codUsuario])
                .then((respuesta) => {
                switch (accion) {
                    case 1:
                        res.status(400).json({ mensaje: "Fallo el Usuario ya existe" });
                        break;
                    case 2:
                        const token = generarTokenControlador_1.default.procesarRespuesta(respuesta[0]);
                        res.status(200).json({ tokenApp: token });
                        break;
                }
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al registrar el usuario" });
            });
        });
    }
    static obtenerUsuario(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.accesoRepository.find().then((respuesta) => {
                const arregloTurno = respuesta;
                res.status(200).json(arregloTurno);
            }).catch((mierrorcito) => {
                res.status(400).json({ mensaje: "fallo al consultar el registro usuario" });
            });
        });
    }
    static unoRegistro(res, codUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.accesoRepository.findBy({ codUsuario: codUsuario })
                .then((respuesta) => {
                res.status(200).json({ mesaje: "registro usuario encontrado", respuesta: respuesta });
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo al encontar el registro usuario" });
            });
        });
    }
}
RegistroDao.accesoRepository = conexionBD_1.default.getRepository(acceso_1.default);
exports.default = RegistroDao;
