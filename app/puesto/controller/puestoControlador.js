"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puestoDao_1 = __importDefault(require("../dao/puestoDao"));
class PuestoControlador extends puestoDao_1.default {
    crearPuesto(req, res) {
        let objPuesto;
        objPuesto = req.body;
        PuestoControlador.agregarPuesto(res, objPuesto);
    }
    listarPuesto(req, res) {
        PuestoControlador.obtenerPuesto(res);
    }
    actulizarPuesto(req, res) {
        delete req.body.datosUsuario;
        let objPuesto;
        objPuesto = req.body;
        PuestoControlador.editarPuesto(res, objPuesto);
    }
    eliminarPuesto(req, res) {
        let codPuesto = Number(req.params.codPuesto);
        if (!isNaN(codPuesto)) {
            PuestoControlador.eliminarPuesto(res, codPuesto);
        }
        else {
            res.status(400).json({ mesaje: "codigo de puesto no valido" });
        }
    }
}
const puestoControlador = new PuestoControlador();
exports.default = puestoControlador;
