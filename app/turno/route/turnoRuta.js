"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoControlador_1 = __importDefault(require("../controller/turnoControlador"));
class TurnoRuta {
    constructor() {
        this.apiRutaTurno = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaTurno.post("/add", turnoControlador_1.default.crearTurno);
        this.apiRutaTurno.get("/list", turnoControlador_1.default.listarTurno);
        this.apiRutaTurno.put("/update", turnoControlador_1.default.actulizarTurno);
        this.apiRutaTurno.delete("/delete/:codTurno", turnoControlador_1.default.eliminarTurno);
        this.apiRutaTurno.get("/one/:codTurno", turnoControlador_1.default.unTurno);
    }
}
const turnoRuta = new TurnoRuta();
exports.default = turnoRuta.apiRutaTurno;
