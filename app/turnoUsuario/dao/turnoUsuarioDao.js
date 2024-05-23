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
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const turnosUsuario_1 = __importDefault(require("../../../models/turnosUsuario"));
class TurnoUsuarioDao {
    static agregarTurnoUsuario(res, objTurnoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoUsuarioReporsitory.insert(objTurnoUsuario)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "turno usuario registrado", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "fallo al insertar el turno usuario" });
            });
        });
    }
    static obtenerTurnoUsuario(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoUsuarioReporsitory.find().then((respuesta) => {
                const arregloTurnoUsuario = respuesta;
                res.status(200).json(arregloTurnoUsuario);
            }).catch((mierrorcito) => {
                res.status(400).json({ mensaje: "fallo al consultar los turnos usuario" });
            });
        });
    }
    static editarTurnoUsuario(res, objTurnoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoUsuarioReporsitory.update({ codUsuario: objTurnoUsuario.codUsuario }, objTurnoUsuario)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "turno actualizado", objeto: objTurnoUsuario });
            }).catch((miErrorcito) => {
                res.status(400).json({ mensaje: "fallo al actualizar el turno" });
            });
        });
    }
    static eliminarTurnoUsuario(res, codUsuario, codTurno, codPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoUsuarioReporsitory.delete({ codUsuario: codUsuario, codTurno: codTurno, codPuesto: codPuesto })
                .then((respuesta) => {
                res.status(200).json({ mesaje: "turno usuario eliminando", respuesta: respuesta.raw });
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo el eliminar el turno usuario" });
            });
        });
    }
}
TurnoUsuarioDao.turnoUsuarioReporsitory = conexionBD_1.default.getRepository(turnosUsuario_1.default);
exports.default = TurnoUsuarioDao;
