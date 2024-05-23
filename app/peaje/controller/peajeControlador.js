"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peajeDao_1 = __importDefault(require("../dao/peajeDao"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
const nanoid_1 = require("nanoid");
const administrarImagen_1 = __importDefault(require("../../../config/utilities/administrarImagen"));
class PeajeControlador extends peajeDao_1.default {
    crearPeaje(req, res) {
        let objPeaje = req.body;
        let tipoImagen = objPeaje.fotoPublicaPeaje.split('.')[1];
        let nombreFotoPrivada = 'IMG_' + (0, nanoid_1.nanoid)(15) + '.' + tipoImagen;
        objPeaje.fotoPrivadaPeaje = nombreFotoPrivada;
        let rutaAlmacenamiento = var_imagenes_1.default.rutaFotoSistema;
        administrarImagen_1.default.crearImagen(nombreFotoPrivada, objPeaje.base64Peaje, rutaAlmacenamiento);
        objPeaje = req.body;
        PeajeControlador.agregarPeaje(res, objPeaje);
    }
    listarPeaje(req, res) {
        PeajeControlador.obtenerPeaje(res);
    }
    actulizarPeaje(req, res) {
        delete req.body.datosUsuario;
        let objPeaje = req.body;
        let codigo = Number(req.params.codPeaje);
        let tipoImagen = objPeaje.fotoPublicaPeaje.split('.')[1];
        let nombreFotoPrivada = 'IMG_' + (0, nanoid_1.nanoid)(15) + '.' + tipoImagen;
        objPeaje.fotoPrivadaPeaje = nombreFotoPrivada;
        let rutaAlmacenamiento = var_imagenes_1.default.rutaFotoSistema;
        administrarImagen_1.default.crearImagen(nombreFotoPrivada, objPeaje.base64Peaje, rutaAlmacenamiento);
        delete objPeaje.base64Peaje;
        PeajeControlador.editarPeaje(res, codigo, objPeaje);
    }
    eliminarPeaje(req, res) {
        let codPeaje = Number(req.params.codPeaje);
        if (!isNaN(codPeaje)) {
            PeajeControlador.eliminarPeaje(res, codPeaje);
        }
        else {
            res.status(400).json({ mesaje: "codigo de peaje no valido" });
        }
    }
}
const peajeControlador = new PeajeControlador();
exports.default = peajeControlador;
