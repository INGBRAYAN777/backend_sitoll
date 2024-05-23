"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoDao_1 = __importDefault(require("../dao/departamentoDao"));
class DepartamentoControlador extends departamentoDao_1.default {
    crearDepartamento(req, res) {
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoControlador.agregarDepartamento(res, objDepartamento);
    }
    listarDepartamento(req, res) {
        DepartamentoControlador.obtenerDepartamentos(res);
    }
    actulizarDepartamento(req, res) {
        delete req.body.datosUsuario;
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoControlador.editarDepartamento(res, objDepartamento);
    }
    eliminarDepartamento(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            DepartamentoControlador.eliminarDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ mesaje: "codigo de departamento no valido" });
        }
    }
    unoDepartamento(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            DepartamentoControlador.unoDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ mesaje: "codigo de departamento no valido" });
        }
    }
}
const departamentoControlador = new DepartamentoControlador();
exports.default = departamentoControlador;
