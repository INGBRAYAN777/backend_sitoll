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
const ruta_1 = __importDefault(require("../../../models/ruta"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class RutaDAO {
    static agregarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.insert(objRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta guardada", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                /console.log(miErrosito);/;
                res.status(400).json({ mensaje: "Fallo al insertar la ruta" });
            });
        });
    }
    static obtenerRuta(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.find().then((respuesta) => {
                const arregloRuta = respuesta;
                res.status(200).json(arregloRuta);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al consultar las rutas" });
            });
        });
    }
    static editarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.update({ codRuta: objRuta.codRuta }, objRuta)
                .then(() => {
                res.status(200).json({ mensaje: "ruta actualizado ", objeto: objRuta });
            }).catch((miErrorsito) => {
                console.log(miErrorsito);
                res.status(400).json({ mensaje: "Fallo al actualizar la ruta" });
            });
        });
    }
    static borrarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.delete({ codRuta: codRuta })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta eliminada", respuesta: respuesta.raw });
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al eliminar la ruta" });
            });
        });
    }
    static mostrarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.findOneBy({ codRuta: codRuta })
                .then((respuesta) => {
                res.status(200).json(respuesta);
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al mostrar la ruta", });
            });
        });
    }
}
RutaDAO.rutaRepository = conexionBD_1.default.getRepository(ruta_1.default);
exports.default = RutaDAO;
