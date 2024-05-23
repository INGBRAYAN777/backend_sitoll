"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peajeControlador_1 = __importDefault(require("../controller/peajeControlador"));
class PeajeRuta {
    constructor() {
        this.apiRutaPeaje = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaPeaje.post("/add", peajeControlador_1.default.crearPeaje);
        this.apiRutaPeaje.get("/list", peajeControlador_1.default.listarPeaje);
        this.apiRutaPeaje.put("/update/:codPeaje", peajeControlador_1.default.actulizarPeaje);
        this.apiRutaPeaje.delete("/delete/:codPeaje", peajeControlador_1.default.eliminarPeaje);
    }
}
const peajeRuta = new PeajeRuta();
exports.default = peajeRuta.apiRutaPeaje;
