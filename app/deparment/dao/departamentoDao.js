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
const departamento_1 = __importDefault(require("../../../models/departamento"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class DepartamentoDao {
    static agregarDepartamento(res, objDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoReporsitory.insert(objDepartamento)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "departamento registrado", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                /*console.log(miErrorsito);*/
                res.status(400).json({ mesaje: "fallo al insertar el departamento" });
            });
        });
    }
    static obtenerDepartamentos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoReporsitory.find().then((respuesta) => {
                const arregloDepartamentos = respuesta;
                res.status(200).json(arregloDepartamentos);
            }).catch((mierrorcito) => {
                res.status(400).json({ mensaje: "fallo al consultar los departamentos" });
            });
        });
    }
    static editarDepartamento(res, objDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoReporsitory.update({ codDepartamento: objDepartamento.codDepartamento }, objDepartamento)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "departamento actualizado", objeto: objDepartamento });
            }).catch((miErrorcito) => {
                res.status(400).json({ mensaje: "fallo al actualizar el departamento" });
            });
        });
    }
    static eliminarDepartamento(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoReporsitory.delete({ codDepartamento: codDepartamento })
                .then((respuesta) => {
                res.status(200).json({ mesaje: "departamento eliminando", respuesta: respuesta.raw });
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo el eliminar el departamento" });
            });
        });
    }
    static unoDepartamento(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoReporsitory.findBy({ codDepartamento: codDepartamento })
                .then((respuesta) => {
                res.status(200).json({ mesaje: "departamento encontrado", respuesta: respuesta });
            }).catch((mierrrorcito) => {
                res.status(400).json({ mensaje: "fallo al encontar el departamento" });
            });
        });
    }
}
DepartamentoDao.departamentoReporsitory = conexionBD_1.default.getRepository(departamento_1.default);
exports.default = DepartamentoDao;
