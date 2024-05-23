"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resgistroControlador_1 = __importDefault(require("../controller/resgistroControlador"));
class RegistroRuta {
    constructor() {
        this.rutaAPIRegistro = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.rutaAPIRegistro.post("/user", resgistroControlador_1.default.registrarUsuario);
        this.rutaAPIRegistro.get("/list", resgistroControlador_1.default.listarUsuairo);
        this.rutaAPIRegistro.get("/one/:codUsuario", resgistroControlador_1.default.unoRegistro);
    }
}
const registrRuta = new RegistroRuta;
exports.default = registrRuta.rutaAPIRegistro;
