"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutaControlador_1 = __importDefault(require("../controller/rutaControlador"));
class RutaDepartamento {
    constructor() {
        this.apiDepartamentoRuta = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiDepartamentoRuta.post("/add", rutaControlador_1.default.crearRuta);
        this.apiDepartamentoRuta.get("/list", rutaControlador_1.default.listarRuta);
        this.apiDepartamentoRuta.put("/update", rutaControlador_1.default.actualizarDepartamento);
        this.apiDepartamentoRuta.delete("/delete/:codRuta", rutaControlador_1.default.eliminarRuta);
        this.apiDepartamentoRuta.get("/one/:codRuta", rutaControlador_1.default.unoRuta);
    }
}
const rutaDepartamento = new RutaDepartamento();
exports.default = rutaDepartamento.apiDepartamentoRuta;
