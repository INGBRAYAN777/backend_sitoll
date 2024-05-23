"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnoUsuarioDao_1 = __importDefault(require("../dao/turnoUsuarioDao"));
class TurnoUsuarioControlador extends turnoUsuarioDao_1.default {
    crearTurnoUsuario(req, res) {
        let objTurnoUsuario;
        objTurnoUsuario = req.body;
        TurnoUsuarioControlador.agregarTurnoUsuario(res, objTurnoUsuario);
    }
    listarTurnoUsuario(req, res) {
        TurnoUsuarioControlador.obtenerTurnoUsuario(res);
    }
    actulizarTurnousuario(req, res) {
        delete req.body.datosUsuario;
        let objTurno;
        objTurno = req.body;
        TurnoUsuarioControlador.editarTurnoUsuario(res, objTurno);
    }
    eliminarTurnoUsuario(req, res) {
        let codUsuario = Number(req.params.codUsuario);
        let codTurno = Number(req.params.codTurno);
        let codPuesto = Number(req.params.codPuesto);
        if (!isNaN(codUsuario) && !isNaN(codTurno) && !isNaN(codPuesto)) {
            TurnoUsuarioControlador.eliminarTurnoUsuario(res, codUsuario, codTurno, codPuesto);
        }
        else {
            res.status(400).json({ mesaje: "codigo de turno usuarios no valido" });
        }
    }
}
const turnoUsuarioControlador = new TurnoUsuarioControlador();
exports.default = turnoUsuarioControlador;
