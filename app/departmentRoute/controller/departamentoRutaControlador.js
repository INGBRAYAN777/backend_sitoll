"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoRutaDao_1 = __importDefault(require("../dao/departamentoRutaDao"));
class DepartamentoRutaControlador extends departamentoRutaDao_1.default {
    crearDepartamento(req, res) {
        const objDepaRuta = req.body;
        DepartamentoRutaControlador.crear(res, objDepaRuta);
    }
    consultarDepartamentoRuta(req, res) {
        DepartamentoRutaControlador.listar(res);
    }
}
const departamentoRutaControlador = new DepartamentoRutaControlador();
exports.default = departamentoRutaControlador;
