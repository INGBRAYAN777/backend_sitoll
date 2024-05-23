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
const puesto_1 = __importDefault(require("../../../models/puesto"));
class PuestoDao {
    static agregarPuesto(res, objPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.insert(objPuesto)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "puesto registrado", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                /*console.log(miErrorsito);*/
                res.status(400).json({ mesaje: "fallo al insertar el puesto" });
            });
        });
    }
    static obtenerPuesto(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.find().then((respuesta) => {
                const arregloPuesto = respuesta;
                res.status(200).json(arregloPuesto);
            }).catch((mierrorcito) => {
                res.status(400).json({ mensaje: "fallo al consultar los puestos" });
            });
        });
    }
    static editarPuesto(res, objPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.update({ codPuesto: objPuesto.codPuesto }, objPuesto)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "puesto actualizado", objeto: objPuesto });
            }).catch((mierrorcito) => {
                res.status(400).json({ mensaje: "fallo al actualizar el puesto" });
            });
        });
    }
    static eliminarPuesto(res, codPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.delete({ codPuesto: codPuesto })
                .then((respuesta) => {
                res.status(200).json({ mesaje: "puesto eliminando", respuesta: respuesta.raw });
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo el eliminar el puesto" });
            });
        });
    }
}
PuestoDao.puestoRepository = conexionBD_1.default.getRepository(puesto_1.default);
exports.default = PuestoDao;
