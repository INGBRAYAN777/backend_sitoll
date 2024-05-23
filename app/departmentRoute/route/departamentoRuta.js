"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoRutaControlador_1 = __importDefault(require("../controller/departamentoRutaControlador"));
class DepartamentoRutaR {
    constructor() {
        this.apiRutaR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaR.post("/add", departamentoRutaControlador_1.default.crearDepartamento);
        this.apiRutaR.get("/list", departamentoRutaControlador_1.default.consultarDepartamentoRuta);
    }
}
const departamentoRutaR = new DepartamentoRutaR();
exports.default = departamentoRutaR.apiRutaR;
