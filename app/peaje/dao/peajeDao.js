"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const peaje_1 = __importDefault(require("../../../models/peaje"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
const administrarImagen_1 = __importDefault(require("../../../config/utilities/administrarImagen"));
class PeajeDao {
    static agregarPeaje(res, objPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajeRepository.insert(objPeaje)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "peaje registrado", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                /console.log(miErrorsito);/;
                res.status(400).json({ mesaje: "fallo al insertar el peaje" });
            });
        });
    }
    static obtenerPeaje(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajeRepository.find().then((respuesta) => {
                const arregloPeaje = respuesta;
                arregloPeaje.map((objPeaje) => {
                    let nombrePrivado = objPeaje.fotoPrivadaPeaje;
                    let base64 = administrarImagen_1.default.cargarImagenBase64(nombrePrivado, var_imagenes_1.default.rutaFotoSistema + nombrePrivado, 500);
                    objPeaje.base64Peaje = base64;
                });
                res.status(200).json(arregloPeaje);
            }).catch((miErrorcito) => {
                res.status(400).json({ mensaje: "fallo al consultar los peajes" });
            });
        });
    }
    static editarPeaje(res, codPeaje, objPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(codPeaje, "codigooo");
            let encontrado = yield this.peajeRepository.findOne({ where: { codPeaje: codPeaje } });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotoSistema + encontrado.fotoPrivadaPeaje;
                console.log(rutaImagenPrivada);
                administrarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.peajeRepository.update({ codPeaje: codPeaje }, objPeaje)
                    .then((respuesta) => {
                    res.status(200).json({ mensaje: "peaje actualizado", objeto: objPeaje });
                }).catch((mierrorcito) => {
                    console.log(mierrorcito);
                    res.status(400).json({ mensaje: "fallo al actualizar el peaje" });
                });
            }
            else {
                res.status(400).json({ mensaje: "fallo al consultar el peaje" });
            }
        });
    }
    static eliminarPeaje(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.peajeRepository.findOne({ where: { codPeaje: codPeaje } });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotoSistema + encontrado.fotoPrivadaPeaje;
                administrarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.peajeRepository.delete({ codPeaje: codPeaje }).then((respuesta) => {
                    res.status(200).json({ mensaje: "Peaje Eliminado", respuesta: respuesta.affected });
                }).catch((miError) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar el Peaje" });
                });
            }
            else {
                res.status(400).json({ mensaje: "Fallo al consultar el peaje" });
            }
        });
    }
}
PeajeDao.peajeRepository = conexionBD_1.default.getRepository(peaje_1.default);
exports.default = PeajeDao;
