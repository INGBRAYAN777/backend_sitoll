"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rutaDao_1 = __importDefault(require("../dao/rutaDao"));
class RutaControlador extends rutaDao_1.default {
    crearRuta(req, res) {
        let objRuta = req.body;
        console.log(req.body);
        RutaControlador.agregarRuta(res, objRuta);
    }
    listarRuta(req, res) {
        RutaControlador.obtenerRuta(res);
    }
    actualizarDepartamento(req, res) {
        delete req.body.datosUsuario;
        let objRuta;
        objRuta = req.body;
        RutaControlador.editarRuta(res, objRuta);
    }
    eliminarRuta(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            RutaControlador.borrarRuta(res, codRuta);
        }
        else {
            res.status(400).json({ mensaje: "Codigo ruta no valido" });
        }
    }
    unoRuta(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            RutaControlador.mostrarRuta(res, codRuta);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de ruta no valido" });
        }
    }
}
const rutaControlador = new RutaControlador();
exports.default = rutaControlador;
