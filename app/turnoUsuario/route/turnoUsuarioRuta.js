"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoUsuarioController_1 = __importDefault(require("../controller/turnoUsuarioController"));
class TurnoUsuarioRuta {
    constructor() {
        this.apiRutaTurnoUsuario = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaTurnoUsuario.post("/add", turnoUsuarioController_1.default.crearTurnoUsuario);
        this.apiRutaTurnoUsuario.get("/list", turnoUsuarioController_1.default.listarTurnoUsuario);
        this.apiRutaTurnoUsuario.put("/update", turnoUsuarioController_1.default.actulizarTurnousuario);
        this.apiRutaTurnoUsuario.delete("/delete/:codUsuario/:codTurno/:codPuesto", turnoUsuarioController_1.default.eliminarTurnoUsuario);
    }
}
const turnoUsuarioRuta = new TurnoUsuarioRuta();
exports.default = turnoUsuarioRuta.apiRutaTurnoUsuario;
