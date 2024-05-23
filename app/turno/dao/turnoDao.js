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
const turnos_1 = __importDefault(require("../../../models/turnos"));
class TurnoDao {
    static agregarTurno(res, objTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoReporsitory.insert(objTurno)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "turno registrado", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mesaje: "fallo al insertar el turno" });
            });
        });
    }
    static obtenerTurno(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoReporsitory.find().then((respuesta) => {
                const arregloTurno = respuesta;
                res.status(200).json(arregloTurno);
            }).catch((mierrorcito) => {
                res.status(400).json({ mensaje: "fallo al consultar los turnos" });
            });
        });
    }
    static unTurno(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoReporsitory.findBy({ codTurno: codTurno })
                .then((respuesta) => {
                res.status(200).json(respuesta[0]);
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo al encontar el turno" });
            });
        });
    }
    static editarTurno(res, objTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoReporsitory.update({ codTurno: objTurno.codTurno }, objTurno)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "turno actualizado", objeto: objTurno });
            }).catch((miErrorcito) => {
                res.status(400).json({ mensaje: "fallo al actualizar el turno" });
            });
        });
    }
    static eliminarTurno(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoReporsitory.delete({ codTurno: codTurno })
                .then((respuesta) => {
                res.status(200).json({ mesaje: "turno eliminando", respuesta: respuesta.raw });
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo el eliminar el turno" });
            });
        });
    }
}
TurnoDao.turnoReporsitory = conexionBD_1.default.getRepository(turnos_1.default);
exports.default = TurnoDao;
