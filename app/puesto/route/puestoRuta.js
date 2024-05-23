"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestoControlador_1 = __importDefault(require("../controller/puestoControlador"));
class PuestoRuta {
    constructor() {
        this.apiRutaPuesto = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaPuesto.post("/add", puestoControlador_1.default.crearPuesto);
        this.apiRutaPuesto.get("/list", puestoControlador_1.default.listarPuesto);
        this.apiRutaPuesto.put("/update", puestoControlador_1.default.actulizarPuesto);
        this.apiRutaPuesto.delete("/delete/:codPuesto", puestoControlador_1.default.eliminarPuesto);
    }
}
const puestoRuta = new PuestoRuta();
exports.default = puestoRuta.apiRutaPuesto;
